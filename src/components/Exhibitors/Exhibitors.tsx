import { styled } from "styled-components"
import { exhibitorsData } from "./data"
import bg from "../../img/music-festival/exhibitors-bg.png"
import { Title } from "../Title"

const Exhibitors = () => {
  return (
    <ExhibitorsContainer id="exhibitors" bg={bg}>
      <Title
        styles={{
          marginTop: 0,
        }}
      >
        EXHIBITORS
      </Title>
      <ExhibitorsGrid>
        {exhibitorsData.map((exhibitor, index) => (
          <a
            key={index}
            href={exhibitor.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExhibitorCard>
              <img src={exhibitor.image} alt={exhibitor.title} />
              <ExhibitorInfo>
                <h3>{exhibitor.title}</h3>
              </ExhibitorInfo>
            </ExhibitorCard>
          </a>
        ))}
      </ExhibitorsGrid>
    </ExhibitorsContainer>
  )
}

const ExhibitorsContainer = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-block: 80px 120px;
  min-height: 100dvh;
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
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 0 8px 0 0;
    border: 2px solid rgba(219, 219, 219, 1);
  }
`

const ExhibitorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;

  h3 {
    margin: 0;
    font-family: "Inter", sans-serif !important;
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
