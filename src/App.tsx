import React from "react"
import DCLMusicInfo from "./components/DCLMusicInfo.jsx"
import Hero from "./components/Hero.jsx"
import BannerMarquee from "./components/Marquee.jsx"
import "./css/global.css"

const App = () => {
  return (
    <main>
      <Hero />
      <BannerMarquee />
      <DCLMusicInfo />
      <BannerMarquee />
    </main>
  )
}

export { App }
