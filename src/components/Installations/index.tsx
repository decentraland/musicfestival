import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { GoArrowUpRight } from "react-icons/go"
import { IoMdClose } from "react-icons/io"
import { MdOutlineSearch } from "react-icons/md"
import { RiLink } from "react-icons/ri"
import { toast } from "sonner"
import { artists } from "./data"
import { subscribeToNewsletter } from "../../modules/newsletter"
import { InlineSignup, SignupInput, SubscribeButton } from "../Hero/styles"
import { Modal } from "../Modal/Modal.tsx"
import {
  ArtistModalContainer,
  InstallationsContainer,
} from "./Installations.styled"
// import { GoArrowUpRight } from "react-icons/go"

const Installations = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeArtist, setActiveArtist] = useState<{
    id: number
    name: string
    artworkTitle: string
    description: string
    image: string
    link: string
    studio: string
    coordinates: {
      lat: number
      lng: number
    }
  } | null>(null)
  console.log(isInView)
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const allInstallations = [...artists]

  const filteredData =
    searchTerm.trim() === ""
      ? allInstallations
      : allInstallations.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
  console.log(allInstallations, "allInstallations")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      toast.error("Email is required")
      return
    }
    const emailRegex =
      /^(?:[a-zA-Z0-9_'^&+-])+(?:\.(?:[a-zA-Z0-9_'^&+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    if (!emailRegex.test(trimmed)) {
      toast.error("Please enter a valid email", {
        duration: 10000,
      })
      return
    }
    try {
      setSubmitting(true)
      await subscribeToNewsletter(trimmed)
      toast.success(
        "Almost done! Check your inbox to confirm your subscription."
      )
      setEmail("")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Subscription failed"
      toast.error(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <InstallationsContainer id="installations">
      <div className="installations__inner-container" ref={containerRef}>
        <h2>Explore the Festival</h2>
        <div className="installations__filters">
          <div>
            Step inside creator-built venues, Party Pads, and interactive builds
            inspired by internet and stream culture.
          </div>

          <div className="installations__filters__search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search installations"
            />
            <MdOutlineSearch className="search-icon" />
          </div>
        </div>

        <div className="installations__grid">
          {filteredData.map((item) => {
            return (
              <motion.div
                key={item.id}
                className="installations__grid-item"
                onClick={() => {
                  setActiveArtist(item)
                  setIsModalOpen(true)
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveArtist(item)
                    setIsModalOpen(true)
                  }}
                />
                <h6>{item.name}</h6>
              </motion.div>
            )
          })}
        </div>
        {filteredData.length === 0 && (
          <div className="installations__no-results">
            <h2>No installations found for &apos;{searchTerm}&apos;</h2>
            <p>
              Try searching for a different keyword or browse all the
              installations.
            </p>
          </div>
        )}
      </div>
      <InlineSignup
        onSubmit={handleSubscribe}
        aria-label="Notify signup (installations)"
        style={{ marginTop: "42px" }}
      >
        <SignupInput
          id="installations-email-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
          disabled={submitting}
        />
        <SubscribeButton type="submit" disabled={submitting}>
          <span>{submitting ? "Subscribing..." : "SIGN UP NOW"}</span>
        </SubscribeButton>
      </InlineSignup>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ArtistModalContainer>
          <div className="top">
            <img src={activeArtist?.image} alt={activeArtist?.name} />
            <h2>{activeArtist?.name}</h2>
            {/* <p>{activeArtist?.artworkTitle}</p> */}
          </div>
          <div className="middle">
            <p>{activeArtist?.description || "No description available"}</p>
            {activeArtist?.link && (
              <a
                href={activeArtist?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLink />
              </a>
            )}
          </div>
          <hr />
          <div className="bottom">
            <div>
              <h6>Studio</h6>
              <p>{activeArtist?.studio}</p>
            </div>
            <div>
              <h6>Decentraland coordinates</h6>
              <p>
                ({Math.round(activeArtist?.coordinates.lat ?? 0)},{" "}
                {Math.round(activeArtist?.coordinates.lng ?? 0)})
              </p>
            </div>
          </div>
          <hr />
          <div className="actions">
            <button
              onClick={() => {
                window.open(
                  `https://decentraland.org/jump/?position=${encodeURIComponent(`${activeArtist?.coordinates.lat},${activeArtist?.coordinates.lng}`)}`,
                  "_blank"
                )
              }}
            >
              <GoArrowUpRight color="#fff" /> Jump in
            </button>
            <button onClick={() => setIsModalOpen(false)}>
              <IoMdClose color="#000" /> Close
            </button>
          </div>
        </ArtistModalContainer>
      </Modal>
    </InstallationsContainer>
  )
}
export { Installations }
