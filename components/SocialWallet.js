import {Box,Heading,Image,Text} from "@chakra-ui/react"

export default function SocialWallet() {
    return (
        <Box color="white" w="100vw" overflowX="hidden" pt={12} pl={8} pb={10} bgGradient="linear(to-br,orange.400,pink.500,blue.200)" >
            <Heading as="h1" mb={1} fontFamily="gotham" size="xl" fontStyle="italic" letterSpacing=".5rem">SOCIAL WALLET</Heading>
            <Box display="flex" w="50vw">
            <Image src="/twitter.png" alt="Twitter" w="8vw" mr={20} />
            <Image src="/facebook.png" alt="Facebook" w="8vw" mr={20} />
            <Image src="/linkedln.png" alt="LinkedIn" w="8vw" />
            </Box>
            <Text fontFamily="gotham" fontSize="xl" mt={4} fontStyle="italic">TRADE #HASHTAGS ON FAVORITE SOCIAL PLATFORMS</Text>
        </Box>
    )
}
