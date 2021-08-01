import { Box, Text, Heading, Image } from "@chakra-ui/react";
import CTA from "./CTA";

function Header() {
  return (
    <Box
      position="absolute"
      pl={{base:0,lg:8}}
      top="20%"
      color="white"
      d="flex"
      alignItems={{base:"center",lg:"flex-start",md:"flex-start"}}
      flexDir="column"
      justifyContent="flex-start"
    >
      <Heading
        textTransform="uppercase"
        fontStyle="italic"
        bgGradient="linear(41deg,#81bee8 10%,#ff4ca9 30%,#fec169 100%)"
        bgClip="text"
        size="2xl"
        letterSpacing={{base:"wider"}}
        textAlign={{base:'center',lg:"left",md:"left"}}
        w={{md:"40rem"}}
      >
        make money by trading hashtags
      </Heading>
      <Box d="flex" alignItems="center" mt={4}>
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
      width="9rem"
      mt={6}
    />
    </Box> 
    <Box mt={{md:8,base:20,lg:20}} mb={{base:6}}>
        <CTA />
      </Box> 
    </Box>
  );
}

export default Header;




 
