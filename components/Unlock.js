import { Box,Image,Text,Heading, } from "@chakra-ui/react"

export default function Unlock() {
    return (
       <Box position="relative" w="100vw" h="100vh" bg="black" >
           <Image src="/red1.png" alt="redpinkstyle" w="4rem" position="absolute" top="20vh" left="0px" />
           <Image src="/red4.png" alt="redpinkstyle" w="4rem" position="absolute" top="20vh" right="0px" />
           <Image src="/red3.png" alt="redpinkstyle" w="7rem" position="absolute" top="65vh" left="0px"/>
           <Image src="/red2.png" alt="redpinkstyle" w="6rem" position="absolute" top="60vh" right="0px"/>
           <Box pt={12}color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Image src="/unlock_community.png" alt="Unlock Communities" w="35rem" />
            <Image src="vrHeadSet.png" alt="VR HeadSet" w="20rem" transform="translate(0,-30px)" />
            <Heading px={4} py={2} transform="translate(0,-2.25rem)" zIndex="1000" letterSpacing="wider" fontSize="md" textTransform="uppercase" fontFamily="gotham" className="border" borderRadius="md" bgGradient="linear(-41deg,#9ebbe8 0%,#ff4ca9 53%,#fec169 100%)" bgClip="text">
                exclusive vr enabled discord communities
            </Heading>
            <Text mt={4} fontFamily="gotham" transform="translate(0,-3rem)" textTransform="uppercase" fontStyle="italic" fontSize="xs" bgGradient="linear(-41deg,#9ebbe8 0%,#ff4ca9 53%,#fec169 100%)" bgClip="text">invested in #hashtag?meet like minded #hashtaggers</Text>
           </Box>
       </Box>
    )
}
