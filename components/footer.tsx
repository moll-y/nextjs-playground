import { Button, Box, useColorMode } from '@chakra-ui/react'

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box width="100%" border="1px" borderColor="green">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default Footer
