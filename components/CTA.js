import {
  Box,
  Image,
  Text,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

import { BiBell, BiRightArrowAlt, BiBadgeCheck } from "react-icons/bi";

const DataInput = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);

    axios
      .post(
        "https://sheet.best/api/sheets/c907d17e-6ade-45dd-8ecc-add9742844d8",
        { Emails: email }
      )
      .then((response) => {
        if (response.status == 200) {
          toast({
            title: "Successfully Submitted",
            description: "Welcome to the XhashTag family",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  };
  return (
    <Stack
      bg="#0f0f0f"
      spacing="1rem"
      color="blackAlpha.600"
      py={2}
      px={1}
      borderRadius="base"
      w="25rem"
    >
      <InputGroup>
        <Input
          bg="gray.900"
          placeholder="Your email address"
          _hover={{
            background: "gray.900",
            color: "gray.300",
          }}
          _focus={{
            background: "gray.900",
            color: "gray.300",
          }}
          color="gray.300"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            aria-label="Submit"
            colorScheme="pink"
            onClick={submitHandler}
            icon={<BiRightArrowAlt />}
          />
        </InputRightElement>
      </InputGroup>
      <Box>
        <Text
          color="gray.300"
          fontFamily="gotham"
          fontSize="sm"
          fontWeight="thin"
          px={2}
        >
          You will receive email updates about Xhashtag. Unsubscribe at any
          time. Privacy policy↗
        </Text>
      </Box>
    </Stack>
  );
};

const LaunchInvite = () => {
  return (
    <Box
      shadow="dark-lg"
      d="flex"
      flexDir="row"
      alignItems="center"
      py={2}
      px={1}
      borderRadius="lg"
      bg="gray.900"
      w="25rem"
      _hover={{
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
      }}
    >
      <Icon ml={2} as={BiBell} w={8} h={8} color="white" mr={2} />
      <Text fontSize="2xl" fontFamily="gotham" color="gray.200">
        Email me at Launch
      </Text>
    </Box>
  );
};

export default function CTA() {
  const [show, setShow] = useState(false);

  let information;
  if (show) {
    information = <DataInput />;
  } else {
    information = <LaunchInvite />;
  }

  return (
    <Box
      w="100vw"
      p={10}
      d="flex"
      bg="#0f0f0f"
      alignItems="center"
      justifyContent="center"
    >
      <button onClick={() => setShow(true)}>{information}</button>
    </Box>
  );
}
