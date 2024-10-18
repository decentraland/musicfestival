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
        speed={100}
        delay={delay}
        gradient={false}
        className="marquee"
      >
        <MarqueeContent>
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
      </Marquee>
    </StyledBannerMarquee>
  )
}

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;
  padding: 12px 0;
  border-top: 3.5px solid;
  border-bottom: 3.5px solid;
  border-image: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff) 1;
`

const MarqueeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
`

const BoldText = styled.span`
  font-family: "InterMedium", sans-serif;
  font-size: 20px;
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
  width: 33px;
  height: 33px;
`

export { BannerMarquee }
