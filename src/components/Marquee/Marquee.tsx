import Marquee from "react-fast-marquee"
import { styled } from "styled-components"

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

const StyledBannerMarquee = styled.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(30px);
  font-size: 12px;
  position: relative;
  padding: 12px 0;
`

const MarqueeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-inline: 10px;
  width: max-content;
`

const BoldText = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 3px;
  color: white;
`

export { BannerMarquee }
