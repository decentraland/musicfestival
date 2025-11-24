import { useEffect, useState } from "react"
import { toast } from "sonner"
import { styled } from "styled-components"
import mapMobile from "../../img/maps/map-mobile.webp"
import mapDesktop from "../../img/maps/map-web.webp"
import { subscribeToNewsletter } from "../../modules/newsletter"
import { InlineSignup, SignupInput, SubscribeButton } from "../Hero/styles"

const MapComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768)
    })
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      toast.error("Email is required")
      return
    }
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
    <MapContainer id="map">
      <TitleWrapper>
        <Title>FIND YOUR WAY</Title>
        <Description>
          Navigate Decentraland’s Music Festival with ease—see where every
          performance and experience is happening.
        </Description>
      </TitleWrapper>
      <ContentWrapper>
        <MapImage src={isMobile ? mapMobile : mapDesktop} alt="Map" />
      </ContentWrapper>
      <InlineSignup onSubmit={handleSubscribe} aria-label="Notify signup (map)">
        <SignupInput
          id="map-email-input"
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
    </MapContainer>
  )
}

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(10, 9, 43, 1);
  padding: 72px 16px;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 60px 16px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  margin-bottom: 8px;
  text-shadow:
    0 0 6px rgba(255, 255, 255, 0.4),
    0 0 12px rgba(255, 255, 255, 0.3),
    0 0 24px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  max-width: 400px;
  margin: 0;
  text-align: center;
`

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`

export { MapComponent }
