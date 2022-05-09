import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Flex,
  useDisclosure,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react'
import { motion, useAnimation, useDragControls } from 'framer-motion'

import React, { useEffect } from 'react'
import { HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 200,
}

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <Box
      href={href}
      as={motion.div}
      onViewportEnter={() => {
        console.log('yeah')
      }}
    >
      <a onClick={onClick} ref={ref}>
        Click Me
      </a>
    </Box>
  )
})

const PageContainer = (props: any) => {
  const { children } = props
  const isMobile = useBreakpointValue({ base: true, md: false })
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
  const handleClick = () => {
    if (isOpenLeftMenu || isOpenRightMenu) {
      controls.start('center')
      onCloseRightMenu()
      onCloseLeftMenu()
    }
  }

  function setDocHeight() {
    console.log('hola')
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}px`
    )
  }

  // TODO: resize event is triggered in mobile for no reason (?)
  useEffect(() => {
    function handleResize() {
      onCloseLeftMenu()
      onCloseRightMenu()
      setDocHeight()
      console.log('resizing')
    }
    setDocHeight()

    window.addEventListener('resize', handleResize)
    screen.orientation.addEventListener('change', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      screen.orientation.removeEventListener('change', handleResize)
    }
  }, [onCloseLeftMenu, onCloseRightMenu])

  useEffect(() => {
    router.prefetch('/about')
    router.prefetch('/')
  }, [])

  return (
    <>
      <Flex
        maxW={{ base: '100vw', md: '48em', lg: '62em', xl: '80em' }}
        mx="auto"
        bg="green"
        position="relative"
        h={{ base: '100%', md: 'initial' }}
        minH={{ base: 'initial', md: '100vh' }}
        overflow={{ base: 'hidden', md: 'visible' }}
      >
        <Box
          as={motion.div}
          w="calc(90% - 10px)"
          maxH={{ base: 'initial', md: '100vh' }}
          minH={{ base: '100%', md: 'initial' }}
          bg="gray.200"
          borderTopRadius="15px"
          top="0"
          ml="5px"
          order="1"
          position={{ base: 'absolute', md: 'sticky' }}
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
          initial="init"
          animate={controls}
        >
          <ul>
            <li>
              <MyButton
                onClick={() => {
                  if (isMobile) {
                    onCloseLeftMenu()
                    onCloseRightMenu()
                    controls.start('center').then(() => router.push('/'))
                  } else {
                    router.push('/')
                  }
                }}
              />
            </li>
            <li>
              <MyButton
                onClick={() => {
                  if (isMobile) {
                    onCloseLeftMenu()
                    onCloseRightMenu()
                    controls.start('center').then(() => router.push('/about'))
                  } else {
                    router.push('/about')
                  }
                }}
              />
            </li>
          </ul>
        </Box>
        <Box
          as={motion.div}
          minH={{ base: 'initial', md: '100vh' }}
          h={{ base: '100%', md: 'initial' }}
          borderTopRadius="15px"
          w="100%"
          bg="white"
          order="2"
          pos={{ base: 'absolute', md: 'static' }}
          zIndex="10"
          top="0"
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
          animate={controls}
          initial="init"
          onClick={handleClick}
        >
          <Box
            w="100%"
            h="40px"
            position="fixed"
            bg="white"
            borderTopRadius="15px"
            display={{ base: 'block', md: 'none' }}
          >
            <Box
              display={{ base: 'block', md: 'none' }}
              pos="absolute"
              top="0"
              left="0"
              onClick={onToggleLeftMenu}
            >
              <HamburgerIcon />
            </Box>

            <Box
              display={{ base: 'block', md: 'none' }}
              pos="absolute"
              top="0"
              right="0"
              onClick={onToggleRightMenu}
            >
              <AttachmentIcon />
            </Box>
          </Box>

          <Box
            as={motion.div}
            h="100%"
            w="100%"
            p="50px"
            overflow={{ base: 'scroll', md: 'initial' }}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {children}

            <Box>footer</Box>
          </Box>
        </Box>

        <Box
          as={motion.div}
          maxH={{ base: 'initial', md: '100vh' }}
          minH={{ base: '100%', md: 'initial' }}
          w="calc(90% - 10px)"
          mr="5px"
          bg="gray.200"
          order="3"
          borderTopRadius="15px"
          pos={{ base: 'absolute', md: 'sticky' }}
          top="0"
          right="0"
          zIndex="5"
          initial="init"
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
          animate={controls}
        >
          hola
        </Box>

        <Box
          as={motion.div}
          display={{ base: 'block', md: 'none' }}
          zIndex="20"
          h="50px"
          bg="black"
          pos="absolute"
          left="0"
          right="0"
          bottom="0"
          borderTopRadius="md"
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
          initial="init"
          animate={controls}
        ></Box>
      </Flex>
    </>
  )
}

export default PageContainer
