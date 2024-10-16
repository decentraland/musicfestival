import { DCLMusicInfo } from "./components/DCLMusicInfo/DCLMusicInfo.tsx"
import { Exhibitors } from "./components/Exhibitors/Exhibitors.tsx"
import Footer from "./components/Footer/Footer.tsx"
import { Hero } from "./components/Hero/Hero.tsx"
import { LineUp } from "./components/LineUp/index.tsx"
import { LiveTalks } from "./components/LiveTalks/LiveTalks.tsx"
import { MapComponent } from "./components/MapComponent/MapComponent.tsx"
import { BannerMarquee } from "./components/Marquee/Marquee.tsx"
import { Navbar } from "./components/Navbar/Navbar.tsx"
import "./css/global.css"

const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative" }}>
        <Hero />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <LineUp />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <LiveTalks />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <MapComponent />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <Exhibitors />
        <DCLMusicInfo />
        <Footer />
      </main>
    </>
  )
}

export { App }
