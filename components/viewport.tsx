import { Box, useColorMode } from '@chakra-ui/react'
import useMobileViewportHeight from 'hooks/use-mobile-viewport-height'

function Viewport(props) {
  const { children } = props
  const mvh = useMobileViewportHeight()
  const { colorMode } = useColorMode()
  return (
    <Box
      mx="auto"
      pos="relative"
      maxW={{ base: '100vw', md: '48em', lg: '62em', xl: '80em' }}
      minH={{ base: 'initial', md: '100vh' }}
      h={{ base: mvh(100), md: 'initial' }}
      overflow={{ base: 'hidden', md: 'visible' }}
      pt="50px"
      bg={{
        base: colorMode === 'dark' ? 'gray.800' : 'gray.300',
        md: colorMode === 'dark' ? 'gray.800' : 'white',
      }}
    >
      {children}
    </Box>
  )
}

export default Viewport
