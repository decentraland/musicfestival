import { styled } from "styled-components"
import onlyLogo from "../img/music-festival/Download-button-logo.png"

const DownloadLink = ({ useJump = false }: { useJump?: boolean }) => {
  return (
    <StyledDownloadButton
      href="https://decentraland.org/download"
      target="_blank"
      rel="noopener noreferrer"
      useJump={useJump}
    >
      <LogoContainer>
        <img src={onlyLogo} alt="Decentraland" />
      </LogoContainer>
      <TextContainer useJump={useJump}>
        <p>
          Download {useJump && <br />}
          Decentraland
        </p>
      </TextContainer>
    </StyledDownloadButton>
  )
}

const StyledDownloadButton = styled.a<{ useJump?: boolean }>`
  margin-top: 20px;
  width: auto;
  color: white;
  min-width: 300px;
  text-decoration: none;
  border-radius: 44px;
  padding: 10px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: linear-gradient(90deg, #56a7ff, #fb01ff);
  font-weight: 400;
  box-shadow:
    0px 0px 20px 5px rgba(144, 0, 255, 0.75),
    0px 0px 20px 5px rgba(0, 144, 255, 0.75);
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
  will-change: background;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 30px;
  transition: background 0.3s;
  will-change: background;

  &:hover {
    transition: background 0.3s;
    will-change: background;
    background: linear-gradient(90deg, #3effa3, #fb01ff);
  }

  @media (max-width: 600px) {
    margin-top: 0px;
    height: 50px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;

  img {
    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 40px;
    padding-left: 5px;

    img {
      width: 30px;
      height: 24px;
    }
  }
`

const TextContainer = styled.div<{ useJump?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  p {
    font-size: 22px;
    text-transform: uppercase;
  }
  @media (max-width: 600px) {
    p {
      font-size: 14px;

      br {
        display: none;
      }
    }
  }
`

export { DownloadLink }
