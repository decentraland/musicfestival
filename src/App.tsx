import { DCLMusicInfo } from "./components/DCLMusicInfo/DCLMusicInfo.tsx"
import Hero from "./components/Hero/Hero.tsx"
import { BannerMarquee } from "./components/Marquee/Marquee.tsx"
import Navbar from "./components/Navbar/Navbar.tsx"

import "./css/global.css"
const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative" }}>
        <Hero />
        <DCLMusicInfo />
        <BannerMarquee />
      </main>
    </>
  )
}

export { App }
