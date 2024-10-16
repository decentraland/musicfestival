import { styled } from "styled-components"
import onlyLogo from "../img/music-festival/only-logo.png"

const DownloadLink = () => {
  return (
    <StyledDownloadButton
      href="https://decentraland.org/download"
      target="_blank"
    >
      <span>
        <img src={onlyLogo} alt="Decentraland" />
        <p>Download Decentraland</p>
      </span>
    </StyledDownloadButton>
  )
}

const StyledDownloadButton = styled.a`
  margin-top: 20px;
  width: 462.46px;
  height: 60px;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(90deg, #56a7ff, #fb01ff);
  box-shadow:
    0px 0px 20px 5px rgba(144, 0, 255, 0.75),
    0px 0px 20px 5px rgba(0, 144, 255, 0.75);
  position: relative;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 30px;

  &:hover {
    background: linear-gradient(90deg, #3effa3, #fb01ff);
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 22px;
    text-transform: uppercase;
  }

  img {
    width: 39.83px;
    height: 31.33px;
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 50px;

    & > span {
      font-size: 14px;
    }

    img {
      width: 30px;
      height: 24px;
    }
  }
`
export { DownloadLink }
