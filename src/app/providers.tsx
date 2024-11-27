'use client'

import { ChakraProvider, extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        bg: '#f8f4f0',
      },
      'section': {
        bg: '#f8f7f5'
      }
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
  )
}