import { Box, HStack, Center } from '@chakra-ui/react'
import { SunIcon, HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'

function WindowControls(props: any) {
  const { onToggleLeftMenu, onToggleRightMenu } = props

  return (
    <HStack justify="space-between" display={{ base: 'flex', md: 'none' }}>
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
