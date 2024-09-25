// import { DCLMusicInfo } from "./components/DCLMusicInfo/DCLMusicInfo.tsx"
import Footer from "./components/Footer/Footer.tsx"
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
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <Footer />
      </main>
    </>
  )
}

export { App }
