import { Box, HStack, Center, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'

function WindowControls(props: any) {
  const { onToggleLeftMenu, onToggleRightMenu } = props
  const bg = useColorModeValue('gray.100', 'gray.700')
  return (
    <HStack
      justify="space-between"
      display={{ base: 'flex', md: 'none' }}
      borderTopRadius={{ base: 'lg', md: 0 }}
      bg={bg}
    >
      <Center w="50px" h="50px" onClick={onToggleLeftMenu}>
        <HamburgerIcon />
      </Center>
      <Center w="50px" h="50px" onClick={onToggleRightMenu}>
        <AttachmentIcon />
      </Center>
    </HStack>
  )
}

export default WindowControls
