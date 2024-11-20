import { styled } from "styled-components"
import { DownloadLink } from "../DownloadButton"

const TwoButtonsContainer = () => {
  return (
    <Container>
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
