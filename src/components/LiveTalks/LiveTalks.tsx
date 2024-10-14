import { styled } from "styled-components"
import liveTalksData from "../../data/liveTalks.json"
import bgHero2 from "../../img/music-festival/bg-hero-2.png"

const LiveTalks = () => {
  return (
    <LiveTalksContainer>
      <Title>LIVE TALKS</Title>
      <TalksGrid>
        {liveTalksData.map((talk, index) => (
          <TalkCard key={index}>
            <img src={talk.image} alt={talk.title} />
            <h3>{talk.title}:</h3>
            <p>{talk.description}</p>
            <div>
              <p>{talk.date}</p>
              <p>{talk["time-start"]}</p>
              <p>{talk["time-end"]}</p>
            </div>
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
  padding: 40px 40px 0 40px;
  color: white;
`

const TalksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 100px;
`

const TalkCard = styled.div`
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  img {
    width: 100%;
    border: 1px solid;
  }

  h3 {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    background: linear-gradient(90deg, #00bfff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0px 0 15px 0;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }

  p:last-of-type {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;

    p {
      margin: 0;

      &::after {
        content: "|";
        margin: 0 5px;
        color: #8a2be2;
        font-size: 20px;
        font-weight: bold;
      }
    }

    p:last-child::after {
      content: "";
    }
  }
`

const Title = styled.h2`
  font-size: 36px;
  margin: 60px 0;
  text-transform: uppercase;
  background: linear-gradient(90deg, #00bfff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  font-family: "Nasalization";

  &::before,
  &::after {
    content: "♦";
    margin-left: 20px;
    margin-right: 20px;
  }

  &::before {
    left: -30px;
  }

  &::after {
    right: -30px;
  }
`
export { LiveTalks, Title }
