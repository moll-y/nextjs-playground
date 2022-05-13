import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

function Transition(props) {
  const { children } = props
  return (
    <Box
      as={motion.div}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      h="100%"
      w="100%"
    >
      {children}
    </Box>
  )
}

export default Transition
