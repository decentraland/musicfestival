import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet";
import Layout from "./../components/Layout";
import Hero from "./../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import BannerMarquee from "../components/Marquee"; // Import the Marquee component

// SEO Meta Information
const seo = {
  title: "Decentraland Music Festival | Decentraland",
  description:
    "A three-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Music Festival is a grand collision of light, sound and portable toilets.",
  image: "https://musicfestival.decentraland.org/dmf-logo-white.png",
};

const meta = {
  ...seo,
  "og:title": seo.title || "",
  "twitter:title": seo.title || "",
  "og:description": seo.description || "",
  "twitter:description": seo.description || "",
  "og:image": seo.image || "",
  "twitter:image": seo.image || "",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@decentraland",
  "og:type": "website",
};

// Main Component
const IndexPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  // State to control visibility of sections
  const [showHero, setShowHero] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showMarquee, setShowMarquee] = useState(true); // State to show/hide Marquee

  useEffect(() => {
    if (typeof window !== "undefined") {
      initTwitter(); // Initialize Twitter script
    }

    import("react-facebook-pixel")
      .then((module) => module.default)
      .then((ReactPixel) => {
        if (typeof window !== "undefined") {
          ReactPixel.init("291661748141710", {}, { autoConfig: true, debug: false });
          ReactPixel.pageView();
        }
      });
  }, []);

  return (
    <StyledIndexPage>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        {/* Add other meta tags */}
      </Helmet>
      <Layout>
        <header>
          <Navbar />
          {showHero && <Hero />} {/* Conditionally show Hero */}
        </header>
        <main>
          {/* Marquee between Hero and About */}
          {showMarquee && <BannerMarquee />} 

          {showAbout && <About />} {/* Conditionally show About */}
          
          {/* Marquee between About and Footer */}
          {showMarquee && <BannerMarquee />} 

          {showFooter && <Footer />} {/* Conditionally show Footer */}
        </main>
      </Layout>
    </StyledIndexPage>
  );
};

const StyledIndexPage = styled.div`
  background: transparent;
`;

// Twitter initialization script
export const initTwitter = () => {
  const head = document.querySelector("head");
  const addTwitterScript = () => {
    const twitterScript = document.createElement("script");
    twitterScript.type = "text/javascript";
    twitterScript.src = "https://static.ads-twitter.com/uwt.js";
    head.appendChild(twitterScript);
  };

  const initializeTwq = (windowObj, documentObj, elementType) => {
    if (!windowObj.twq) {
      const twitterEventTracker = (windowObj.twq = (...args) => {
        twitterEventTracker.exe
          ? twitterEventTracker.exe.apply(twitterEventTracker, args)
          : twitterEventTracker.queue.push(args);
      });
      twitterEventTracker.version = "1.1";
      twitterEventTracker.queue = [];
      const twitterScriptElement = documentObj.createElement(elementType);
      twitterScriptElement.async = true;
      twitterScriptElement.src = "https://static.ads-twitter.com/uwt.js";
      const a = documentObj.getElementsByTagName(elementType)[0];
      a.parentNode.insertBefore(twitterScriptElement, a);
    }
  };

  addTwitterScript();
  initializeTwq(window, document, "script");
  window.twq("config", "oa4sn");
};

export default IndexPage;
