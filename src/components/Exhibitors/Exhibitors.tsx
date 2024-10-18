import { styled } from "styled-components"
import AAVEGOTCHI from "../../img/music-festival/AAVEGOTCHI.png"
import ANY_MAGIK_RPZEG from "../../img/music-festival/ANY-MAGIK-RPZEG.png"
import CHIBI_CLASH from "../../img/music-festival/CHIBI-CLASH.png"
import DEFI_KINGDOMS from "../../img/music-festival/DEFI-KINGDOMS.png"
import KMON from "../../img/music-festival/KMON.png"
import KNIGHTS_OF_ANTROM from "../../img/music-festival/KNIGHTS-OF-ANTROM.png"
import LEGIONS_2029 from "../../img/music-festival/LEGIONS-2029.png"
import LOOTRUSH from "../../img/music-festival/LOOTRUSH.png"
import MOTODEX from "../../img/music-festival/MOTODEX.png"
import PLANET_MOJO from "../../img/music-festival/PLANET-MOJO.png"
import SANDSTORM from "../../img/music-festival/SANDSTORM.png"
import SPACE_TRAITOR from "../../img/music-festival/SPACE-TRAITOR.png"
import { Title } from "../Title"

const exhibitorsData = [
  {
    title: "AAVEGOTCHI",
    location: -2.74,
    image: AAVEGOTCHI,
  },
  {
    title: "DEFI KINGDOMS",
    location: -6.8,
    image: DEFI_KINGDOMS,
  },
  {
    title: "KMON",
    location: -2.74,
    image: KMON,
  },
  {
    title: "LEGIONS 2029",
    location: -2.74,
    image: LEGIONS_2029,
  },
  {
    title: "KNIGHTS OF ANTROM",
    location: -2.74,
    image: KNIGHTS_OF_ANTROM,
  },
  {
    title: "ANY MAGIK RPZEG",
    location: -2.74,
    image: ANY_MAGIK_RPZEG,
  },
  {
    title: "PLANET MOJO",
    location: -2.74,
    image: PLANET_MOJO,
  },
  {
    title: "CHIBI CLASH",
    location: -2.74,
    image: CHIBI_CLASH,
  },
  {
    title: "MOTODEX",
    location: -2.74,
    image: MOTODEX,
  },
  {
    title: "SPACE TRAITOR",
    location: -2.74,
    image: SPACE_TRAITOR,
  },
  {
    title: "LOOTRUSH",
    location: -2.74,
    image: LOOTRUSH,
  },
  {
    title: "SANDSTORM",
    location: -2.74,
    image: SANDSTORM,
  },
]

const Exhibitors = () => {
  return (
    <ExhibitorsContainer id="exhibitors">
      <Title>EXHIBITORS</Title>
      <ExhibitorsGrid>
        {exhibitorsData.map((exhibitor, index) => (
          <ExhibitorCard key={index}>
            <img src={exhibitor.image} alt={exhibitor.title} />
            <ExhibitorInfo>
              <h3>{exhibitor.title}</h3>
              <p>[{exhibitor.location}]</p>
            </ExhibitorInfo>
          </ExhibitorCard>
        ))}
      </ExhibitorsGrid>
    </ExhibitorsContainer>
  )
}

const ExhibitorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: white;
`

const ExhibitorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`

const ExhibitorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
  }
`

const ExhibitorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 15.48px;
    line-height: 18.74px;
    letter-spacing: 10%;
  }

  p {
    margin: 5px 0 0;
    font-family: "Inter", sans-serif;
    font-size: 15.48px;
    font-weight: 700;
    line-height: 13.75px;
    letter-spacing: 0.2em;
    background: linear-gradient(90deg, #56a7ff 0%, #fb01ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export { Exhibitors }
