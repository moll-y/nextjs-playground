import Link from 'next/link'
import {
  Box,
  Button,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, useAnimation, useDragControls } from 'framer-motion'

import React, { useEffect } from 'react'

interface MainProps {
  controls: any
  children?: React.ReactNode
}

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 180,
}

const variants = {
  init: {
    x: 0,
  },
  center: {
    x: 0,
    transition,
    filter: 'brightness(100%)',
  },
  right: {
    x: '90%',
    transition,
    filter: 'brightness(50%)',
  },
  left: {
    x: '-90%',
    transition,
    filter: 'brightness(50%)',
  },
}

const MainWindow = (props: MainProps) => {
  const { children, controls } = props
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

  const handleClick = () => {
    if (isOpenLeftMenu || isOpenRightMenu) {
      controls.start('center')
      onCloseRightMenu()
      onCloseLeftMenu()
    }
  }

  useEffect(() => {
    function handleResize() {
      onCloseLeftMenu()
      onCloseRightMenu()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [onCloseLeftMenu, onCloseRightMenu])

  return (
    <Box
      as={motion.div}
      maxH="100vh"
      minH="100vh"
      w="100%"
      p="50px"
      bg="yellow"
      order="2"
      pos={{ base: 'absolute', md: 'static' }}
      zIndex="10"
      top="0"
      variants={variants}
      animate={controls}
      initial="init"
      onClick={handleClick}
    >
      <Button
        pos="absolute"
        top="0"
        left="0"
        display={{ base: 'block', md: 'none' }}
        onClick={onToggleLeftMenu}
      >
        O
      </Button>
      <Button
        pos="absolute"
        top="0"
        right="0"
        display={{ base: 'block', md: 'none' }}
        onClick={onToggleRightMenu}
      >
        A
      </Button>

      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {children}
      </motion.div>
    </Box>
  )
}

export default MainWindow
