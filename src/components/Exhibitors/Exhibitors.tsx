import { styled } from "styled-components"
import exhibitorsData from "../../data/exhibitors.json"
import { Title } from "../LiveTalks/LiveTalks"

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

  @media (max-width: 768px) {
    img {
      height: 150px;
    }
  }

  @media (max-width: 600px) {
    padding: 5px;

    img {
      height: 100px;
    }
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
