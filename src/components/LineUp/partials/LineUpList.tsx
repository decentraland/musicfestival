import styled from "styled-components"
// assets
import bgLineUp from "../../../img/lineup/bg.png"
import imgDesktop from "../../../img/lineup/lineup-desktop.png"

const LineUpList = () => {
  return (
    <ListContainer>
      <img src={imgDesktop} alt="lineup" />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  margin-top: 70px;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-image: url(${bgLineUp});
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 832px;
    mix-blend-mode: background;
  }
`
export { LineUpList }
