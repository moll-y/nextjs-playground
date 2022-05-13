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
} from '@chakra-ui/icons'
import { motion } from 'framer-motion'

function Navbar(props: any) {
  const { toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.900')
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      h={{ base: '50px' }}
      pos="absolute"
      zIndex={20}
      left={0}
      right={0}
      bottom={0}
      bg={bg}
      {...props}
    >
      <HStack justify="space-between" display={{ base: 'flex', md: 'none' }}>
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
