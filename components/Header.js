import { Box, Text, Heading, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box position="absolute" top="20%" ml={6} color="white">
      <Heading
        fontFamily="gotham"
        textTransform="uppercase"
        w="30rem"
        fontStyle="italic"
        bgGradient="linear(-41deg,#9ebbe8 0%,#ff4ca9 53%,#fec169 100%)"
        bgClip="text"
      >
        a multichain protocol to speculate on trade trends
      </Heading>
      <Image src="/solana.png" alt="Powered by Solana" width="10rem" mt={4} />
      <Box mt={12}>
        <Heading
          size="2xl"
          fontStyle="italic"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          <span className="hashtag">#</span> Green
        </Heading>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontStyle="italic"
          w="16rem"
        >
          xhashtag nftchain allows efficient nft creation
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
