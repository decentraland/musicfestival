import Marquee from "react-fast-marquee"
import { BoldText, MarqueeContent, StyledBannerMarquee } from "./styles"

interface BannerMarqueeProps {
  direction?: "left" | "right"
  delay?: number
  noBorderTop?: boolean
  noBorderBottom?: boolean
}
const BannerMarquee = ({ direction, delay }: BannerMarqueeProps) => {
  const items = [
    "Free to Enter",
    "No Headset Needed",
    "Stream-Native Lineup",
    "Iconic Stages",
    "Exclusive Sets",
    "New Fan Experiences",
    "Open to Everyone",
  ]
  return (
    <StyledBannerMarquee>
      <Marquee
        direction={direction}
        speed={50}
        delay={delay}
        gradient={false}
        className="marquee"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <MarqueeContent key={index}>
            {items.map((text) => (
              <BoldText key={text}>{text}</BoldText>
            ))}
          </MarqueeContent>
        ))}
      </Marquee>
    </StyledBannerMarquee>
  )
}

export { BannerMarquee }
