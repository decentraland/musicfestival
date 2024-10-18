import { useState } from "react"
import styled from "styled-components"
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
                <TimeDot />
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
        {modalOpen && selectedArtist?.isModalEligible && (
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
  font-family: var(--nasalization-font) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.color};
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

const TimeDot = styled.div`
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: rgba(171, 82, 255, 1);
  position: relative;
  top: -24px;
  z-index: 2;

  &:after {
    content: "";
    position: absolute;
    left: -10px;
    top: 10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: rgba(171, 82, 255, 1);
  }
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
  border: 1px solid ${(props) => props.color};
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
  padding-block: 0.6rem;
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
  margin: 0.125rem 0;
  border: 1px solid ${(props) => props.color};
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
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
]

const schedule: Day[] = [
  {
    name: "DAY ONE",
    artists: [
      { name: "ARTIST", time: "12:00" },
      { name: "ARTIST", time: "13:00" },
      { name: "ARTIST", time: "14:00" },
      {
        name: "DANIEL ALLAN",
        time: "15:00",
        subtitle: "DAY 1 · NOV. 20 · 21:00 UTC (14:00PST)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas ligula, pellentesque in condimentum at, placerat eget dui. Sed ut diam ipsum.",
        image: "../src/img/artists/Daniel-Allan.png",
        isModalEligible: true,
        socials: {
          twitter: "https://twitter.com/danielallan",
          instagram: "https://instagram.com/danielallan",
          discord: "https://discord.gg/danielallan",
        },
      },
      { name: "LYRAH", time: "16:00" },
      { name: "ARTIST", time: "17:00" },
      { name: "Baby.", time: "18:00" },
      { name: "ARTIST", time: "19:00" },
      { name: "Syn Cole 1%", time: "20:00" },
      { name: "ARTIST", time: "21:00" },
      { name: "ARTIST", time: "22:00" },
      { name: "ARTIST", time: "23:00" },
      { name: "ARTIST", time: "00:00" },
    ],
  },
  {
    name: "DAY TWO",
    artists: [
      { name: "ARTIST", time: "12:00" },
      { name: "ARTIST", time: "13:00" },
      { name: "ARTIST", time: "14:00" },
      { name: "ARTIST", time: "15:00" },
      { name: "ARTIST", time: "16:00" },
      { name: "ARTIST", time: "17:00" },
      { name: "ARTIST", time: "18:00" },
      { name: "ARTIST", time: "19:00" },
      { name: "MAT ZO", time: "20:00" },
      { name: "ARTIST", time: "21:00" },
      { name: "ARTIST", time: "22:00" },
      { name: "ARTIST", time: "23:00" },
      { name: "ARTIST", time: "00:00" },
    ],
  },
  {
    name: "DAY THREE",
    artists: [
      { name: "ARTIST", time: "12:00" },
      { name: "ARTIST", time: "13:00" },
      { name: "ARTIST", time: "14:00" },
      { name: "ARTIST", time: "15:00" },
      { name: "ARTIST", time: "16:00" },
      { name: "ARTIST", time: "17:00" },
      { name: "ARTIST", time: "18:00" },
      { name: "ARTIST", time: "19:00" },
      { name: "WHIPPED CREAM", time: "20:00" },
      { name: "ARTIST", time: "21:00" },
      { name: "ARTIST", time: "22:00" },
      { name: "ARTIST", time: "23:00" },
      { name: "ARTIST", time: "00:00" },
    ],
  },
  {
    name: "DAY FOUR",
    artists: [
      { name: "ARTIST", time: "12:00" },
      { name: "ARTIST", time: "13:00" },
      { name: "ARTIST", time: "14:00" },
      { name: "ARTIST", time: "15:00" },
      { name: "ARTIST", time: "16:00" },
      { name: "ARTIST", time: "17:00" },
      { name: "ARTIST", time: "18:00" },
      { name: "ARTIST", time: "19:00" },
      { name: "DJ LAG", time: "20:00" },
      { name: "ARTIST", time: "21:00" },
      { name: "ARTIST", time: "22:00" },
      { name: "ARTIST", time: "23:00" },
      { name: "ARTIST", time: "00:00" },
    ],
  },
]

export { LineUp }

export type Artist = {
  name: string
  time: string
  image?: string
  description?: string
  subtitle?: string

  socials?: {
    twitter: string
    instagram: string
    discord: string
  }
  isModalEligible?: boolean
}
