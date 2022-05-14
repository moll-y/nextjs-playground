import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Flex,
  Stack,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'

import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'
import Scrollable from 'components/scrollable'
import Transition from 'components/transition'
import Viewport from 'components/viewport'
import WindowControls from 'components/window/window-controls'
import Window from 'components/window/window'

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 200,
}

const mainVariants = {
  init: {
    x: 0,
    filter: 'brightness(1)',
  },
  center: {
    x: 0,
    transition,
    filter: 'brightness(1)',
  },
  right: {
    x: '90%',
    transition,
    filter: 'brightness(0.5)',
  },
  left: {
    x: '-90%',
    transition,
    filter: 'brightness(0.5)',
  },
}

const leftMenuVariants = {
  center: {
    x: 0,
    transition,
  },
  left: {
    x: '-90%',
    transition,
  },
}

const rightMenuVariants = {
  center: {
    x: 0,
    transition,
  },
  right: {
    x: '90%',
    transition,
  },
}

const navbarVariants = {
  none: {
    y: '0',
  },
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
}

function PageLayout(props: any) {
  const { children } = props
  const isMobile = useBreakpointValue({ base: true, md: false })
  const controls = useAnimation()
  const router = useRouter()

  const {
    isOpen: isOpenLeftMenu,
    onClose: closeLeftMenu,
    onToggle: toggleLeftMenu,
  } = useDisclosure({
    onOpen: async () => {
      await controls.start('right')
    },
    onClose: async () => {
      await controls.start('center')
    },
  })
  const {
    isOpen: isOpenRightMenu,
    onClose: closeRightMenu,
    onToggle: toggleRightMenu,
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
      closeLeftMenu()
    }

    if (isOpenRightMenu) {
      closeRightMenu()
    }
  }

  const handleClickMenuItem = async (href: string) => {
    closeLeftMenu()

    if (router.pathname === href) {
      return
    }

    if (isMobile) {
      await controls.start('center').then(() => router.push(href))
    } else {
      router.push(href)
    }
  }

  useEffect(() => {
    if (isMobile) {
      return
    }

    closeRightMenu()
    closeLeftMenu()
  }, [isMobile, closeLeftMenu, closeRightMenu])

  return (
    <Viewport>
      <Navbar
        as={isMobile && motion.div}
        animate={controls}
        variants={navbarVariants}
        initial="init"
        borderTopRadius={{ base: 'lg', md: 0 }}
      />

      <Flex w="100%" h="100%">
        <Window
          variant="sticky"
          left={0}
          order={1}
          animate={controls}
          variants={leftMenuVariants}
          pt="50px"
          w={{ md: '280px' }}
        >
          <Sidebar onClickMenuItem={handleClickMenuItem} />
        </Window>

        <Window
          variant="sticky"
          right={0}
          order={3}
          pt="50px"
          animate={controls}
          variants={rightMenuVariants}
        >
          <Scrollable>
            <Box h="500px" w="100%">
              A
            </Box>
            <Box h="500px" w="100%">
              B
            </Box>
            <Box h="500px" w="100%">
              C
            </Box>
          </Scrollable>
        </Window>

        <Window
          variant="static"
          order={2}
          zIndex={10}
          animate={controls}
          variants={mainVariants}
          initial="init"
        >
          <WindowControls
            onToggleLeftMenu={toggleLeftMenu}
            onToggleRightMenu={toggleRightMenu}
          />

          <Transition>
            <Scrollable
              as={motion.div}
              onTapStart={handleCloseMenu}
              onClick={handleCloseMenu}
            >
              {children}

              <Box border="1px" borderColor="red" h="100px">
                footer
              </Box>
            </Scrollable>
          </Transition>
        </Window>
      </Flex>
    </Viewport>
  )
}

export default PageLayout
