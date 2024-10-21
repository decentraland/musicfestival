import Marquee from "react-fast-marquee"
import { styled } from "styled-components"
import diamondImageLeft from "../../img/music-festival/left-diamond.png"

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
        {Array.from({ length: 10 }).map((_, index) => (
          <MarqueeContent key={index}>
            <GradientDiamond />
            <BoldText>NOVEMBER 20 - 23</BoldText>
            <GradientDiamond />
            <BoldText>FREE ENTRY</BoldText>
            <GradientDiamond />
            <BoldText>EXCLUSIVE SETS</BoldText>
            <GradientDiamond />
            <BoldText>EPIC GIVEAWAYS</BoldText>
            <GradientDiamond />
            <BoldText>LIVE VIP TALKS</BoldText>
          </MarqueeContent>
        ))}
      </Marquee>
    </StyledBannerMarquee>
  )
}

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;
  padding: 12px 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff) 1;
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

const GradientDiamond = styled.div`
  background: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff);
  display: inline-block;
  -webkit-mask-image: url(${diamondImageLeft});
  mask-image: url(${diamondImageLeft});
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 22px;
  height: 22px;
`

export { BannerMarquee }
