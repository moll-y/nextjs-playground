import type { NextPage } from 'next'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Slide,
  useDisclosure,
} from '@chakra-ui/react'
import { motion, useMotionValue, useAnimation } from 'framer-motion'
import Footer from 'components/footer'
import Sidebar from 'components/sidebar'

const Menu = ({ constraintsRef }) => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
  const [isMobile, setIsMobile] = useState(true)
  const [isEnabled, setIsEnabled] = useState(true)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const variants = {
    center: { x: 0 },
    right: { x: '90%' },
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      return
    }

    // Handler to call on window resize
    function handleResize() {
      // md breakpoint chakra ui default value: 46 rem
      const mdBreakpoint = 768
      // Set window width to state
      setIsMobile(window.innerWidth < mdBreakpoint)

      if (window.innerWidth > mdBreakpoint) {
        controls.start('center')
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Box maxH="100vh" w="90%" bg="black" position="sticky" top="0"></Box>

      <Box
        w={'100%'}
        pos={['absolute', null, 'relative']}
        zIndex={10}
        as={motion.div}
        style={{ x }}
        drag={'x'}
        drag={isMobile && isEnabled ? 'x' : false}
        initial={'center'}
        animate={controls}
        variants={variants}
        dragMomentum={false}
        dragElastic={false}
        onDragStart={(event, info) => {
          console.log('start: ', info)
        }}
        onDragEnd={(event, info) => {
          const mid = constraintsRef.current.clientWidth / 2
          setIsEnabled(false)
          if (x.get() < mid) {
            controls.start('center').then(() => setIsEnabled(true))
            onOpen()
          } else {
            controls.start('right').then(() => setIsEnabled(true))
            onClose()
          }
        }}
      >
        <Box
          disabled={!isEnabled}
          h="100%"
          w="100%"
          bg="white"
          border="1px"
          bg="red"
        >
          {isMobile && (
            <Button
              onClick={() => {
                console.log('here')
                setIsEnabled(false)
                if (isOpen) {
                  controls.stop()
                  controls.start('right').then(() => setIsEnabled(true))
                  onClose()
                } else {
                  controls.start('center').then(() => setIsEnabled(true))
                  onOpen()
                }
              }}
            >
              {isOpen ? 'open' : 'close'} <br />
              {isEnabled ? 'enabled' : 'disabled'}
            </Button>
          )}
          <Box h="500px" w="100%" border="2px" borderColor="red" />
          <Box h="500px" w="100%" border="2px" borderColor="red" />
        </Box>
      </Box>
    </>
  )
}

export default Menu
