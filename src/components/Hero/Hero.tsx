import { useEffect, useState } from "react"
import { toast } from "sonner"
import {
  ArrowBox,
  BottomSection,
  CharacterImage,
  CountdownBox,
  CountdownRow,
  DateBadge,
  DateBox,
  DateCaption,
  Description,
  DiamondImage,
  FeatureItem,
  FeatureRow,
  FeaturesList,
  HeroBackdropMasked,
  HeroBlurOne,
  HeroBlurTwo,
  HeroContainer,
  InlineSignup,
  LeftColumn,
  LogoWrapper,
  MainContentRow,
  RightColumn,
  SeparatorIcon,
  SignupInput,
  SignupLabel,
  StyledHero,
  StyledLogo,
  SubscribeButton,
  Tagline,
} from "./styles"
import heroBlurTwoImage from "../../img/hero/blur-2.webp"
import heroBlurOneImage from "../../img/hero/blur.webp"
import cyanArrowLeft from "../../img/hero/cyan-arrow-left.webp"
import cyanArrowRight from "../../img/hero/cyan-arrow-right.svg"
import dateArrow from "../../img/hero/date-arrow.svg"
import lightstickImage from "../../img/hero/lightstick.webp"
import DMF25Logo from "../../img/music-festival/DMF25_Logo2.png"
import { subscribeToNewsletter } from "../../modules/newsletter"

type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [showCountdown, setShowCountdown] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Basic countdown timer to Dec 3rd, 12:00 UTC
  useEffect(() => {
    const targetUtc = new Date(Date.UTC(2025, 11, 3, 12, 0, 0)) // month is 0-based; 11 = December

    const updateCountdown = () => {
      const now = new Date()
      const diff = targetUtc.getTime() - now.getTime()

      if (diff <= 0) {
        setShowCountdown(false)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const totalSeconds = Math.floor(diff / 1000)
      const days = Math.floor(totalSeconds / (60 * 60 * 24))
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
      const seconds = totalSeconds % 60

      setShowCountdown(true)
      setCountdown({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (value: number) => value.toString().padStart(2, "0")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      toast.error("Email is required")
      return
    }
    // Basic email regex; adequate for client-side validation
    const emailRegex =
      /^(?:[a-zA-Z0-9_'^&+-])+(?:\.(?:[a-zA-Z0-9_'^&+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    if (!emailRegex.test(trimmed)) {
      toast.error("Please enter a valid email", {
        duration: 10000,
      })
      return
    }
    try {
      setSubmitting(true)
      await subscribeToNewsletter(trimmed)
      toast.success(
        "Almost done! Check your inbox to confirm your subscription."
      )
      setEmail("")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Subscription failed"
      toast.error(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <StyledHero>
      {/* Backdrop blur applied only where the blur PNGs have alpha */}
      <HeroBackdropMasked $mask={heroBlurOneImage} aria-hidden="true" />
      <HeroBlurOne src={heroBlurOneImage} alt="" aria-hidden="true" />
      <HeroBlurTwo src={heroBlurTwoImage} alt="" aria-hidden="true" />
      <CharacterImage
        src={lightstickImage}
        alt="Festival Character"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: scrollY * 0.2,
        }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          y: { duration: 1, delay: 0 },
          scale: { duration: 1, delay: 0.5 },
        }}
      />
      <HeroContainer>
        {/* Main Content Row - Two Columns */}
        <MainContentRow>
          {/* Left Column */}
          <LeftColumn>
            <LogoWrapper
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <StyledLogo src={DMF25Logo} alt="Decentraland Music Festival" />
              <Tagline>
                WHERE THE STREAM <br /> HITS THE MAIN STAGE
              </Tagline>
              <Description>
                A four-day festival where fans and streamers redefine
                &ldquo;going live.&rdquo;
              </Description>
            </LogoWrapper>

            <BottomSection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <SignupLabel htmlFor="email-input">Join the festival</SignupLabel>
              <InlineSignup
                onSubmit={handleSubscribe}
                aria-label="Notify signup"
              >
                <SignupInput
                  id="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                  disabled={submitting}
                />
                <SubscribeButton type="submit" disabled={submitting}>
                  <span>{submitting ? "Subscribing..." : "SIGN UP NOW"}</span>
                </SubscribeButton>
              </InlineSignup>
              <FeaturesList>
                <FeatureRow>
                  <FeatureItem>FREE TO ENTER</FeatureItem>
                  <SeparatorIcon src={cyanArrowLeft} alt="" />
                  <FeatureItem>NO HEADSET NEEDED</FeatureItem>
                  <SeparatorIcon src={cyanArrowRight} alt="" />
                  <FeatureItem>NEW FAN EXPERIENCES</FeatureItem>
                </FeatureRow>
              </FeaturesList>
            </BottomSection>
          </LeftColumn>

          {/* Right Column */}
          <RightColumn>
            <div className="countdown-container">
              <DateBadge
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <ArrowBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <img src={dateArrow} alt="arrow" />
                </ArrowBox>
                <DateBox>DEC 3-6</DateBox>
                <DateBox>2025 {/* TODO: Add the year dynamically */}</DateBox>
              </DateBadge>
              <DateCaption
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                HOSTED BY DECENTRALAND, THE SOCIAL VIRTUAL WORLD
              </DateCaption>
            </div>
            {showCountdown && (
              <CountdownRow
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <CountdownBox $variant="days">
                  <div className="countdown-value">{pad(countdown.days)}</div>
                  <div className="countdown-label">DAYS</div>
                </CountdownBox>
                <CountdownBox $variant="hours">
                  <div className="countdown-value">{pad(countdown.hours)}</div>
                  <div className="countdown-label">HOURS</div>
                </CountdownBox>
                <CountdownBox $variant="minutes">
                  <div className="countdown-value">
                    {pad(countdown.minutes)}
                  </div>
                  <div className="countdown-label">MINUTES</div>
                </CountdownBox>
                <CountdownBox $variant="seconds">
                  <div className="countdown-value">
                    {pad(countdown.seconds)}
                  </div>
                  <div className="countdown-label">SECONDS</div>
                </CountdownBox>
              </CountdownRow>
            )}
          </RightColumn>
        </MainContentRow>
      </HeroContainer>
    </StyledHero>
  )
}

export { Hero, StyledLogo, DiamondImage }
