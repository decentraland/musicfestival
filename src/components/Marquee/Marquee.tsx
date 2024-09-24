import Marquee from "react-fast-marquee"
import styled from "styled-components"

interface BannerMarqueeProps {
  direction?: "left" | "right"
  delay?: number
  noBorderTop?: boolean
  noBorderBottom?: boolean
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BannerMarquee = ({
  direction,
  delay,
  // noBorderBottom,
  // noBorderTop,
}: BannerMarqueeProps) => {
  return (
    <StyledBannerMarquee
    // noBorderBottom={noBorderBottom ? 1 : 0}
    // noBorderTop={noBorderTop ? 1 : 0}
    >
      <Marquee
        direction={direction}
        speed={100}
        delay={delay}
        gradient={false}
        className="marquee"
      >
        DECENTRALAND MUSIC FESTIVAL 2024{" "}
        <DateHighlight> • NOV. 20-23 • </DateHighlight>
        DECENTRALAND MUSIC FESTIVAL 2024{" "}
        <DateHighlight> • NOV. 20-23 • </DateHighlight>
        DECENTRALAND MUSIC FESTIVAL 2024{" "}
        <DateHighlight> • NOV. 20-23 • </DateHighlight>
        DECENTRALAND MUSIC FESTIVAL 2024{" "}
        <DateHighlight> • NOV. 20-23 • </DateHighlight>
        DECENTRALAND MUSIC FESTIVAL 2024{" "}
        <DateHighlight> • NOV. 20-23 • </DateHighlight>
      </Marquee>
    </StyledBannerMarquee>
  )
}

/* Add gradient to the top and bottom borders */
// border-top: ${(noBorderTop) => (!noBorderTop ? `3px solid` : "none")};
// border-bottom: ${(noBorderBottom) =>
//   !noBorderBottom ? `3px solid` : "none"};

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;
  padding-block: 12px;
  border-bottom: 1.5px solid transparent;
  border-top: 1.5px solid transparent;
  border-image: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff);

  border-image: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff) 1;
  line-height: 24px;

  .marquee-container {
    padding: 12px 0;
  }

  .marquee {
    min-width: unset !important;

    /* Apply the font to all text inside the marquee */
    span,
    p,
    * {
      font-family: "InterMedium", sans-serif !important; /* Apply globally to all elements */
      font-size: 12px !important; /* Adjust size if necessary */
      letter-spacing: 3px;
      font-weight: 400;
      color: white; /* Ensure the text color is visible */
    }
  }
`

const DateHighlight = styled.span`
  background: linear-gradient(
    to right,
    #3effa3,
    #56a7ff,
    #fb01ff
  ); /* Updated gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Ensure the text shows the gradient */
  padding-right: 16px;
  padding-left: 16px;
`

export { BannerMarquee }
