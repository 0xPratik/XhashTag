import Head from "next/head";
import { Box, Image } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SocialWallet from "../components/SocialWallet";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Section from "../components/Section";
import Main from "../components/Main";
import Header from "../components/Header";
import Unlock from "../components/Unlock";

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
          style={{
            width: "100%",
            height: "100vh",
            overflowX: "hidden",
            overflowY: "hidden",
            zIndex: "-99",
            objectFit: "cover",
          }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <NavBar />
        <Header />
        <Box position="absolute" right="7rem" top="18rem" zIndex="100">
          <Image
            src="/boxes.png"
            display={{ base: "none", md: "block" }}
            alt="Boxes"
            w="28rem"
          />
        </Box>
      </Box>
      <SocialWallet />
      <Unlock />
      <Main />
      <Section />
      <Footer />
    </Box>
  );
}
