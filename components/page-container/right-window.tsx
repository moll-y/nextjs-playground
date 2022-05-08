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
  },
  right: {
    x: '90%',
    transition,
  },
}

const RightWindow = (props: MainProps) => {
  const { children, controls } = props

  return (
    <Box
      as={motion.div}
      minH="100vh"
      w="100%"
      bg="green"
      order="3"
      pos={{ base: 'absolute', md: 'static' }}
      zIndex="5"
      initial="center"
      variants={variants}
      animate={controls}
    >
      {children}
    </Box>
  )
}

export default RightWindow
