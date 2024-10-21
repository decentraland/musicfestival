import { useState } from "react"
import styled from "styled-components"
import rightDiamond from "../../img/music-festival/right-diamond.png"
// import rightDiamond from "../img/music-festival/right-diamond.png"
import { Modal } from "../Modal/Index"
import { Title } from "../Title"

type Day = {
  name: string
  artists: Artist[]
}

enum DayHighlight {
  FULL = "FULL",
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}

function LineUp() {
  const [highlightedDay, setHighlightedDay] = useState(DayHighlight.FULL)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  const higlightDay = (day: DayHighlight): void => {
    setHighlightedDay(day)
  }

  const isHighlighted = (index: number): boolean => {
    return highlightedDay === index + 1
  }

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist)
    setModalOpen(true)
  }

  return (
    <>
      <Title>Line Up</Title>
      <DaysContainer>
        <FullLineUp
          onClick={() => higlightDay(DayHighlight.FULL)}
          gradientTo={dayColors[1]}
        >
          <span>FULL</span>
          <span>LINE-UP</span>
        </FullLineUp>
        <Day
          color={dayColors[0]}
          onClick={() => higlightDay(DayHighlight.ONE)}
          gradientTo={dayColors[1]}
          isActive={highlightedDay === DayHighlight.ONE}
          className="nasalization"
        >
          <span>DAY ONE</span>
          <span>Nov. 20</span>
        </Day>
        <Day
          color={dayColors[1]}
          onClick={() => higlightDay(DayHighlight.TWO)}
          gradientTo={dayColors[2]}
          isActive={highlightedDay === DayHighlight.TWO}
        >
          <span>DAY TWO</span>
          <span>Nov. 21</span>
        </Day>
        <Day
          color={dayColors[2]}
          onClick={() => higlightDay(DayHighlight.THREE)}
          gradientTo={dayColors[3]}
          isActive={highlightedDay === DayHighlight.THREE}
        >
          <span>DAY THREE</span>
          <span>Nov. 22</span>
        </Day>
        <Day
          color={dayColors[3]}
          onClick={() => higlightDay(DayHighlight.FOUR)}
          gradientTo={dayColors[3]}
          isActive={highlightedDay === DayHighlight.FOUR}
        >
          <span>DAY FOUR</span>
          <span>Nov. 23</span>
        </Day>
      </DaysContainer>
      <Container>
        <BackgroundImage />
        <Content>
          <Timeline columns={timeSlots.length}>
            <TimelineLine />
            {timeSlots.map((time) => (
              <TimeSlot key={time}>
                <TimeDiamond src={rightDiamond} alt="diamond" />
                <TimeText>{time} UTC</TimeText>
                <TimeText>{parseInt(time) - 7}:00 PST</TimeText>
              </TimeSlot>
            ))}
          </Timeline>
          <ScheduleContainer>
            {schedule.map((day, index) => (
              <DayRow
                key={day.name}
                highlighted={isHighlighted(index)}
                inactive={
                  !isHighlighted(index) && highlightedDay !== DayHighlight.FULL
                }
              >
                <LeftDayLabel color={dayColors[index]}>
                  <div>{day.name.split(" ")[1]}</div>
                  <div>{day.name.split(" ")[0]}</div>
                </LeftDayLabel>
                <ArtistContainer
                  color={dayColors[index]}
                  columns={timeSlots.length}
                >
                  {timeSlots.map((time) => {
                    const artist = day.artists.find((a) => a.time === time)
                    return (
                      <ArtistColumn key={`${day.name}-${time}`}>
                        {artist ? (
                          <ArtistCard
                            color={dayColors[index]}
                            onClick={() => handleArtistClick(artist)}
                          >
                            <ArtistName>{artist.name}</ArtistName>
                            <ArtistTime color={dayColors[index]}>
                              {artist.time}
                            </ArtistTime>
                          </ArtistCard>
                        ) : (
                          <EmptySlot />
                        )}
                      </ArtistColumn>
                    )
                  })}
                </ArtistContainer>
                <RightDayLabel color={dayColors[index]}>
                  <div>{day.name.split(" ")[1]}</div>
                  <div>{day.name.split(" ")[0]}</div>
                </RightDayLabel>
              </DayRow>
            ))}
          </ScheduleContainer>
        </Content>
      </Container>
      <div>
        {modalOpen && (
          <Modal
            onClose={() => setModalOpen(false)}
            artist={selectedArtist as Artist}
          />
        )}
      </div>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  overflow-x: auto;
  max-width: 100vw;
  position: relative;
`

const DaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1240px;
  margin: 0 auto;
  gap: 1rem;
  overflow-x: auto;
`

const Day = styled.div<{ gradientTo?: string; isActive?: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Nasalization" !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.25rem;
  padding: 12px 24px;
  background-color: #000;
  min-width: 140px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: box-shadow 0.2s ease-in-out;
  will-change: box-shadow;

  ${(props) =>
    props.isActive &&
    `
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.2s ease-in-out;
    will-change: box-shadow;
  `}

  span {
    color: ${(props) => props.color} !important;

    &:first-child {
      font-size: 0.75rem;
    }

    &:last-child {
      font-size: 1.25rem;
    }
  }

  ${(props) =>
    props.gradientTo &&
    `

    &::after {
      content: '';
      position: absolute;
      right: 100%;
      width: 95%;
      height: 2px;
      z-index: 0;
      background: linear-gradient(to right, ${props.color}, ${props.gradientTo});
      display: none;

      @media (min-width: 1240px) {
        display: block;
      }
    }
  `}
`
const FullLineUp = styled(Day)`
  min-width: 140px;
  border: none;
  background: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff);
  span {
    color: #000;
    font-size: 1.25rem;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/placeholder.svg?height=1080&width=1920");
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem;
  min-width: max-content;
`

const Timeline = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    minmax(100px, 1fr)
  );
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  margin-left: 30px;
`

const TimelineLine = styled.div`
  position: absolute;
  width: 100%;
  top: 4px;
  left: 0;
  height: 1px;
  background-color: white;
  z-index: 1;
`

const TimeSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  min-width: 100px;
`

const TimeDiamond = styled.img`
  width: 24px;
  height: 24px;
  top: -15px;
  z-index: 2;
  position: relative;
`

const TimeText = styled.div`
  font-size: 0.75rem;
`

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DayRow = styled.div<{ highlighted: boolean; inactive: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color, opacity;
  background-color: ${(props) =>
    props.highlighted ? "rgba(255, 255, 255, 0.4)" : "transparent"};
  opacity: ${(props) => (props.inactive ? 0.5 : 1)};
  pointer-events: ${(props) => (props.inactive ? "none" : "auto")};
`

const DayLabel = styled.div<{ color: string }>`
  writing-mode: vertical-lr;
  font-size: 1rem;
  font-weight: bold;
  background-color: #000;
  color: ${(props) => props.color};
  position: sticky;
  z-index: 1;
  display: flex;
  font-family: "Inter", sans-serif;
  border: 2px solid ${(props) => props.color};
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;

    &:first-child {
      color: ${(props) => props.color};
      font-size: 0.75rem;
    }

    &:last-child {
      font-size: 0.75rem;
      background-color: ${(props) => props.color};
      color: #000;
      width: 100%;
    }
  }
`

const LeftDayLabel = styled(DayLabel)`
  left: 0;
  transform: rotate(180deg);
`

const RightDayLabel = styled(DayLabel)`
  position: sticky;
  right: 0;
  margin-left: 0.5rem;
`

const ArtistContainer = styled.div<{ columns: number; color: string }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    minmax(100px, 1fr)
  );
  font-family: "Inter", sans-serif;
  align-items: start;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;
  gap: 0.25rem;
  padding-left: 0.25rem;
  flex-grow: 1;

  &:hover {
    transition: background-color 0.2s ease-in-out;
  }
`

const ArtistColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
`

const ArtistCard = styled.div<{ color: string }>`
  width: 100%;
  padding: 0.25rem;
  border: 2px solid ${(props) => props.color};
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  will-change: transform, box-shadow;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }
`

const ArtistName = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const ArtistTime = styled.div<{ color: string }>`
  font-size: 0.625rem;
  color: ${(props) => props.color};
`

const EmptySlot = styled.div`
  width: 100%;
  height: 100%;
  min-height: 30px;
`

const dayColors = ["#3EFFA3", "#56A7FF", "#A35AFF", "#EF0DFF"]
const timeSlots = [
  // "12:00",
  // "13:00",
  // "14:00",
  // "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
  "1:00",
]

const schedule: Day[] = [
  {
    name: "DAY ONE",
    artists: [
      {
        name: "FI SULLIVAN",
        time: "19:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "19:00 UTC (11:00PST)",
        },
        description:
          "LA-based artist & producer known for ethereal, synth-driven sounds. Notable tracks include Another Night, and she has performed with San Holo & Daktyl for Coop Records Midnight Diner L.A.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/fi_sounds/",
          music:
            "https://open.spotify.com/artist/4Wvsgumh32s2wSMTZW7FMa?si=QTNpR2b7Qo6fkTbWhb5U0g&nd=1&dlsi=8f78f281040946fc",
        },
      },
      {
        name: "33 BELOW",
        time: "21:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "A rising electronic music producer from New Zealand, based in London. Known for atmospheric and melodic soundscapes, combining elements of house and downtempo beats.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/33_below",
          instagram: "https://www.instagram.com/33_below/",
          music:
            "https://open.spotify.com/artist/4tMIsBBR8M0PsorDf0mNEz?si=kHULdTCVRsS6MjkPujFhyQ&nd=1&dlsi=502551a6d5d14423",
        },
      },
      {
        name: "SAN HOLO",
        time: "22:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Internationally recognized DJ/producer known for a guitar-infused, indie & future bass sound. Hits like Light and We Rise garner millions of streams; with sets at Ultra & Tomorrowland.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/sanholobeats",
          instagram: "https://www.instagram.com/sanholobeats/",
          music:
            "https://open.spotify.com/artist/0jNDKefhfSbLR9sFvcPLHo?si=dkSRF32lR7WDXOLAYQ5PKQ&nd=1&dlsi=fba2b002adc741d9",
        },
      },
      {
        name: "DANIEL ALLAN",
        time: "23:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "LA-based innovative producer known for merging pop, electronic, and hip-hop, and pioneering Web3 music distribution. His recent hit ‘I Just Need (with Lyrah)‘ saw millions of streams.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/imdanielallan",
          instagram: "https://www.instagram.com/danielallanmusic/",
          music:
            "https://open.spotify.com/artist/5JQ1XqKJ2Art01rF4tu1Ra?si=fqqfTbNgSgOXNa8i1iMpmQ",
        },
      },
      {
        name: "LYRAH",
        time: "00:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Singer-songwriter and producer blending dark pop with electronic undertones. Her recent collab with Daniel Allan, ‘I Just Need‘ received international recognition.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/lyrah",
          instagram: "https://www.instagram.com/lyrah/",
          music: "https://open.spotify.com/artist/5JyKQ4MQ2HkU1n1BYiKMWW",
        },
      },
      {
        name: "TESH",
        time: "1:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "1:00 UTC (17:00PST)",
        },
        description:
          "Upcoming DJ and producer, showcased by Coop Record's Midnight Diner series. Releases include ‘Blueskies‘ and ‘Tell Me About It‘",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/te.shla",
          music:
            "https://open.spotify.com/artist/4bnUfGrlUSrYBRajJnAhDX?si=IdjwSBt-RdadpHFr1uJgMA&nd=1&dlsi=0dae91f4c27c4eb9",
        },
      },
    ],
  },
  {
    name: "DAY TWO",
    artists: [
      {
        name: "TORO",
        time: "18:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "18:00 UTC (9:00PST)",
        },
        description:
          "Chicago-born producer Toro brings his Puerto Rican roots into every set, fusing house, Latin, Afrobeat, and Electro for an energizing, soulful journey.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/djtorobeatz/",
          music: "https://soundcloud.com/djtorobeatz",
        },
      },
      {
        name: "D-VIBE",
        time: "19:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "19:00 UTC (10:00PST)",
        },
        description:
          "Athens-based D-Vibe is a rising DJ/Producer and Radio Host, known for his raw, underground techno style. Inspired by legends like Richie Hawtin, he brings passion to stages and clubs worldwide.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/dvibe.techno/",
          music: "",
        },
      },
      {
        name: "AIWASKA",
        time: "21:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "Mysterious Argentina-based producer fusing Melodic House with hypnotic vocals and atmospheric bass. Signed by Crosstown Rebels, performances at Burning Man, Tulum, and Ibiza.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/aiwaska/",
          music: "https://open.spotify.com/artist/3VqggSPrC7SFYDSd6DN6DN",
        },
      },
      {
        name: "MAT ZO",
        time: "22:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Grammy-nominated DJ/producer, blending genres from trance to drum & bass. Globally known for hits like ‘Easy‘ and ‘Colours‘, he founded the label Mad Zoo and plays festivals worldwide.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/Mat_Zo",
          instagram: "https://www.instagram.com/mat_zo/",
          music: "https://open.spotify.com/artist/2n7USVO8fO8FF8zq4kG2N1",
        },
      },
      {
        name: "ARMINA",
        time: "23:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "A Ukrainian-Polish DJ/Producer based in Barcelona, blending Progressive House with Afro and Hindi influences in Melodic Techno. Her iconic live streams regularly gain thousands of views.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/armina.dj/",
          music: "https://open.spotify.com/artist/668LMKafrBrzwSPLQz1OdQ",
        },
      },
      {
        name: "STEVE SAIKO",
        time: "00:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Steve Sai, a Greek DJ/Producer, is known for deep, hypnotic techno with progressive influences. He’s released on top labels like Bonzai and Baroque and played at major venues across Europe.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/SteveSaiko",
          instagram: "https://www.instagram.com/stevesai_/",
          music: "https://open.spotify.com/artist/0w0gxSSI8bu1YmdOEbr2ca",
        },
      },
      {
        name: "INVISIBLE REALITY",
        time: "1:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "1:00 UTC (17:00PST)",
        },
        description:
          "Invisible Reality, formed in 2002 by Shamil Abramov & Igor Sorin, blends Azerbaijani / Belarusian roots into progressive psytrance. Global festivals include Fusion, Voov & Psychedelic Circus",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/InvisibleRealit",
          instagram: "https://www.instagram.com/invisiblereality/",
          music: "https://open.spotify.com/artist/5689fXaoEmJsLSPv3y18An",
        },
      },
    ],
  },
  {
    name: "DAY THREE",
    artists: [
      {
        name: "DAVYD",
        time: "18:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "18:00 UTC (10:00PST)",
        },
        description:
          "Emerging producer, sound designer, and musician from Rio Gallegos, Argentina. Founder of Beat'm All Productions.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/davyd_music",
          instagram: "https://www.instagram.com/davyd_music/",
          music:
            "https://open.spotify.com/artist/3zIEn6ebv9TgeonB2dd8it?go=1&sp_cid=831a53bff43f93fe1210644921f428e9&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=4f49ac0230384708",
        },
      },
      {
        name: "GEKO",
        time: "19:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "19:00 UTC (1:00PST)",
        },
        description:
          "GeKo (Amir Ben David) is a psytrance artist known for his powerful full-on night music. Now in Berlin, he's active in the psytrance and progressive scene with the GRAVITECH project.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/AmirGeKo",
          instagram: "",
          music: "https://soundcloud.com/geko",
        },
      },
      {
        name: "PANS",
        time: "21:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "Paris-based open format DJ and producer in electronic rock and tech house with ravager guitar riffs. A regular in the Decentraland party scene.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/PANSDJ",
          instagram: "https://www.instagram.com/pansdj/",
          music: "https://soundcloud.com/pansdj",
        },
      },
      {
        name: "DJ LAG",
        time: "22:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Pioneering South African DJ/producer from Durban, DJ Lag is internationally known for creating and popularizing gqom, a raw and minimalistic form of house music with hard-hitting beats.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/RealDJLag",
          instagram: "https://www.instagram.com/realdjlag/",
          music: "https://open.spotify.com/artist/1svX5cMlY22N60RxwzeJNO",
        },
      },
      {
        name: "NGHTMRE",
        time: "23:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "NGHTMRE is a renowned EDM producer and DJ known for his dynamic blend of trap, bass, and future bass. He headlines major festivals, and hits like ‘GUD VIBRATIONS‘ garner millions of streams worldwide.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/NGHTMRE",
          instagram: "https://www.instagram.com/nghtmre/",
          music: "https://open.spotify.com/artist/76M2Ekj8bG8W7X2nbx2CpF",
        },
      },
      {
        name: "BUFALO",
        time: "00:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Parisian DJ/producer, fusing country, folk, and blues with electronic beats in ‘Futuristic Western Music.‘ Known for high-energy performances across festivals worldwide.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/bufalomusic",
          instagram: "https://www.instagram.com/bufalomusic/",
          music:
            "https://open.spotify.com/artist/5TJ3ovuFQ2vRUye5280kQ8?si=uFNYzYd4R8W__fjjRPzT-A&nd=1&dlsi=054652d043544070",
        },
      },
      {
        name: "STONEY EYE & SOULTRY",
        time: "1:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "1:00 UTC (17:00PST)",
        },
        description:
          "Special EDM set by MoBeatz producers StoneyEye and Soultry Dubs, known on Decentraland's music scene for their innovative fusion of dub, reggae, and electronic beats.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/stoney_eye",
          instagram: "https://www.instagram.com/stoneyeyestudios/",
          music: "https://open.spotify.com/artist/0qs98NuHMkM1NKyPpzhSjc",
        },
      },
    ],
  },
  {
    name: "DAY FOUR",
    artists: [
      {
        name: "NATCHEO",
        time: "17:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "17:00 UTC (9:00PST)",
        },
        description:
          "Rising Argentinean DJ and producer blending live jazz instrumentals with smooth house beats.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/_natcheo/",
          music:
            "https://soundcloud.com/user-369947237?ref=clipboard&p=i&c=1&si=5AD55646261B40758032D7686F1664BA&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
      {
        name: "DANIEL ALLAN",
        time: "18:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "18:00 UTC (10:00PST)",
        },
        description:
          "Emerging synthetic DJ/producers blending house with diverse sounds. Known for high-energy performances and web3 communities, they explore subgenres like hyperpop and dreamwave.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/UntzKing",
          instagram: "https://www.instagram.com/kiramomodotcom/",
          music: "https://www.youtube.com/channel/UCiatrGkEjlkToFwk7BRnUnA",
        },
      },
      {
        name: "NONCITIZENS",
        time: "20:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "20:00 UTC (12:00PST)",
        },
        description:
          "NonCitizens, an Argentinean duo, captivate with deep grooves and soundscapes. With residencies at Void Mykonos and Rumors Ibiza, their hit ‘Lost Trumpet In Space‘ gained global support, including BBC Radio 1.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/noncitizensmusic/",
          music:
            "https://open.spotify.com/artist/73KWbbG4ZspCHvI0aDcfl1?si=vLdUfMZERHaLOBaL1Lak5Q&utm_medium=share&utm_source=linktree&nd=1&dlsi=e9e051145b3f4048",
        },
      },
      {
        name: "WHIPPED CREAM",
        time: "21:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "Toronto-born DJ/producer, fusing hip-hop, cinema, and electronica. Known for cinematic soundscapes, bass riffs, and dynamic live sets at Coachella, Lollapalooza and Tomorrowland.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "https://x.com/WHIPPEDCREAM",
          instagram: "https://www.instagram.com/whippedcream/",
          music: "https://open.spotify.com/artist/5CMaNobmJYgXcfiT0zYOwi",
        },
      },
      {
        name: "DOME",
        time: "22:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Santiago Domenech (DOME) a rising DJ/producer from Buenos Aires, has played major events like The Bow and Porto Seguro. With 2.5M+ streams, he blends Latin and electronic sounds, focusing on Melodic Techno.",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/santidomee/",
          music: "https://soundcloud.com/santidomee",
        },
      },
      {
        name: "GUEVA",
        time: "23:00",
        logoSrc: "../src/img/artists/Daniel-Allan.png",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "Gueva, an underground melodic techno DJ, fuses indie dance with melodic techno, blending futuristic harmonies, emotional melodies, and an '80s groove",
        image: "../src/img/artists/Daniel-Allan.png",
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/gueva.__/",
          music:
            "https://open.spotify.com/artist/05Pn4YBKlafyqay7CrSS17?si=kLVRX0qkRoiQBoEkHU0CQQ&nd=1&dlsi=2ea53d637cb04170",
        },
      },
    ],
  },
]

