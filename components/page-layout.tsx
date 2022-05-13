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

import Sidebar from 'components/sidebar'
import Navbar from 'components/navbar'

import Transition from 'components/transition'
import Scrollable from 'components/scrollable'
import Viewport from 'components/viewport'
import WindowControls from 'components/window-controls'
import Window from 'components/window'

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 200,
}

const mainVariants = {
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

function PageLayout(props: any) {
  const { children } = props
  const isMobile = useBreakpointValue({ base: true, md: false })
  const controls = useAnimation()
  const router = useRouter()

  const {
    isOpen: isOpenLeftMenu,
    onClose: onCloseLeftMenu,
    onToggle: onToggleLeftMenu,
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
    onClose: onCloseRightMenu,
    onToggle: onToggleRightMenu,
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
      onCloseLeftMenu()
    }

    if (isOpenRightMenu) {
      onCloseRightMenu()
    }
  }

  const handleMenuItemClick = (href: string) => {
    onCloseLeftMenu()

    if (router.pathname === href) {
      return
    }

    if (isMobile) {
      controls.start('center').then(() => router.push(href))
    } else {
      router.push(href)
    }
  }

  useEffect(() => {
    if (isMobile) {
      return
    }

    onCloseRightMenu()
    onCloseLeftMenu()
  }, [isMobile, onCloseLeftMenu, onCloseRightMenu])

  return (
    <Viewport>
      <Window
        variant="sticky"
        left={0}
        order={1}
        animate={controls}
        variants={leftMenuVariants}
      >
        <Sidebar onMenuItemClick={handleMenuItemClick} />
      </Window>

      <Window
        variant="sticky"
        right={0}
        order={3}
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
      >
        <WindowControls
          onToggleLeftMenu={onToggleLeftMenu}
          onToggleRightMenu={onToggleRightMenu}
        />

        <Transition>
          <Scrollable onTapStart={handleCloseMenu} onClick={handleCloseMenu}>
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
          </Scrollable>
        </Transition>
      </Window>

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
    </Viewport>
  )
}

export default PageLayout
