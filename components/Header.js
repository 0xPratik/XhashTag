import { Box, Text, Heading, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      position="absolute"
      top="20%"
      ml={{ base: 0, md: 9 }}
      mx={{ base: "2.5" }}
      color="white"
    >
      <Heading
        textTransform="uppercase"
        w={{ base: "30rem", md: "40rem" }}
        lineHeight="4rem"
        textAlign={{ base: "center", md: "left" }}
        fontStyle="italic"
        bgGradient="linear(41deg,#81bee8 10%,#ff4ca9 30%,#fec169 100%)"
        bgClip="text"
        size="2xl"
      >
        a multichain protocol to trade trends
      </Heading>
      <Box d="flex" alignItems="center">
        <Image
          src="/solana.png"
          display={{ base: "none", md: "block" }}
          alt="Powered by Solana"
          width="10rem"
          mt={6}
        />
        <Image
          src="/images/polygon.png"
          display={{ base: "none", md: "block" }}
          alt="Powered by Solana"
          width="10rem"
          mt={6}
        />
      </Box>
      <Box mt={{ base: "10", md: "20" }} ml={{ base: "10rem", md: "0.5" }}>
        <Heading
          size="2xl"
          fontStyle="italic"
          textTransform="uppercase"
          letterSpacing="widest"
          fontFamily="gotham"
        >
          <span className="hashtag">#</span>ftw
        </Heading>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontStyle="italic"
          w="16rem"
          fontFamily="gotham"
        >
          a continous prediction market for trends
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
