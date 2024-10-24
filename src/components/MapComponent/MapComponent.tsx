import { styled } from "styled-components"
import mapMobile from "../../img/maps/map-mobile.jpg"
import mapDesktop from "../../img/maps/map-web.jpg"
import { DownloadLink } from "../DownloadButton"
import { Title } from "../Title"

const MapComponent = () => {
  const mediaQuery = window.innerWidth

  return (
    <MapContainer id="map">
      <Title>MAP</Title>
      <ContentWrapper>
        <MapImage src={mediaQuery > 768 ? mapDesktop : mapMobile} alt="Map" />
      </ContentWrapper>
      <DownloadLink />
    </MapContainer>
  )
}

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 40px;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 40px;
  max-width: 1040px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border: 4px solid;
  border-image: linear-gradient(90deg, #00bfff, #ff00ff) 1;
  box-shadow: 0 0 15px #c445a0;
`

export { MapComponent }
