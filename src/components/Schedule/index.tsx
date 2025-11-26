import { useRef, useState } from "react"
import { GoPin } from "react-icons/go"
import {
  RiGlobeLine,
  RiInstagramFill,
  RiTwitchFill,
  RiTwitterXLine,
} from "react-icons/ri"
import { TbShirt } from "react-icons/tb"
import {
  ScheduleEvent,
  convertToPST,
  dateOptions,
  scheduleData,
  stages,
  timeSlots,
} from "./data"
import { ArtistModalContainer } from "../Installations/Installations.styled"
import { Modal } from "../Modal/Modal"
import {
  DateButton,
  DatePickerContainer,
  EmptySlot,
  EventSlot,
  ScheduleContainer,
  ScheduleDisplayContainer,
  ScheduleGrid,
  ScheduleRow,
  StageLabel,
  TimezoneHeader,
} from "./schedule.styled"

const getTimeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667ZM8.00001 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00004C13.3333 5.05452 10.9455 2.66671 8.00001 2.66671C5.05449 2.66671 2.66668 5.05452 2.66668 8.00004C2.66668 10.9456 5.05449 13.3334 8.00001 13.3334ZM8.66668 8.00004H11.3333V9.33337H7.33334V4.66671H8.66668V8.00004Z"
      fill="#435475"
    />
  </svg>
)

// Function to detect current date and return appropriate default
const getDefaultDate = () => {
  const today = new Date()
  const currentMonth = today.getMonth() + 1 // getMonth() is 0-indexed
  const currentDay = today.getDate()

  // Check if we're in September and within the date range
  if (currentMonth === 12) {
    // December
    if (currentDay >= 3 && currentDay <= 6) {
      return `dec-${currentDay}`
    }
  }

  // Default to September 24 if not in range
  return "dec-3"
}

type DateOption = {
  key: string
  date: string
  label: string
}

type ArtistSocialType = "twitter" | "instagram" | "twitch" | "website"

type ArtistSocialLink = {
  type: ArtistSocialType
  url: string
}

