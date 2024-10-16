// import { Calendar, MessageSquare, X } from "lucide-react"
import { useEffect } from "react"
import { FaDiscord, FaInstagramSquare } from "react-icons/fa"
import { IoIosClose } from "react-icons/io"
import { RiTwitterXFill } from "react-icons/ri"
import styled from "styled-components"
import { Artist } from "../LineUp"

function Modal({ onClose, artist }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden !important"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "visible !important"
    }
  }, [])

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalClose>
          <CloseButton onClick={onClose}>
            <IoIosClose size={32} />
          </CloseButton>
        </ModalClose>
        <ModalHeader>
          <ModalImage src={artist.image} alt="Event" />
          <CloseButton onClick={onClose}>{/* <X size={24} /> */}</CloseButton>
        </ModalHeader>
        <ModalBody>
          <PlanetIco>
            <img src={"src/img/music-festival/plane-ico.svg"} alt="Event" />
          </PlanetIco>
          <Title>{artist.name}</Title>
          <Subtitle>{artist.subtitle}</Subtitle>
          <Description>{artist.description}</Description>
          <Bottom>
            <Button>JUMP IN</Button>
            <IconContainer>
              {artist.socials?.twitter && (
                <a
                  href={artist.socials?.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiTwitterXFill />
                </a>
              )}
              {artist.socials?.instagram && (
                <a
                  href={artist.socials?.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare />
                </a>
              )}
              {artist.socials?.discord && (
                <a
                  href={artist.socials?.discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord size={20} />
                </a>
              )}
            </IconContainer>
          </Bottom>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: #1a1a1a;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  border-top: 1px solid;
  border-bottom: 1px solid;
  border-image: linear-gradient(90deg, #00bfff, #ff00ff) 1;
`

const ModalHeader = styled.div`
  position: relative;
  margin-top: 24px;
  margin-bottom: 24px;
`

const ModalImage = styled.img`
  position: relative;
  top: 12px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  height: 100%;
  object-fit: cover;
  margin-top: 24px;
`

const ModalClose = styled.div`
  position: relative;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1000;
`

const ModalBody = styled.div`
  padding: 20px;
  color: white;
`

const Title = styled.h2`
  font-size: 24px;
  font-family: "Inter", sans-serif !important;
`

const PlanetIco = styled.div`
  width: 100%;
  max-height: 24px;
  margin-bottom: 12px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`

const Subtitle = styled.p`
  font-size: 14px;
  font-family: "Inter", sans-serif;
`

const Description = styled.p`
  margin: 12px 0;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  line-height: 1.5;
  letter-spacing: 0.01em;
  font-weight: 300;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  background: linear-gradient(to right, #ff00ff, #00ffff);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Nasalization";
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  svg {
    width: 16px;
    height: 16px;
  }
`

interface ModalProps {
  onClose: () => void
  artist: Artist
}

export { Modal }
