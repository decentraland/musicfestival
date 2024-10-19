import { styled } from "styled-components"
import { exhibitorsData } from "./data"
import { Title } from "../Title"

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
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 1200px;
  justify-content: center;

  @media (min-width: 568px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
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
