import {Box,Image,Text,Heading} from "@chakra-ui/react"

export default function Main() {
    return (
        <Box bg="black" w="100vw" pt={20} pb={20}>
            <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
            <Box w="50vw" d="flex" alignItems="center" justifyContent="center">
            <Image src="/liquidity.png" alt="Liquidity" width="15rem" />
            </Box>
            <Box color="white" w="50vw" d="flex" flexDirection="column" justifyContent="center" >
                <Heading letterSpacing="widest" fontStyle="italic" fontFamily="gotham"  textTransform="uppercase" size="xl" className="liquidity">#liquidity</Heading>
                <Text fontFamily="gotham" fontWeight="bold" fontSize="xl">Built in AMM with bonding curve ensures liquidity for #hashtags without any counterparty</Text>
            </Box>
            <Box p={1} color="white" w="50vw" d="flex" alignItems="flex-start" justifyContent="flex-start" flexDir="column">
                <Heading mr={1} letterSpacing="widest" fontStyle="italic" fontFamily="gotham"  textTransform="uppercase" size="xl" className="liquidity">#multichain</Heading>
                <Text fontFamily="gotham" fontWeight="bold" fontSize="xl" >Transfer your #hashtag to multiple networks supported by Solana Wormhole bridge</Text>
            </Box>
            <Box w="50vw" d="flex" alignItems="center" justifyContent="center">
            <Image src="/link.png" alt="Liquidity" width="15rem" />
            </Box>
            <Box w="50vw" d="flex" alignItems="center" justifyContent="center">
            <Image src="/airdrop.png" alt="Liquidity" width="15rem" />
            </Box>
            <Box color="white" w="50vw">
                <Heading letterSpacing="widest" fontStyle="italic" fontFamily="gotham" textTransform="uppercase" size="xl" className="liquidity">#airdrop</Heading>
                <Text fontFamily="gotham" fontWeight="bold" fontSize="xl">Top trending #hashtags on twitter and tiktok receive rewards on xHASHTAG</Text>
            </Box>
           
            </Box>
        </Box>
    )
}
