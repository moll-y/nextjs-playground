import { Flex, useColorModeValue } from '@chakra-ui/react'
import useMobileViewportHeight from 'hooks/use-mobile-viewport-height'

function Viewport(props) {
  const { children } = props
  const mvh = useMobileViewportHeight()
  const bg = useColorModeValue('gray.300', 'gray.800')
  return (
    <Flex
      mx="auto"
      pos="relative"
      maxW={{ base: '100vw', md: '48em', lg: '62em', xl: '80em' }}
      minH={{ base: 'initial', md: '100vh' }}
      h={{ base: mvh(100), md: 'initial' }}
      overflow={{ base: 'hidden', md: 'visible' }}
      bg={bg}
    >
      {children}
    </Flex>
  )
}

export default Viewport
