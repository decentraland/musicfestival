import { useState } from "react"
import { Artist, schedule } from "./data"
import { LineUpList } from "./partials/LineUpList"
import rightDiamond from "../../img/music-festival/right-diamond.png"
import { Modal } from "../Modal/Index"
import { Title } from "../Title"
import {
  ArtistCard,
  ArtistColumn,
  ArtistContainer,
  ArtistLogo,
  ArtistName,
  ArtistTime,
  BackgroundImage,
  Container,
  Content,
  Day,
  DayRow,
  DaysContainer,
  EmptySlot,
  FullLineUp,
  LeftDayLabel,
  RightDayLabel,
  ScheduleContainer,
  SectionWrapper,
  TimeDiamond,
  TimeSlot,
  TimeText,
  Timeline,
  TimelineLine,
} from "./styles"

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

  /**
   * Sets the highlighted day in the lineup.
   * @param day - The day to highlight.
   */
  const higlightDay = (day: DayHighlight): void => {
    setHighlightedDay(day)
  }

  /**
   * Checks if a specific day is currently highlighted.
   * @param index - The index of the day to check (0-based).
   * @returns True if the day is highlighted, false otherwise.
   */
  const isHighlighted = (index: number): boolean => {
    return highlightedDay === index + 1
  }

  /**
   * Handles the click event on an artist, opening the modal with artist details.
   * @param artist - The artist object that was clicked.
   */
  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist)
    setModalOpen(true)
  }

  return (
    <SectionWrapper id="lineup">
      <Title>Line Up</Title>
      <DaysContainer>
        <FullLineUp
          onClick={() => higlightDay(DayHighlight.FULL)}
          gradientTo={dayColors[1]}
          color={dayColors[0]}
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
                {time === "00:00" && <TimeText>17:00 PST</TimeText>}
                {time === "1:00" && <TimeText>18:00 PST</TimeText>}
                {time !== "00:00" && time !== "1:00" && (
                  <TimeText>
                    {parseInt(time) >= 7
                      ? parseInt(time) - 7
                      : parseInt(time) + 17}
                    :00 PST
                  </TimeText>
                )}
              </TimeSlot>
            ))}
          </Timeline>
          <ScheduleContainer>
            {schedule.map((day, index) => (
              <DayRow
                key={day.name}
                highlighted={isHighlighted(index)}
                highlightColor={dayColors[index]}
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
                            {artist.logoLineUp && (
                              <ArtistLogo
                                src={artist.logoLineUp}
                                alt={artist.name}
                              />
                            )}
                            {!artist.logoLineUp && (
                              <ArtistName>{artist.name}</ArtistName>
                            )}
                            <ArtistTime color={dayColors[index]}>
                              {artist.isReplay
                                ? `${artist.time} - REPLAY`
                                : artist.time}
                            </ArtistTime>
                          </ArtistCard>
                        ) : (
                          <EmptySlot></EmptySlot>
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
      <LineUpList />
      <div>
        {modalOpen && (
          <Modal
            onClose={() => setModalOpen(false)}
            artist={selectedArtist as Artist}
          />
        )}
      </div>
    </SectionWrapper>
  )
}

const dayColors = ["#3EFFA3", "#56A7FF", "#A35AFF", "#EF0DFF"]
const timeSlots = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
]

export { LineUp }
