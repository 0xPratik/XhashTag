import { Box, Image, Text } from "@chakra-ui/react";

export default function StarBoxes() {
  return (
    <Box position="relative" w="40rem">
      <Box position="absolute" left="1rem">
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
      </Box>
      <Box position="absolute" left="18rem" top="5rem">
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
      </Box>
      <Box position="absolute" top="18rem" left="1rem">
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
      </Box>
      <Box position="absolute" left="18rem" top="23rem">
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
            auto
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
            staking
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
