import { Box,Text } from "@chakra-ui/react"
export default function Footer() {
    return (
        <Box w="100%" h="10rem" bg="black" d="flex" alignItems="center" justifyContent="center">
            <Text fontSize="2xl" fontFamily="gotham"  textTransform="uppercase" color="white">copyright , 2021 , x-hashtag</Text>
        </Box>
    )
}
