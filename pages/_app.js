import '../styles/global.css'
import { ChakraProvider,extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts:{
    gotham:"GothamBold",
    monumentRegular:"MonumentExtended-Regular",
    monumentUltraBold:"MonumentExtended-UltraBold"
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp