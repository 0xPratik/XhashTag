import {Box,Image,Text,Heading} from "@chakra-ui/react"

export default function Main() {
    return (
        <Box bg="black" w="100vw" py={10}>
            <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-evenly" flexWrap="wrap">
            {/* liquidity */}
            <Box w="50vw" d="flex" pb={3} alignItems="center" justifyContent="center">
            <Image src="/images/dollar_bag.png" alt="Liquidity" width="15rem" />
            </Box>
            <Box mr={8} pb={3} color="white" w="45vw" d="flex" flexDirection="column" justifyContent="center" >
                <Image src="/images/liquidity.png" w="25rem" mb={2} />
                <Text fontFamily="gotham" fontWeight="bold" fontSize="xl">Built in AMM with bonding curve ensures liquidity for #hashtags without any counterparty</Text>
            </Box>
            {/* ############################################### */}
            <Box ml={8} pb={3} color="white" w="45vw" d="flex" alignItems="flex-start" justifyContent="flex-start" flexDir="column">
            <Image src="/images/fee.png" w="10rem" mb={2} />
                <Text fontFamily="gotham" fontWeight="bold" fontSize="xl" >A 1.5% tx fee is charged which is used for LP acquisition and rewards</Text>
            </Box>
            {/* ############################################### */}
            
            <Box w="50vw" d="flex" alignItems="center" justifyContent="center">
            <Image src="/images/onepointfive.png" alt="Liquidity" width={{base:"20rem",md:"13rem"}} />
            </Box>
            <Box m={{base:5}} w="50vw" pb={3} d="flex" alignItems="center" justifyContent="center">
            <Image src="images/airdrop.png" alt="Liquidity" width="15rem" />
            </Box>
            <Box mr={8} color="white" w="45vw">
                <Image src="images/rewards.png" w="25rem" mb={2} />
                <Text fontFamily="gotham" fontWeight="bold" fontSize="xl">#hashtags that trend on Twitter are rewarded with sponsored burn, increasing the price</Text>
            </Box>
            </Box>
        </Box>
    )
}
