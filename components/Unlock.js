import { Box, Image, Text, Heading } from "@chakra-ui/react";

export default function Unlock() {
  return (
    <Box
      position="relative"
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="100vw"
      h={{base:"50vh",lg:"100vh",md:"100vh",lg:"97vh","2xl":"95vh"}}
      bg="#0f0f0f"
      borderbottom="4px solid pink"
    >
      <Image
        src="/red1.png"
        alt="redpinkstyle"
        display={{ base: "none", md: "block" }}
        w={{ md: "3.5rem", lg: "6rem" }}
        position="absolute"
        top={{ md: "5vh", lg: "10vh" }}
        left="0rem"
      />
      <Image
        src="/red4.png"
        alt="redpinkstyle"
        display={{ base: "none", md: "block" }}
        w={{ md: "5.5rem", lg: "9rem" }}
        position="absolute"
        top={{ md: "10vh", lg: "17vh" }}
        right="0rem"
      />
      <Image
        src="/red3.png"
        alt="redpinkstyle"
        display={{ base: "none", md: "block" }}
        w={{ md: "5rem", lg: "9rem" }}
        position="absolute"
        top={{ md: "55vh", lg: "80vh" }}
        left="0rem"
      />
      <Image
        src="/red2.png"
        alt="redpinkstyle"
        display={{ base: "none", md: "block" }}
        w={{ md: "4rem", lg: "7rem" }}
        position="absolute"
        top={{ md: "60vh", lg: "80vh" }}
        right="0rem"
      />
      <Box
        pt={12}
        color="white"
        mx={{ base: "2rem", md: "5rem" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/unlock.png"
          alt="Unlock Community"
          w={{ lg: "50rem" }}
        />
      </Box>
    </Box>
  );
}
