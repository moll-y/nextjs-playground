import { Box, HStack, Center, Flex, Stack, Spacer } from '@chakra-ui/react'
import { HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'

function AsideMenuNavbar(props: any) {
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

export default AsideMenuNavbar
