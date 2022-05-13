import { Box, HStack, Center, useColorMode } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

function Navbar(props: any) {
  const { animate, variants } = props
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      as={motion.div}
      display={{ base: 'block', md: 'none' }}
      h={{ base: '50px', md: 0 }}
      zIndex="20"
      pos="absolute"
      left="0"
      right="0"
      bottom="0"
      initial="init"
      variants={variants}
      animate={animate}
      bg="green"
    >
      <HStack justify="space-between" display={{ base: 'flex', md: 'none' }}>
        <Center w="50px" h="50px" onClick={toggleColorMode}>
          <SunIcon />
        </Center>
      </HStack>
    </Box>
  )
}

export default Navbar
