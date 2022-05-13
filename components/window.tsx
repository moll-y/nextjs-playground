import { Box, useStyleConfig } from '@chakra-ui/react'
import { motion } from 'framer-motion'

function Window(props) {
  const { children, variant, ...rest } = props
  const styles = useStyleConfig('Window', { variant })
  return (
    <Box as={motion.div} sx={styles} {...rest}>
      {children}
    </Box>
  )
}

export default Window
