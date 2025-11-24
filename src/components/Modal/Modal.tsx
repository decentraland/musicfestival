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
  if (!isOpen) return null

  return (
    <ModalBackdrop onClick={onClose}>
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