const Schedule = () => {
  const [activeDate, setActiveDate] = useState(getDefaultDate())
  const [selectedTimezone, setSelectedTimezone] = useState<"UTC" | "PST">("UTC")
  const scheduleContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 })
  const animationFrameRef = useRef<number | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null)

  // PST time slots (UTC - 8 hours) - generated dynamically
  const timeSlotsPST: string[] = timeSlots.map((slot: string) =>
    convertToPST(slot)
  )

  // Get current time slots based on selected timezone
  const getCurrentTimeSlots = () => {
    return selectedTimezone === "UTC" ? timeSlots : timeSlotsPST
  }

  // Handle timezone selection
  const handleTimezoneSelect = (timezone: "UTC" | "PST") => {
    setSelectedTimezone(timezone)
  }

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scheduleContainerRef.current) return
    setIsDragging(true)
    setDragStart({
      x: e.pageX - scheduleContainerRef.current.offsetLeft,
      scrollLeft: scheduleContainerRef.current.scrollLeft,
    })
    scheduleContainerRef.current.style.cursor = "grabbing"
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scheduleContainerRef.current) return
    e.preventDefault()

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    // Use requestAnimationFrame for smoother scrolling
    animationFrameRef.current = requestAnimationFrame(() => {
      if (!scheduleContainerRef.current) return
      const x = e.pageX - scheduleContainerRef.current.offsetLeft
      const walk = (x - dragStart.x) * 1 // Reduced scroll speed multiplier for smoothness
      scheduleContainerRef.current.scrollLeft = dragStart.scrollLeft - walk
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    if (scheduleContainerRef.current) {
      scheduleContainerRef.current.style.cursor = "grab"
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    if (scheduleContainerRef.current) {
      scheduleContainerRef.current.style.cursor = "grab"
    }
  }

  // Touch support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scheduleContainerRef.current) return
    setIsDragging(true)
    setDragStart({
      x: e.touches[0].pageX - scheduleContainerRef.current.offsetLeft,
      scrollLeft: scheduleContainerRef.current.scrollLeft,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scheduleContainerRef.current) return
    const x = e.touches[0].pageX - scheduleContainerRef.current.offsetLeft
    const walk = (x - dragStart.x) * 12 // Reduced scroll speed multiplier for smoothness
    scheduleContainerRef.current.scrollLeft = dragStart.scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }

  // Calculate cell width based on time duration (200px per hour slot)
  const calculateCellWidth = (duration: number) => {
    return 200 * duration
  }

  const handleEventClick = (event: ScheduleEvent) => {
    setSelectedEvent(event)
  }

  const getArtistSocialLinks = (
    event: ScheduleEvent | null
  ): ArtistSocialLink[] => {
    if (!event?.artist?.socials) return []
    const { socials } = event.artist
    const links: ArtistSocialLink[] = []

    if (socials.twitter) {
      links.push({ type: "twitter", url: socials.twitter })
    }
    if (socials.instagram) {
      links.push({ type: "instagram", url: socials.instagram })
    }
    if (socials.twitch) {
      links.push({ type: "twitch", url: socials.twitch })
    }
    if (socials.website) {
      links.push({ type: "website", url: socials.website })
    }

    return links
  }

  const getSocialIcon = (type: ArtistSocialType) => {
    switch (type) {
      case "instagram":
        return <RiInstagramFill size={20} />
      case "twitter":
        return <RiTwitterXLine size={20} />
      case "twitch":
        return <RiTwitchFill size={20} />
      case "website":
        return <RiGlobeLine size={20} />
      default:
        return <RiGlobeLine />
    }
  }

  // Create grid layout for a specific stage
  const renderStageRow = (stageName: string) => {
    const stageEvents = scheduleData[activeDate]?.[stageName] || []
    const grid = Array(timeSlots.length).fill(null)
    const usedSlots = new Set<number>()

    // Place events in their time slots
    stageEvents.forEach((event: ScheduleEvent) => {
      for (
        let i = event.timeSlotStart;
        i < event.timeSlotStart + event.duration && i < timeSlots.length;
        i++
      ) {
        if (i === event.timeSlotStart) {
          grid[i] = event
        } else {
          usedSlots.add(i)
        }
      }
    })

    const stageContent = grid.map((item, index) => {
      if (usedSlots.has(index)) {
        return null // Skip slots that are part of a multi-slot event
      }

      if (item) {
        const event = item as ScheduleEvent
        const cellWidth = calculateCellWidth(event.duration)
        const hasArtist = Boolean(event.artist)

        return (
          <EventSlot
            key={`event-${event.id}-${event.startTime}-${event.endTime}`}
            width={cellWidth}
            onClick={hasArtist ? () => handleEventClick(event) : undefined}
            style={{
              cursor: hasArtist ? "pointer" : "default",
              opacity: hasArtist ? 1 : 0.9,
            }}
          >
            <div className="event-content">
              <div className="event-info">
                <div className="event-title">{event.title}</div>
                <div className="event-speaker">{event.subtitle}</div>
                {event.hasWearable && (
                  <div className="event-wearable">
                    <div className="wearable-icon">
                      <TbShirt
                        size={16}
                        style={{ fill: "#435475", stroke: "transparent" }}
                      />
                    </div>
                    <div className="wearable-text">Merch Drop</div>
                  </div>
                )}
              </div>
              <div className="event-details">
                <div className="event-type">
                  <div className="type-icon">
                    <GoPin size={16} />
                  </div>
                  <div className="type-text">{event.stage}</div>
                </div>
                <div className="event-time">
                  <div className="time-icon">{getTimeIcon()}</div>
                  <div className="time-text">
                    {selectedTimezone === "UTC" ? (
                      <>
                        {" "}
                        <div className="time-line">
                          UTC: {event.startTime} - {event.endTime}
                        </div>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <div className="time-line">
                          PST: {convertToPST(event.startTime)} -{" "}
                          {convertToPST(event.endTime)}
                        </div>{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </EventSlot>
        )
      }

      return <EmptySlot key={`empty-${stageName}-${index}`} />
    })

    return (
      <ScheduleRow key={stageName}>
        <StageLabel>
          <div className="stage-timezone-card">
            <div className="stage-timezone-title">TIMEZONE</div>
            <div className="stage-timezone-buttons">
              <button
                type="button"
                className={`timezone-pill ${
                  selectedTimezone === "UTC" ? "active" : ""
                }`}
                onClick={() => handleTimezoneSelect("UTC")}
              >
                UTC
              </button>
              <button
                type="button"
                className={`timezone-pill ${
                  selectedTimezone === "PST" ? "active" : ""
                }`}
                onClick={() => handleTimezoneSelect("PST")}
              >
                PST
              </button>
            </div>
          </div>
        </StageLabel>
        {stageContent}
      </ScheduleRow>
    )
  }

  return (
    <ScheduleContainer id="schedule">
      <div className="schedule__inner-container">
        <div>
          <h2>Plan Your Festival </h2>
          <p>
            See who’s playing each day, when the drops happen, and where to
            explore next.
          </p>
        </div>

        {/* Component 1: Date Picker */}
        <DatePickerContainer>
          {dateOptions.map((option: DateOption) => (
            <DateButton
              key={option.key}
              $isActive={activeDate === option.key}
              onClick={() => setActiveDate(option.key)}
            >
              <div className="date-content">
                <div className="date">{option.date}</div>
                <div className="day-label">{option.label}</div>
              </div>
            </DateButton>
          ))}
        </DatePickerContainer>

        {/* Component 2: Schedule Display */}
        <ScheduleDisplayContainer
          ref={scheduleContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <TimezoneHeader>
            <div className="time-slots">
              {getCurrentTimeSlots().map((time: string, index: number) => (
                <div key={index} className="time-slot">
                  {time}
                </div>
              ))}
            </div>
          </TimezoneHeader>

          <ScheduleGrid>
            {stages.map((stageName: string) => renderStageRow(stageName))}
          </ScheduleGrid>
        </ScheduleDisplayContainer>
      </div>
      {selectedEvent && (
        <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          <ArtistModalContainer>
            <div className="top">
              {selectedEvent.artist?.image && (
                <img
                  src={selectedEvent.artist.image}
                  alt={selectedEvent.artist.name}
                />
              )}
              <h2>{selectedEvent.artist?.name ?? selectedEvent.title}</h2>
            </div>
            <div className="middle">
              {selectedEvent.artist?.bio && (
                <p className="bio">{selectedEvent.artist.bio}</p>
              )}
              {getArtistSocialLinks(selectedEvent).length > 0 && (
                <div
                  className="social-links"
                  style={{ display: "flex", gap: "12px", marginTop: "12px" }}
                >
                  {getArtistSocialLinks(selectedEvent).map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.type}
                    >
                      {getSocialIcon(link.type)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </ArtistModalContainer>
        </Modal>
      )}
    </ScheduleContainer>
  )
}

export { Schedule }
