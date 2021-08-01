import { Box, Text, Image } from "@chakra-ui/react";

//These are the Boxes that gets displayed in smaller screens

export default function DisplayBoxes() {
  return (
    <Box
      display={['block','block','none','none']}
      d="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
      bgGradient="linear(41deg,#81bee8 10%,#ff4ca9 30%,#fec169 100%)"
    >
      <Box position="relative">
        <Image src="/images/box.png" alt="Box" w="15rem" />
        <Text
          position="absolute"
          left="2rem"
          bottom="4rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          trade
        </Text>
        <Text
          position="absolute"
          left="2rem"
          bottom="2.5rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          #hashtags
        </Text>
      </Box>
      {/* Box no 2 */}
      <Box position="relative">
        <Image src="/images/box.png" alt="Box" w="15rem" />
        <Text
          position="absolute"
          left="2rem"
          bottom="4rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          guaranteed
        </Text>
        <Text
          position="absolute"
          left="2rem"
          bottom="2.5rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          liquidity
        </Text>
      </Box>
      {/* BOx no 3 */}
      <Box position="relative">
        <Image src="/images/box.png" alt="Box" w="15rem" />
        <Text
          position="absolute"
          left="2rem"
          bottom="4rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          unlock discord
        </Text>
        <Text
          position="absolute"
          left="2rem"
          bottom="2.5rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          channels
        </Text>
      </Box>
      {/* Box no 4 */}
      <Box position="relative">
        <Image src="/images/box.png" alt="Box" w="15rem" />
        <Text
          position="absolute"
          left="2rem"
          bottom="4rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          chrome
        </Text>
        <Text
          position="absolute"
          left="2rem"
          bottom="2.5rem"
          fontStyle="italic"
          fontWeight="bold"
          textTransform="uppercase"
          fontFamily="gotham"
          color="white"
        >
          extension
        </Text>
      </Box>
    </Box>
  );
}
