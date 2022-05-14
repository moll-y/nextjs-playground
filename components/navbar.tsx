import {
  Box,
  HStack,
  Center,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SunIcon,
  LinkIcon,
  SettingsIcon,
  SearchIcon,
  AtSignIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons'
import { motion } from 'framer-motion'

function Navbar(props: any) {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Box
      h={{ base: '50px' }}
      w={{ base: '100vw', md: '48em', lg: '62em', xl: '80em' }}
      pos={{ base: 'absolute', md: 'fixed' }}
      zIndex={20}
      left={{ base: 0, md: 'initial' }}
      right={{ base: 0, md: 'initial' }}
      bottom={{ base: 0, md: 'initial' }}
      top={{ base: 'initial', md: 0 }}
      bg={{
        base: colorMode === 'dark' ? 'gray.900' : 'white',
        md: colorMode === 'dark' ? 'gray.800' : 'white',
      }}
      {...props}
    >
      <HStack
        justify="space-between"
        w="100%"
        h="100%"
        display={{ base: 'flex' }}
      >
        <Center w="50px" h="50px" onClick={toggleColorMode}>
          <ArrowBackIcon />
        </Center>
        <Center w="50px" h="50px" onClick={toggleColorMode}>
          <SunIcon />
        </Center>
        <Center w="50px" h="50px">
          <SearchIcon />
        </Center>
        <Center w="50px" h="50px">
          <AtSignIcon />
        </Center>
      </HStack>
    </Box>
  )
}

export default Navbar
