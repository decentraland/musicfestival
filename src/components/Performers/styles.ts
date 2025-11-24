import styled from "styled-components"
import performersBg from "../../img/performers/bg.webp"

const PerformersContainer = styled.div`
  width: 100%;
  padding: 124px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${performersBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 60px 8px;
  }
`

const PerformersContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr; /* ~37.5% / 62.5% to match design */
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const PerformersTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
`

const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const LeftContentTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    margin: 0 auto;
  }
`

const LeftContentTitle = styled.h3`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  max-width: 300px;
  margin-bottom: 12px;
  text-shadow:
    0 0 6px rgba(255, 255, 255, 0.4),
    0 0 12px rgba(255, 255, 255, 0.3),
    0 0 24px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`

const LeftContentDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  max-width: 400px;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
`

const LeftContentLogo = styled.img`
  width: 70%;
  height: auto;
  margin: 0 auto;
  object-fit: cover;

  @media (min-width: 768px) {
    display: none;
  }
`

const LeftContentImage = styled.img`
  width: 140px;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`

const RightContentImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`

const LineupOverlay = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 10px;
  align-items: center;
  justify-items: center;
  z-index: 2;
  pointer-events: none;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    gap: 0;
    padding: 0;
  }
`

const LineupRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  white-space: nowrap;
`

const LineupName = styled.span`
  font-family: "Ethnocentric", sans-serif !important;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #ffffff;
  text-shadow:
    0 0 6px rgba(255, 255, 255, 0.35),
    0 0 12px rgba(255, 255, 255, 0.25);

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const LineupSeparator = styled.img`
  width: auto;
  height: 14px;
  padding-left: 8px;
  padding-right: 8px;
  opacity: 0.9;
  justify-self: center;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));

  @media (max-width: 768px) {
    height: 8px;
    padding-left: 2px;
    padding-right: 2px;
  }
`

export {
  PerformersContainer,
  PerformersContent,
  PerformersTitle,
  LeftContent,
  LeftContentTitleSection,
  LeftContentTitle,
  LeftContentDescription,
  LeftContentImage,
  RightContent,
  RightContentImage,
  LineupOverlay,
  LineupRow,
  LineupName,
  LineupSeparator,
  LeftContentLogo,
}
