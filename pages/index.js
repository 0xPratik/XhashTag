import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SocialWallet from "../components/SocialWallet";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Main from "../components/Main";
import Header from "../components/Header";
import Unlock from "../components/Unlock";
import StarBoxes from "../components/StarBoxes";
import DisplayBoxes from "../components/DisplayBoxes";
import styles from '../styles/video.module.css'

export default function Home() {
  const [width,setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  },[width]);
  return (
    <Box bg="black" w="100%" h="100%" overflowX="hidden">
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
      <Box w="100%" h={{base:"50vh",md:"100vh",lg:"100vh",xl:"100vh"}} position="relative" bg="black">
        <video
          autoPlay
          loop
          muted
          className="videoBG"
          style={{minHeight:"100vh",width:"100vw",height:"100vh",objectFit:"cover"}}
        >
          <source src="/Bg1.mp4" type="video/mp4" />
        </video>
        <style jsx>{`
        .videoBG{
          width:100vw,
          height:100vh,
          zIndex:-99,
          overFlowX:hidden,
          overFlowY:hidden,
          objectFit:cover,
          position:fixed
        }
        @media (max-width: 767px) {
          .videoBG {
            display:none
          }
        }
        `}</style>
        <NavBar />
        <Header />
        <Box
          position="absolute"
          right="-1rem"
          top="22rem"
          zIndex="100"
          display={{ base: "none",sm:"none", md: "block", lg: "block" }}
        >
          <StarBoxes />
        </Box>
      </Box>
      <DisplayBoxes />
      <SocialWallet />
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
