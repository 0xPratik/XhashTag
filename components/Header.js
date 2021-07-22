import { Box, Text, Heading, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      position="absolute"
      top="20%"
      ml={{ base: 0, md: 6 }}
      mx={{ base: "2.5" }}
      color="white"
    >
      <Heading
        textTransform="uppercase"
        w={{ base: "30rem", md: "40rem" }}
        lineHeight="4rem"
        textAlign={{ base: "center", md: "left" }}
        fontStyle="italic"
        bgGradient="linear(-41deg,#9ebbe8 0%,#ff4ca9 53%,#fec169 100%)"
        bgClip="text"
        size="2xl"
      >
        a multichain protocol to tokenize trends
      </Heading>
      <Image
        src="/solana.png"
        display={{ base: "none", md: "block" }}
        alt="Powered by Solana"
        width="10rem"
        mt={6}
      />
      <Box mt={{ base: "10", md: "20" }} ml={{ base: "10rem", md: "0.5" }}>
        <Heading
          size="2xl"
          fontStyle="italic"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          <span className="hashtag">#</span> ftw
        </Heading>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontStyle="italic"
          w="16rem"
        >
          a continous prediction market for trending #hashtags
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
