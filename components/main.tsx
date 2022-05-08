import Link from 'next/link'
import {
  Box,
  Button,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, useAnimation, useDragControls } from 'framer-motion'

import React, { useEffect } from 'react'

import PageContainer from './page-container/page-container'

interface MainProps {
  children?: React.ReactNode
}

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})

const Main = (props: MainProps) => {
  const { children } = props
  /*
  const controls = useAnimation()
  const { onToggle: onToggleLeftMenu, onOpen } = useDisclosure({
    defaultIsOpen: true,
    onOpen: () => {
      controls.start('open')
    },
    onClose: () => {
      controls.start('right')
    },
  })
  const { onToggle: onToggleRightMenu } = useDisclosure({
    defaultIsOpen: true,
    onOpen: () => {
      controls.start('open')
    },
    onClose: () => {
      controls.start('left')
    },
  })

  const variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 180,
      },
    },
    left: {
      x: '-90%',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 180,
      },
    },
    right: {
      x: '90%',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 180,
      },
    },
    init: {
      x: 0,
    },
  }

  const variants2 = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 180,
      },
    },
    right: {
      x: '90%',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 180,
      },
    },
    init: {
      x: 0,
    },
  }
  useEffect(() => {
    window.addEventListener('resize', onOpen)
    return () => window.removeEventListener('resize', onOpen)
  }, [onOpen])

  const startDrag = (event) => {
    dragControls.start(event, { snapToCursor: true })
  }

  return (
    <>
      <Box
        as={motion.div}
        w="100%"
        minH="100vh"
        bg="green"
        pos={{ base: 'absolute', md: 'static' }}
        zIndex="5"
        initial="open"
        variants={variants2}
        animate={controls}
      ></Box>

      <Box
        as={motion.div}
        p="50px"
        maxH="100vh"
        minH="100vh"
        w="100%"
        order={{ base: '3' }}
        bg="yellow"
        top="0"
        pos={{ base: 'absolute', md: 'static' }}
        variants={variants}
        animate={controls}
        zIndex="10"
        initial="init"
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

      <Box
        w="100%"
        minH="100vh"
        bg="red"
        order={{ base: '2' }}
        position={{ base: 'absolute', md: 'sticky' }}
      >
        <ul>
          <li>
            <Link href="/" passHref>
              <MyButton onClick={onOpen} />
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <MyButton onClick={onOpen} />
            </Link>
          </li>
        </ul>
      </Box>
    </>
  )
  */

  return <PageContainer>{children}</PageContainer>
}

export default Main
