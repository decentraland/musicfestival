import { styled } from "styled-components"
import liveTalksData from "../../data/liveTalks.json"
import bgHero2 from "../../img/music-festival/bg-hero-2.png"
import { breakpoints } from "../../utils/theme"
import { Title } from "../Title"
const LiveTalks = () => {
  return (
    <LiveTalksContainer id="livetalks">
      <Title>LIVE TALKS</Title>
      <TalksGrid>
        {liveTalksData.map((talk, index) => (
          <TalkCard key={index}>
            <img src={`$../../${talk.image}`} alt={talk.title} />
            <h3>{talk.title}:</h3>
            <p>{talk.description}</p>
            <TimeInfo>
              <p>{talk.date}</p>
              <p>{talk["time-start"]}</p>
              <p>{talk["time-end"]}</p>
            </TimeInfo>
          </TalkCard>
        ))}
      </TalksGrid>
    </LiveTalksContainer>
  )
}

const LiveTalksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bgHero2});
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  color: white;

  @media (max-width: ${breakpoints.md}) {
    padding: 30px 15px;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 20px 10px;
  }
`

const TalksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  @media (max-width: ${breakpoints.s}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const TalkCard = styled.div`
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border: 1px solid;
    border-radius: 4px;
  }

  h3 {
    margin-top: 15px;
    font-size: 22px;
    font-weight: bold;
    background: linear-gradient(90deg, #00bfff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 1.4;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 15px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`

const TimeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 15px;

  p {
    margin: 0;
    position: relative;

    &:not(:last-child)::after {
      content: "|";
      position: absolute;
      right: -7px;
      color: #8a2be2;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 12px;
    gap: 8px;
  }
`

export { LiveTalks }
