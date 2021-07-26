import { Box, Text } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Box
      w="100%"
      h="5rem"
      bg="black"
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize="md"
        fontFamily="gotham"
        textTransform="uppercase"
        color="white"
      >
        Copyright 2021 © Xhashtag - All rights reserved
      </Text>
    </Box>
  );
}
