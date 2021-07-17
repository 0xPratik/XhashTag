import {Box,Heading,Text,Image} from "@chakra-ui/react"

export default function Section() {
    return (
        <Box d="flex" alignItems="center" justifyContent="flex-end" w="100%" h="30rem" bgImage="url('/back.png')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
            <Box mr={{base:"1rem",md:"4rem",lg:"10rem"}} color="white">
            <Image src="/usecases.png" alt="UseCases" w={{base:"20rem",md:"30rem",lg:"40rem"}} mb={5} />
            <Text textTransform="uppercase" fontFamily="gotham" mb={2} fontStyle="italic">exchange $xtag for #hashtags</Text>
            <Text textTransform="uppercase" fontFamily="gotham" mb={2} fontStyle="italic">$xtag is locked when #hashtags are minted  </Text>
            <Text textTransform="uppercase" fontFamily="gotham"mb={2} fontStyle="italic">exchange fees</Text>
            <Text textTransform="uppercase" fontFamily="gotham" mb={2} fontStyle="italic">Governance</Text>

            </Box>
        </Box>
    )
}
