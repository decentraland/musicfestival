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
            <BoldText>NOVEMBER 20 - 23</BoldText>
            <BoldText>FREE ENTRY</BoldText>
            <BoldText>EXCLUSIVE SETS</BoldText>
            <BoldText>EPIC GIVEAWAYS</BoldText>
            <BoldText>LIVE VIP TALKS</BoldText>
          </MarqueeContent>
        ))}
      </Marquee>
    </StyledBannerMarquee>
  )
}

export { BannerMarquee }
