import { Box, Heading, Text, Image } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function Section() {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="flex-end"
      w="100%"
      h="30rem"
      bgImage="url('/back.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box mr={{ base: "1rem", md: "4rem", lg: "10rem" }} color="white">
        <Image
          src="/usecases.png"
          alt="UseCases"
          w={{ base: "20rem", md: "30rem", lg: "40rem" }}
          mb={5}
        />
        <UnorderedList>
          <ListItem>
            <Text
              textTransform="uppercase"
              fontFamily="gotham"
              fontWeight="bold"
              mb={2}
              fontStyle="italic"
            >
              exchange $xtag for #hashtags
            </Text>
          </ListItem>
          <ListItem>
            <Text
              textTransform="uppercase"
              fontFamily="gotham"
              fontWeight="bold"
              mb={2}
              fontStyle="italic"
            >
              $xtag is locked when #hashtags are minted{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text
              textTransform="uppercase"
              fontFamily="gotham"
              mb={2}
              fontStyle="italic"
            >
              DAO Governance
            </Text>
          </ListItem>
          <ListItem>
            <Text
              textTransform="uppercase"
              fontFamily="gotham"
              mb={2}
              fontStyle="italic"
            >
              2% fee charged for every transaction
            </Text>
            <UnorderedList>
              <ListItem>
                <Text
                  textTransform="uppercase"
                  fontFamily="gotham"
                  mb={2}
                  fontStyle="italic"
                >
                  1% of the collected fee will replenish bounty pool
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  textTransform="uppercase"
                  fontFamily="gotham"
                  mb={2}
                  fontStyle="italic"
                >
                  0.5% of the collected fee will be converted to LP
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  textTransform="uppercase"
                  fontFamily="gotham"
                  mb={2}
                  fontStyle="italic"
                >
                  0.5% of the collected fee is distributed to HODLers instantly
                </Text>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
