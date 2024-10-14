import { styled } from "styled-components"
import exhibitorsData from "../../data/exhibitors.json"
import { Title } from "../LiveTalks/LiveTalks"

const Exhibitors = () => {
  return (
    <ExhibitorsContainer>
      <Title>EXHIBITORS</Title>
      <ExhibitorsGrid>
        {exhibitorsData.map((exhibitor, index) => (
          <ExhibitorCard key={index}>
            <img src={exhibitor.image} alt={exhibitor.title} />
            <h3>{exhibitor.title}</h3>
            <p>[{exhibitor.location}]</p>
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
  padding: 40px;
  background-color: #000;
  color: white;
`

const ExhibitorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); // 6 columnas
  grid-template-rows: repeat(2, auto); // 2 filas
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  justify-content: center; // Centrar el contenido horizontalmente
`

const ExhibitorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  img {
    width: 195.25px;
    height: 289.37px;
  }

  h3 {
    margin-top: 20px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 15.48px;
    line-height: 18.74px;
    letter-spacing: 10%;
  }

  p {
    margin-top: 10px;
    height: 100%;
    font-family: "Inter", sans-serif;
    font-size: 15.48px;
    font-weight: 700;
    line-height: 13.75px;
    letter-spacing: 0.2em;
    text-align: left;
    background: linear-gradient(90deg, #56a7ff 0%, #fb01ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export { Exhibitors }
