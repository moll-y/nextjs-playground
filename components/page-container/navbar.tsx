import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

function Navbar(props: any) {
  const { animate, variants } = props
  return (
    <Box
      as={motion.div}
      display={{ base: 'block', md: 'none' }}
      zIndex="20"
      h="50px"
      bg="blue"
      pos="absolute"
      left="0"
      right="0"
      bottom="0"
      variants={variants}
      initial="init"
      animate={animate}
    ></Box>
  )
}

export default Navbar
