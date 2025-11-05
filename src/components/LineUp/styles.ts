import { motion } from "framer-motion"
import { styled } from "styled-components"

const SectionWrapper = styled(motion.div).attrs({})`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled(motion.div).attrs({})`
  width: 100%;
  background-color: black;
  color: white;
  overflow-x: auto;
  max-width: 100vw;
  position: relative;
`

const DaysContainer = styled(motion.div).attrs({})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem;
  max-width: 100%;
  margin: 0 auto;
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1240px) {
    justify-content: center;
    gap: 120px;
    max-width: 1240px;
  }
`

const ArtistLogo = styled(motion.img).attrs({})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100px;
  margin-inline: auto;
  max-height: 40px;
`

const Day = styled(motion.div).attrs<{
  gradientTo?: string
  isActive?: boolean
  color: string
}>({})<{
  gradientTo?: string
  isActive?: boolean
  color: string
}>`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Nasalization Rg", sans-serif !important;
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
  letter-spacing: 2px;
  transition: box-shadow 0.2s ease-in-out;
  will-change: box-shadow;

  ${(props) =>
    props.isActive &&
    `
    box-shadow: 0 0 20px 0 ${props.color}99;
    transition: box-shadow 0.2s ease-in-out;
    will-change: box-shadow;
  `}

  span {
    color: ${(props) => props.color} !important;

    &:first-child {
      font-size: 0.55rem;
      font-family: "Inter", sans-serif;
    }

    &:last-child {
      font-size: 1rem;
    }
  }

  ${(props) =>
    props.gradientTo &&
    `

    &::after {
      content: '';
      position: absolute;
      right: 100%;
      width: 120px;
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
    color: #000 !important;
    font-size: 1.25rem;
    font-family: "Nasalization Rg", sans-serif !important;
  }

  &::after {
    display: none;
  }
`

const BackgroundImage = styled(motion.div).attrs({})`
  position: absolute;
  inset: 0;
  background-image: url("/placeholder.svg?height=1080&width=1920");
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`

const Content = styled(motion.div).attrs({})`
  position: relative;
  z-index: 1;
  padding: 1rem;
  min-width: max-content;
`

const Timeline = styled(motion.div).attrs<{ columns: number }>({})<{
  columns: number
}>`
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

const TimelineLine = styled(motion.div).attrs({})`
  position: absolute;
  width: 100%;
  top: 4px;
  left: 0;
  height: 1px;
  background-color: white;
  z-index: 1;
`

const TimeSlot = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  min-width: 100px;
`

const TimeDiamond = styled(motion.img).attrs({})`
  width: 24px;
  height: 24px;
  top: -15px;
  z-index: 2;
  position: relative;
`

const TimeText = styled(motion.div).attrs({})`
  font-size: 0.75rem;
  font-weight: bold;
`

const ScheduleContainer = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`

const DayRow = styled(motion.div).attrs<{
  highlighted: boolean
  inactive: boolean
  highlightColor: string
}>({})<{
  highlighted: boolean
  inactive: boolean
  highlightColor: string
}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color, opacity;
  background-color: ${(props) =>
    props.highlighted ? `${props.highlightColor}33` : "transparent"};
  opacity: ${(props) => (props.inactive ? 0.5 : 1)};
  pointer-events: ${(props) => (props.inactive ? "none" : "auto")};
`

const DayLabel = styled(motion.div).attrs<{ color: string }>({})<{
  color: string
}>`
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

const ArtistContainer = styled(motion.div).attrs<{
  columns: number
  color: string
}>({})<{ columns: number; color: string }>`
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

const ArtistColumn = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
`

const ArtistCard = styled(motion.div).attrs<{ color: string }>({})<{
  color: string
}>`
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
  height: 65px;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }
`

const ArtistName = styled(motion.div).attrs({})`
  font-size: 0.75rem;
  font-weight: bold;
`

const ArtistTime = styled(motion.div).attrs<{ color: string }>({})<{
  color: string
}>`
  font-size: 0.8rem;
  color: ${(props) => props.color};
`

const EmptySlot = styled(motion.div).attrs({})`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  min-height: 50px;
`

export {
  SectionWrapper,
  Container,
  DaysContainer,
  ArtistLogo,
  Day,
  FullLineUp,
  BackgroundImage,
  Content,
  Timeline,
  TimelineLine,
  TimeSlot,
  TimeDiamond,
  TimeText,
  ScheduleContainer,
  DayRow,
  DayLabel,
  LeftDayLabel,
  RightDayLabel,
  ArtistContainer,
  ArtistColumn,
  ArtistCard,
  ArtistName,
  ArtistTime,
  EmptySlot,
}
