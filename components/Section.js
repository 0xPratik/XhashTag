import {Box,Heading,Text,Image} from "@chakra-ui/react"

export default function Section() {
    return (
        <Box d="flex" alignItems="center" justifyContent="flex-end" w="100%" h="20rem" bgImage="url('/back.png')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
            <Box mr={{base:"1rem",md:"2rem",lg:"5rem"}} color="white">
            <Image src="/usecases.png" alt="UseCases" w="25rem" />
            <Text textTransform="uppercase" fontFamily="gotham">trade nfts against $xtag in the marketplace.</Text>
            <Text textTransform="uppercase" fontFamily="gotham">$1 worth of $xtag to create nft</Text>
            <Text textTransform="uppercase" fontFamily="gotham">$5 worth of $xtag to claim #hashtag</Text>
            <Text textTransform="uppercase" fontFamily="gotham">dpos governance using $xtag</Text>
            <Text textTransform="uppercase" fontFamily="gotham">$0.10 worth of $xtag for every marketplace order</Text>
            <Text textTransform="uppercase" fontFamily="gotham">5000 $xtag staked = no tx fee on marketplace</Text>
            </Box>
        </Box>
    )
}
