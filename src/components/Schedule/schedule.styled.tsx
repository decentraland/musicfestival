import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const ScheduleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 120px 0 120px 0;
  background-color: rgba(10, 9, 44, 1);

  * {
    color: ${theme.white};
  }

  .schedule__inner-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    /* padding: 0 0 0 24px; */

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
      color: ${theme.white};
      text-align: center;
      margin-bottom: 0;
      text-shadow:
        0 0 6px rgba(255, 255, 255, 0.4),
        0 0 12px rgba(255, 255, 255, 0.3),
        0 0 24px rgba(255, 255, 255, 0.2);
      filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));

      @media (max-width: ${breakpoints.md}) {
        font-size: 2.5rem;
      }
    }
    h4 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.2;
      color: ${theme.white};
      text-align: center;
    }
    @media (max-width: ${breakpoints.md}) {
      h4 {
        font-size: 1rem;
      }
    }
  }
`

// Component 1: Date Picker
const DatePickerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  justify-content: center;
  overflow-x: auto;
  padding: 0 10px;

  /* Hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for firefox */
  scrollbar-width: none;

  @media (max-width: ${breakpoints.md}) {
    justify-content: flex-start;
    padding: 0 5px;
  }
`

const DateButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  padding: 16px 62px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  min-width: 180px;
  border-radius: 18px;
  border: 1px solid rgba(55, 89, 144, 0.8);
background: linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)),
linear-gradient(180deg, #DC5DD2 0%, rgba(205, 110, 223, 0.6) 100%);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #fff;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
  &:hover {
    opacity: .9 !important;
  }

  }

  .date-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;

    .date {
      color: #fff;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.75px;
      text-transform: uppercase;
    }

    .day-label {
      color: #f6f6f6;
      font-family: "Inter", sans-serif;
      font-size: 11px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.5px;
    }
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 12px 40px;
    min-width: 150px;

    .date-content {
      .date {
        font-size: 14px;
      }

      .day-label {
        font-size: 10px;
      }
    }
  }
`

// Component 2: Schedule Display
const ScheduleDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  background: #fff;
  overflow-x: auto;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  user-select: none; /* Prevent text selection during drag */
  background: linear-gradient(
    180deg,
    #8f1783 0%,
    #be2884 25%,
    #fa5d9e 50%,
    #e74d6d 75%,
    #f4764f 100%
  );

  /* Hide scrollbar completely */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;

  /* Remove smooth scrolling for better drag performance */
  scroll-behavior: auto;

  /* Optimize rendering during drag */
  will-change: scroll-position;
`

const TimezoneHeader = styled.div`
  display: flex;
  height: 54px;
  padding: 16px 0;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  min-width: calc(106px + 200px * 17);
  border-top: 1px solid #203455;
  border: 1px solid #fff;
  position: relative;

  .timezone-selector {
    position: absolute;
    left: 13px;
    top: 16px;
    z-index: 1001;

    .timezone-dropdown-trigger {
      display: flex;
      padding: 4.67px 6.227px;
      justify-content: center;
      align-items: center;
      gap: 1.868px;
      border-radius: 3.736px;
      border: 0.35px solid rgba(51, 67, 92, 0.2);
      background: #fcfcfc;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #f8f8f8;
      }
    }

    .timezone-text {
      color: #33435c;
      text-align: center;
      font-family: "Inter", sans-serif;
      font-size: 7.472px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.234px;
    }

    .dropdown-icon {
      width: 9.34px;
      height: 9.34px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 8px;
        height: 6px;
      }
    }

    .timezone-dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: #fcfcfc;
      border: 0.35px solid rgba(51, 67, 92, 0.2);
      border-radius: 3.736px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 1002;
      min-width: 120px;
      margin-top: 2px;
      overflow: hidden;
    }

    .timezone-option {
      padding: 6px 10px;
      cursor: pointer;
      color: #33435c;
      font-family: "Inter", sans-serif;
      font-size: 7.472px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.234px;
      transition: background-color 0.2s ease;
      border-bottom: 0.35px solid rgba(51, 67, 92, 0.1);
      background: linear-gradient(
        180deg,
        #8f1783 0%,
        #be2884 25%,
        #fa5d9e 50%,
        #e74d6d 75%,
        #f4764f 100%
      );

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: #f0f0f0;
      }
    }
  }

  .time-slots {
    display: flex;
    padding-left: 106px;
    align-items: center;
    /* flex: 1; */
    /* min-width: calc(106px + 200px * 17); */

    .time-slot {
      width: 200px;
      color: #fcfcfc;
      text-shadow: 0 4px 2px rgba(255, 255, 255, 0.15);
      font-family: "Inter", sans-serif;
      font-size: 13px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.5px;
      text-align: center;
    }
  }
`

const ScheduleGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: calc(106px + 200px * 17);
`

const ScheduleRow = styled.div`
  display: flex;
  height: 200px;
  align-items: stretch;
  width: 100%;
  min-width: calc(106px + 200px * 17);
  transition: all 0.3s ease;
`

const StageLabel = styled.div`
  display: flex;
  width: 106px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-top: 0.75px solid #fff;
  border-right: 1px solid #203455;
  border-bottom: 0.75px solid #203455;
  flex-shrink: 0;

  .stage-timezone-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90px;
    height: 180px;
    gap: 16px;
  }

  .stage-timezone-title {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-align: center;
  }

  .stage-timezone-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .timezone-pill {
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.25);
    box-shadow:
      0 0 6px rgba(255, 255, 255, 0.4),
      0 0 12px rgba(255, 255, 255, 0.2);
    padding: 8px 4px;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .timezone-pill.active {
    background: #ffffff;
    color: #e74d6d;
  }

  .timezone-pill:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  .stage-text {
    color: #fcfcfc;
    text-shadow: 0 1px 7.6px rgba(255, 255, 255, 0.15);
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }
`

const EventSlot = styled.div<{ width?: number }>`
  display: flex;
  height: 200px;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  background: white;
  border-right: 1px solid #203455;
  border-top: 0.75px solid #203455;
  border-bottom: 0.75px solid #203455;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  width: ${(props) => (props.width ? `${props.width}px` : "200px")};

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .event-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    height: 100%;

    .event-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      width: 100%;

      .event-title {
        width: 100%;
        color: #435475;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .event-speaker {
        width: 100%;
        color: #435475;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.5px;
        opacity: 0.8;
      }

      .event-wearable {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 4px 10px;
        margin-top: 4px;
        border-radius: 999px;
        background: #d5dde7;
        box-shadow:
          0 0 0 1px rgba(24, 35, 53, 0.15),
          0 1px 2px rgba(10, 16, 28, 0.15);
      }

      .wearable-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #182335;
      }

      .wearable-text {
        color: #182335;
        font-family: "Inter", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: -0.25px;
        white-space: nowrap;
      }
    }

    .event-details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 4px;
      width: 100%;
      margin-top: auto;

      .event-type {
        display: flex;
        align-items: center;
        gap: 4px;

        .type-icon {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          margin-right: 4px;
          svg {
            fill: #43404a;
          }
        }

        .type-text {
          color: #43404a;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.5px;
        }
      }

      .event-time {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        width: 100%;

        .time-icon {
          width: 14px;
          height: 14px;
          align-self: center;
        }

        .time-text {
          flex: 1;
          display: flex;
          flex-direction: row;
          gap: 8px;
          justify-content: flex-start;
          align-items: center;

          .time-line {
            color: #435475;
            font-family: "Inter", sans-serif;
            font-size: 10px;
            font-weight: 500;
            line-height: 1.2;
            letter-spacing: -0.5px;
            white-space: nowrap;
          }
        }

        .calendar-icon {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`

const EmptySlot = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #203455;
  border-top: 0.75px solid #203455;
  border-bottom: 0.75px solid #203455;
  flex-shrink: 0;
  background-color: #fff;
  opacity: 0.5;
  transition: all 0.3s ease;
  cursor: pointer;
`

export {
  ScheduleContainer,
  DatePickerContainer,
  DateButton,
  ScheduleDisplayContainer,
  TimezoneHeader,
  ScheduleGrid,
  ScheduleRow,
  StageLabel,
  EventSlot,
  EmptySlot,
}
