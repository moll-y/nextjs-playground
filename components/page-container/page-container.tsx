import { useEffect } from 'react'

import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Flex,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'

import useMobileViewportHeight from 'hooks/use-mobile-viewport-height'
import AsideMenuNavbar from 'components/page-container/aside-menu-navbar'
import AsideMenu from 'components/page-container/aside-menu'
import Sidebar from 'components/page-container/sidebar'
import Navbar from 'components/page-container/navbar'

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 200,
}

function PageContainer(props: any) {
  const { children } = props
  const isMobile = useBreakpointValue({ base: true, md: false })
  const mvh = useMobileViewportHeight()
  const controls = useAnimation()
  const router = useRouter()

  const {
    isOpen: isOpenLeftMenu,
    onToggle: onToggleLeftMenu,
    onClose: onCloseLeftMenu,
  } = useDisclosure({
    onOpen: () => {
      controls.start('right')
    },
    onClose: () => {
      controls.start('center')
    },
  })
  const {
    isOpen: isOpenRightMenu,
    onToggle: onToggleRightMenu,
    onClose: onCloseRightMenu,
  } = useDisclosure({
    onOpen: () => {
      controls.start('left')
    },
    onClose: () => {
      controls.start('center')
    },
  })

  const handleCloseMenu = () => {
    if (isOpenLeftMenu) {
      controls.start('center')
      onCloseLeftMenu()
    }

    if (isOpenRightMenu) {
      controls.start('center')
      onCloseRightMenu()
    }
  }

  const handleMenuItemClick = (href: string) => {
    if (!isMobile) {
      router.push(href)
    } else {
      onCloseLeftMenu()
      onCloseRightMenu()
      controls.start('center').then(() => router.push(href))
    }
  }

  useEffect(() => {
    if (!isMobile) {
      onCloseRightMenu()
      onCloseLeftMenu()
    }
  }, [isMobile, onCloseLeftMenu, onCloseRightMenu])

  return (
    <Flex
      overflow={{ base: 'hidden', md: 'visible' }}
      maxW={{ base: '100vw', md: '48em', lg: '62em', xl: '80em' }}
      minH={{ base: 'initial', md: '100vh' }}
      h={{ base: mvh(100), md: 'initial' }}
      mx="auto"
      bg="green"
      pos="relative"
    >
      <AsideMenu
        order={1}
        left={0}
        animate={controls}
        variants={{
          init: {
            x: 0,
          },
          center: {
            x: 0,
            transition,
          },
          left: {
            x: '-90%',
            transition,
          },
        }}
      >
        <Sidebar onMenuItemClick={handleMenuItemClick} />
      </AsideMenu>

      <Box
        as={motion.div}
        minH={{ base: 'initial', md: '100vh' }}
        h={{ base: '100%', md: 'initial' }}
        mt={{ base: '5px', md: 0 }}
        pos={{ base: 'absolute', md: 'static' }}
        borderTopRadius={{ base: 'lg', md: 0 }}
        top="0"
        w="100%"
        bg="white"
        order="2"
        zIndex="10"
        variants={{
          init: {
            x: 0,
          },
          center: {
            x: 0,
            transition,
          },
          right: {
            x: '90%',
            transition,
          },
          left: {
            x: '-90%',
            transition,
          },
        }}
        initial="init"
        animate={controls}
      >
        <AsideMenuNavbar
          onToggleLeftMenu={onToggleLeftMenu}
          onToggleRightMenu={onToggleRightMenu}
        />

        <Box
          as={motion.div}
          overflow={{ base: 'scroll', md: 'initial' }}
          h={{ base: '100%', md: 'initial' }}
          px={{ base: '10px' }}
          w="100%"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onTapStart={handleCloseMenu}
          onClick={handleCloseMenu}
        >
          {children}

          <Box border="1px" borderColor="red" h="100px">
            footer
            <br />
            footer
            <br />
            footer
            <br />
            footer
            <br />
          </Box>
        </Box>
      </Box>

      <AsideMenu
        order={3}
        right={0}
        animate={controls}
        variants={{
          init: {
            x: 0,
          },
          center: {
            x: 0,
            transition,
          },
          right: {
            x: '90%',
            transition,
          },
        }}
      >
        hola
      </AsideMenu>

      <Navbar
        animate={controls}
        variants={{
          init: {
            y: '100%',
          },
          right: {
            y: '0',
            transition,
          },
          center: {
            y: '100%',
            transition,
          },
        }}
      />
    </Flex>
  )
}

export default PageContainer
