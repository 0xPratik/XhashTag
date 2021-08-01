import { Box, Heading, Text, Image } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useState,useEffect } from "react";

export default function Section() {

  const [width,setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  },[width]);
  
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="flex-end"
      w="100%"
      h="30rem"
      bgGradient={width < 500 ? "linear(to-r, #166088, pink.700)" : null}
      backgroundImage={width > 400 ? "url('/back.png')" :null}
      backgroundPosition={width > 400 ? "center" :null}
      backgroundRepeat={width > 400 ? "no-repeat" :null}
      backgroundSize={width > 400 ? "cover" :null}
    >
      <Box m={{base:"1rem"}} mr={{ base: "1rem", md: "4rem", lg: "10rem" }} d="flex" flexDir="column" alignItems="center" color="white">
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
