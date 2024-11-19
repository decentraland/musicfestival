import { styled } from "styled-components"
import onlyLogo from "../img/music-festival/logo-button.png"

const DownloadLink = ({ useJump = false }: { useJump?: boolean }) => {
  return (
    <StyledDownloadButton
      href="https://decentraland.org/download?utm_org=dcl&utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
      target="_blank"
      rel="noopener noreferrer"
      useJump={useJump}
    >
      <LogoContainer useJump={useJump}>
        <img src={onlyLogo} alt="Decentraland" />
      </LogoContainer>
      <TextContainer useJump={useJump}>
        JUMP IN
        {/* Download {useJump && <br />}
        Decentraland */}
      </TextContainer>
    </StyledDownloadButton>
  )
}

const StyledDownloadButton = styled.a<{ useJump?: boolean }>`
  margin-top: 20px;
  width: max-content;
  color: white;
  text-decoration: none;
  border-radius: 44px;
  padding: 10px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 270px;
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
  margin-top: 42px;
  max-width: 270px;

  &:hover {
    transition: background 0.3s;
    will-change: background;
    background: linear-gradient(90deg, #3effa3, #fb01ff);
  }

  @media (max-width: 600px) {
    margin-top: 0px;
    height: 50px;
    max-width: 200px;
    min-width: unset;
    justify-content: flex-start;
  }
`

const LogoContainer = styled.div<{ useJump?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: ${({ useJump }) => (useJump ? "60px" : "40px")};
    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 50px;

    img {
      width: 40px;
    }
  }
`

const TextContainer = styled.div<{ useJump?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ useJump }) => (useJump ? "flex-start" : "center")};
  text-align: left;
  font-size: 32px;
  line-height: 26px;
  margin: 0 auto;
  margin-right: 40px;
  text-transform: uppercase;
  min-width: ${({ useJump }) => (!useJump ? "350px" : "auto")};

  @media (max-width: 600px) {
    font-size: 18px;
    margin-right: 20px;

    br {
      display: none;
    }

    min-width: unset;
  }
`

export { DownloadLink }
