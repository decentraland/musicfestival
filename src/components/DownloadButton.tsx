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
        Download {useJump && <br />}
        Decentraland
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
  min-width: 300px;
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
  }
`

const TextContainer = styled.div<{ useJump?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ useJump }) => (useJump ? "flex-start" : "center")};
  text-align: left;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  min-width: ${({ useJump }) => (!useJump ? "350px" : "auto")};

  @media (max-width: 600px) {
    font-size: 14px;

    br {
      display: none;
    }
  }
`

export { DownloadLink }
