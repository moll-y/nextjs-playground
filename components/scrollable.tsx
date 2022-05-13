import { Box } from '@chakra-ui/react'

function Scrollable(props) {
  const { children, ...rest } = props
  return (
    <Box
      overflowY={{ base: 'scroll', md: 'initial' }}
      px={{ base: '10px' }}
      h={{ base: '100%', md: 'initial' }}
      w="100%"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Scrollable
