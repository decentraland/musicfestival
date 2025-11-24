import { Toaster } from "sonner"
import { CreditList } from "./components/CreditList/index.tsx"
import { DCLMusicInfo } from "./components/DCLMusicInfo/DCLMusicInfo.tsx"
import { Faq } from "./components/Faq/Faq.styled.tsx"
import Footer from "./components/Footer/Footer.tsx"
import { Hero } from "./components/Hero/Hero.tsx"
import { BannerMarquee } from "./components/Marquee/Marquee.tsx"
import { Navbar } from "./components/Navbar/Navbar.tsx"
import { Performers } from "./components/Performers"
import { VideoSection } from "./components/VideoSection/VideoSection.tsx"
import "./css/fonts.css"
import "./css/global.css"

const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative" }}>
        <Hero />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <VideoSection />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        {/* <MapComponent /> */}
        {/* <LineUp />
        <LiveTalks />
         */}
        {/* <LineUp /> */}
        {/* <Exhibitors /> */}
        <DCLMusicInfo />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <Performers />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <CreditList />
        <BannerMarquee noBorderBottom={false} noBorderTop={false} />
        <Faq />
        <Footer />
        <Toaster />
      </main>
    </>
  )
}

export { App }
