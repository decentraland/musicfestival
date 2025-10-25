import { DCLMusicInfo } from "./components/DCLMusicInfo/DCLMusicInfo.tsx"
import { Faq } from "./components/Faq/Faq.styled.tsx"
import Footer from "./components/Footer/Footer.tsx"
import { Hero } from "./components/Hero/Hero.tsx"
import { BannerMarquee } from "./components/Marquee/Marquee.tsx"
import { Navbar } from "./components/Navbar/Navbar.tsx"
import "./css/fonts.css"
import "./css/global.css"

const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative" }}>
        <Hero />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        {/* <LineUp />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <LiveTalks />
        <MapComponent />
        <Exhibitors /> */}
        <DCLMusicInfo />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <Faq />
        <Footer />
      </main>
    </>
  )
}

export { App }
