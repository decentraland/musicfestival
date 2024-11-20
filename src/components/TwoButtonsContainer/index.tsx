import { styled } from "styled-components"
import { DownloadLink } from "../DownloadButton"
import { JumpInButton } from "../JumpInButton"

const TwoButtonsContainer = () => {
  return (
    <Container>
      <JumpInButton useJump />
      <DownloadLink />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 20px;
  max-height: 70px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export { TwoButtonsContainer }
