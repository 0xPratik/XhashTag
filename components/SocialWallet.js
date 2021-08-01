import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function SocialWallet() {
  return (
    <Box
      color="white"
      d="flex"
      flexDir="column"
      alignItems={{ base: "center", md: "center", lg: "flex-start" }}
      justifyContent="center"
      zIndex="1000"
      w="100vw"
      minH="20rem"
      overflowX="hidden"
      pl={{ base: "0", lg: "8" }}
      pt={10}
      pb={10}
      bgGradient="linear(117deg,#81bee8 13%,#ff4ca9 51%,#fec169 100%)"
    >
      <Heading textTransform="uppercase" fontFamily="gotham" fontStyle="italic">
        hourly rewards
      </Heading>
      <Box
        w={{ base: "100vw", lg: "45vw" }}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          src="/images/twitter.png"
          alt="Twitter"
          w={{ base: "5rem", lg: "10rem" }}
        />
        <Image
          src="/images/insta.png"
          alt="Instagram"
          w={{ base: "5rem", lg: "10rem" }}
        />
        <Image
          src="/images/tictok.png"
          alt="TickTok"
          w={{ base: "5rem", lg: "10rem" }}
        />
      </Box>
      <Heading
        textTransform="uppercase"
        fontFamily="gotham"
        fontStyle="italic"
        textAlign={{ base: "center", lg: "left" }}
      >
        Predict the Trend across popular social
      </Heading>
    </Box>
  );
}