// const schedule: Day[] = [
//   {
//     name: "DAY ONE",
//     artists: [
//       { name: "ARTIST", time: "12:00" },
//       { name: "ARTIST", time: "13:00" },
//       { name: "ARTIST", time: "14:00" },
//       {
//         name: "DANIEL ALLAN",
//         time: "15:00",
//         subtitle: "DAY 1 · NOV. 20 · 21:00 UTC (14:00PST)",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas ligula, pellentesque in condimentum at, placerat eget dui. Sed ut diam ipsum.",
//         image: "../src/img/artists/Daniel-Allan.png",
//         isModalEligible: true,
//         socials: {
//           twitter: "https://twitter.com/danielallan",
//           instagram: "https://instagram.com/danielallan",
//           music: "https://music.gg/danielallan",
//         },
//       },
//       { name: "LYRAH", time: "16:00" },
//       { name: "ARTIST", time: "17:00" },
//       { name: "Baby.", time: "18:00" },
//       { name: "ARTIST", time: "19:00" },
//       { name: "Syn Cole 1%", time: "20:00" },
//       { name: "ARTIST", time: "21:00" },
//       { name: "ARTIST", time: "22:00" },
//       { name: "ARTIST", time: "23:00" },
//       { name: "ARTIST", time: "00:00" },
//     ],
//   },
//   {
//     name: "DAY TWO",
//     artists: [
//       { name: "ARTIST", time: "12:00" },
//       { name: "ARTIST", time: "13:00" },
//       { name: "ARTIST", time: "14:00" },
//       { name: "ARTIST", time: "15:00" },
//       { name: "ARTIST", time: "16:00" },
//       { name: "ARTIST", time: "17:00" },
//       { name: "ARTIST", time: "18:00" },
//       { name: "ARTIST", time: "19:00" },
//       { name: "MAT ZO", time: "20:00" },
//       { name: "ARTIST", time: "21:00" },
//       { name: "ARTIST", time: "22:00" },
//       { name: "ARTIST", time: "23:00" },
//       { name: "ARTIST", time: "00:00" },
//     ],
//   },
//   {
//     name: "DAY THREE",
//     artists: [
//       { name: "ARTIST", time: "12:00" },
//       { name: "ARTIST", time: "13:00" },
//       { name: "ARTIST", time: "14:00" },
//       { name: "ARTIST", time: "15:00" },
//       { name: "ARTIST", time: "16:00" },
//       { name: "ARTIST", time: "17:00" },
//       { name: "ARTIST", time: "18:00" },
//       { name: "ARTIST", time: "19:00" },
//       { name: "WHIPPED CREAM", time: "20:00" },
//       { name: "ARTIST", time: "21:00" },
//       { name: "ARTIST", time: "22:00" },
//       { name: "ARTIST", time: "23:00" },
//       { name: "ARTIST", time: "00:00" },
//     ],
//   },
//   {
//     name: "DAY FOUR",
//     artists: [
//       { name: "ARTIST", time: "12:00" },
//       { name: "ARTIST", time: "13:00" },
//       { name: "ARTIST", time: "14:00" },
//       { name: "ARTIST", time: "15:00" },
//       { name: "ARTIST", time: "16:00" },
//       { name: "ARTIST", time: "17:00" },
//       { name: "ARTIST", time: "18:00" },
//       { name: "ARTIST", time: "19:00" },
//       { name: "DJ LAG", time: "20:00" },
//       { name: "ARTIST", time: "21:00" },
//       { name: "ARTIST", time: "22:00" },
//       { name: "ARTIST", time: "23:00" },
//       { name: "ARTIST", time: "00:00" },
//     ],
//   },
// ]

export { LineUp }

export type Artist = {
  name: string
  time: string
  image?: string
  description?: string
  logoSrc?: string
  subtitle?: {
    one: string
    two: string
    three: string
  }

  socials?: {
    twitter?: string
    instagram?: string
    discord?: string
    music?: string
  }
}
