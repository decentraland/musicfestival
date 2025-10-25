import { motion } from "framer-motion"
import { styled } from "styled-components"

const StyledBannerMarquee = styled(motion.div).attrs({})`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(30px);
  font-size: 12px;
  position: relative;
  padding: 12px 0;
`

const MarqueeContent = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-inline: 10px;
  width: max-content;
`

const BoldText = styled(motion.span).attrs({})`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 3px;
  color: white;
`

export { StyledBannerMarquee, MarqueeContent, BoldText }
