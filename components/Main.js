import { Box, Image, Text, Heading } from "@chakra-ui/react";

export default function Main() {
  return (
    <Box
      borderBottom="3px solid #BE3E82"
      borderTop="3px solid #BE3E82"
      zIndex="1000"
      boxShadow=" 0 0 7px #fff,
      0 0 10px #0f0f0f,
      0 0 30px #E55381,
      0 0 30px #E55381"
      bg="#0f0f0f"
      d="flex"
      position="relative"
      flexDir="column"
      justifyContent="center"
      w="100vw"
      py={10}
    >
      <Image
        display={{ base: "none", md: "block" }}
        src="/images/line.png"
        alt="crossarrow"
        w="20rem"
        pos="absolute"
        top="-3rem"
        left="-4rem"
      />
      <Image
        display={{ base: "none", md: "block" }}
        src="/images/line.png"
        alt="crossarrow"
        transform="scaleX(-1)"
        w="20rem"
        pos="absolute"
        top="-3rem"
        right="-4rem"
      />
      <Image
        display={{ base: "none", md: "block" }}
        src="/images/line.png"
        alt="crossarrow"
        transform="scaleY(-1)"
        w="20rem"
        pos="absolute"
        top="63.5rem"
        left="-4rem"
      />
      <Image
        display={{ base: "none", md: "block" }}
        src="/images/line.png"
        alt="crossarrow"
        transform="scaleX(-1) scaleY(-1)"
        w="20rem"
        pos="absolute"
        top="63.5rem"
        right="-4rem"
      />
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box
          flex="1"
          d="flex"
          alignItems="center"
          ml={{ base: "3rem", md: "8rem" }}
          mr={{ base: "1rem", md: "2rem" }}
        >
          <Image src="/images/dollar_bag.png" alt="Liquidity" width="25rem" />
        </Box>
        <Box flex="1" mr={{ base: "2rem", md: "1rem", lg: "5rem" }}>
          <Image src="/images/liquidity.png" alt="liquidity" w="27rem" />
          <Text
            pt={2}
            fontFamily="gotham"
            fontWeight="bold"
            color="white"
            fontSize={{ lg: "lg", md: "md", base: "sm" }}
            fontStyle="italic"
          >
            Built in AMM with bonding curve ensures liquidity for #hashtags
            without any counterparty
          </Text>
        </Box>
      </Box>
      <Box
        pt={20}
        d="flex"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap-reverse"
      >
        <Box
          flex="1"
          ml={{ base: "3rem", md: "8rem" }}
          mr={{ base: "1rem", md: "2rem" }}
        >
          <Image src="/images/fee.png" alt="fee" w={{base:"5.5rem",lg:"15rem",md:"15rem"}} mb={2} />
          <Text
            fontFamily="gotham"
            fontWeight="bold"
            fontStyle="italic"
            fontSize={{ lg: "lg", md: "md", base: "sm" }}
            color="white"
          >
            A 2% tx fee is charged which is used for LP acquisition, auto
            staking rewards and prediction bounty
          </Text>
        </Box>
        <Box
          flex="1"
          d="flex"
          alignItems="center"
          justifyContent="center"
          mr={{ base: "2rem", md: "1rem", lg: "5rem" }}
        >
          <Image
            src="/images/2percent.png"
            alt="Liquidity"
            width={{ base: "20rem", md: "27rem" }}
          />
        </Box>
      </Box>
      <Box
        pt={20}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box
          flex="1"
          d="flex"
          alignItems="center"
          ml={{ base: "3rem", md: "8rem" }}
          mr={{ base: "1rem", md: "2rem" }}
        >
          <Image src="images/airdrop.png" alt="Liquidity" width="17rem" />
        </Box>
        <Box flex="1" mr={{ base: "2rem", md: "1rem", lg: "5rem" }}>
          <Image src="images/bounty.png" alt="liquidity" w="27rem" />
          <Text
            pt={2}
            fontFamily="gotham"
            fontWeight="bold"
            color="white"
            fontSize={{ lg: "lg", md: "md", base: "sm" }}
            fontStyle="italic"
          >
            Predict the hashtags that trend on popular social media platforms
            and recieve hourly airdrops
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

<Box
  display="flex"
  flexDir="row"
  alignItems="center"
  justifyContent="space-evenly"
  flexWrap="wrap"
>
  <Box
    w="50vw"
    d="flex"
    pb={3}
    alignItems="center"
    justifyContent="center"
  ></Box>
  <Box
    mr={8}
    pb={3}
    color="white"
    w="45vw"
    d="flex"
    flexDirection="column"
    justifyContent="center"
  ></Box>

  <Box
    ml={8}
    pb={3}
    color="white"
    w="45vw"
    d="flex"
    alignItems="flex-start"
    justifyContent="flex-start"
    flexDir="column"
  ></Box>
  <Box w="50vw" d="flex" alignItems="center" justifyContent="center"></Box>
  <Box
    m={{ base: 5 }}
    w="50vw"
    pb={3}
    d="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Image src="images/airdrop.png" alt="Liquidity" width="15rem" />
  </Box>
  <Box mr={8} color="white" w="45vw">
    <Image src="images/rewards.png" alt="rewards" w="25rem" mb={2} />
    <Text fontFamily="gotham" fontWeight="bold" fontSize="xl">
      #hashtags that trend on Twitter are rewarded with sponsored burn,
      increasing the price
    </Text>
  </Box>
</Box>;
