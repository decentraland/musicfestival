import { useEffect } from "react"
import { styled } from "styled-components"
import modalBg from "../../img/music-festival/modal.png"
import { breakpoints } from "../../utils/theme"
// Tipos
type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  isDownloadModal?: boolean
}

const Modal = ({
  isOpen,
  onClose,
  children,
  isDownloadModal = false,
}: ModalProps) => {
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    if (typeof document === "undefined") return

    if (!isOpen) return

    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalBackdrop
      onClick={onClose}
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
    >
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        isDownloadModal={isDownloadModal}
        style={{ backgroundColor: "rgba(10, 9, 44, 1)" }}
      >
        {children}
      </ModalContent>
    </ModalBackdrop>
  )
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  scroll-behavior: none;
  pointer-events: auto;
  touch-action: none;
`

const ModalContent = styled.div<{ isDownloadModal?: boolean }>`
  position: relative;
  max-width: 600px;
  width: 90%;
  background-color: rgba(10, 9, 44, 1);
  background-image: url(${modalBg});
  border-radius: 8px;
  padding: 32px;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.2),
    0px 0px 10px 0px rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(10px);
  will-change: transform;
  transition: all 300ms;

  @media (min-width: ${breakpoints.md}) {
    width: 70%;
  }
`

export { Modal }
