import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SocialWallet from "../components/SocialWallet";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Section from "../components/Section";
import Main from "../components/Main";
import Header from "../components/Header";
import Unlock from "../components/Unlock";
import StarBoxes from "../components/StarBoxes";
import DisplayBoxes from "../components/DisplayBoxes";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <Box bg="cyan.50" w="100%" h="100%" overflowX="hidden">
      <Head>
        <title>xHashtag</title>
        <link
          rel="preload"
          href="/fonts/GothamBold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/MonumentExtended-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/MonumentExtended-Ultrabold.otf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="A Multichain protocol to speculate on trends"
        />
        {/* <link rel="icon" href="/logo.png" /> */}
      </Head>
      <Box w="100vw" position="relative" bg="black">
        <video
          autoPlay
          loop
          poster="/poster.png"
          style={{
            width: "100%",
            height: "100vh",
            overflowX: "hidden",
            overflowY: "hidden",
            zIndex: "-99",
            objectFit: "cover",
          }}
        >
          <source src="/Bg1.mp4" type="video/mp4" />
        </video>
        <NavBar />
        <Header />
        <Box
          position="absolute"
          right="0rem"
          top="14rem"
          zIndex="100"
          display={{ base: "none", md: "none", lg: "block" }}
        >
          <StarBoxes />
        </Box>
      </Box>
      <DisplayBoxes />
      <SocialWallet />
      <CTA />

      <Unlock />
      <Main />
      <Section />

      <Footer />
    </Box>
  );
}

// style={{
//             width: "100%",
//             height: "100vh",
//             overflowX: "hidden",
//             overflowY: "hidden",
//             zIndex: "-99",
//             objectFit: "cover",
//           }}
