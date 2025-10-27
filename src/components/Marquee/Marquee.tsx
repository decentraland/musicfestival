import Marquee from "react-fast-marquee"
import { BoldText, MarqueeContent, StyledBannerMarquee } from "./styles"

interface BannerMarqueeProps {
  direction?: "left" | "right"
  delay?: number
  noBorderTop?: boolean
  noBorderBottom?: boolean
}
const BannerMarquee = ({ direction, delay }: BannerMarqueeProps) => {
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
            <BoldText>FREE ACCESS</BoldText>
            <BoldText>EXPLORE AS AVATARS</BoldText>
            <BoldText>LIVE ART TOURS</BoldText>
            <BoldText>INTRO WORKSHOPS</BoldText>
            <BoldText>NO HEADSET NEEDED</BoldText>
            <BoldText>LAUNCH YOUR FIRST VIRTUAL GALLERY</BoldText>
            <BoldText>OPEN TO EVERYONE</BoldText>
          </MarqueeContent>
        ))}
      </Marquee>
    </StyledBannerMarquee>
  )
}

export { BannerMarquee }
