import React from "react"
import Marquee from "react-fast-marquee"
import styled from "styled-components"

const BannerMarquee = (props) => {
  return (
    <StyledBannerMarquee {...props}>
      <Marquee
        direction={props.direction}
        speed={100}
        delay={props.delay && props.delay}
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

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;

  /* Add gradient to the top and bottom borders */
  border-top: ${(props) => (!props.noBorderTop ? `3px solid` : "none")};
  border-bottom: ${(props) => (!props.noBorderBottom ? `3px solid` : "none")};

  border-image: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff) 1; /* Updated gradient */
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
      font-weight: 700;
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

export default BannerMarquee
