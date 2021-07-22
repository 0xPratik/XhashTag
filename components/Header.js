import { Box, Text, Heading, Image } from "@chakra-ui/react";

function Header() {
<<<<<<< HEAD
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
=======
    return (
        <Box position="absolute" top="20%" ml={{base:0,md:6}} mx={{base:"2.5"}} color='white'>
            <Heading textTransform="uppercase" w="30rem" textAlign={{base:"center",md:"left"}} fontStyle="italic" bgGradient="linear(-41deg,#9ebbe8 0%,#ff4ca9 53%,#fec169 100%)" bgClip="text">a multichain protocol to tokenize trends</Heading>
            <Image src="/solana.png" display={{base:"none",md:"block"}} alt="Powered by Solana" width="10rem" mt={4} />
            <Box mt={12} ml={{base:"10rem",md:"0.5"}}>
                <Heading size="2xl" fontStyle="italic" textTransform="uppercase" letterSpacing="widest"><span className="hashtag">#</span> ftw</Heading>
                <Text  textTransform="uppercase" fontWeight="bold" fontStyle="italic" w="16rem">a continous prediction market for trending #hashtags</Text>
            </Box>
        </Box>
    )
>>>>>>> 637f425178214877626dae118666032aefb2eb74
}

export default Header;
