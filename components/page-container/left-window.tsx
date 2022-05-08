import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, useAnimation, useDragControls } from 'framer-motion'

import React, { useEffect } from 'react'
import MainWindow from './main-window'
import RightWindow from './right-window'

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})

const LeftWindow = (props: any) => {
  const { controls } = props
  const router = useRouter()
  const { onOpen } = useDisclosure({
    onOpen: () => {
      controls.start('center')
    },
  })
  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    router.prefetch('/about')
    router.prefetch('/')
  }, [])

  return (
    <Box
      w="100%"
      minH="100vh"
      bg="red"
      order="1"
      position={{ base: 'absolute', md: 'sticky' }}
    >
      <ul>
        <li>
          <MyButton
            onClick={() => {
              if (isMobile) {
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
                controls.start('center').then(() => router.push('/about'))
              } else {
                router.push('/about')
              }
            }}
          />
        </li>
      </ul>
    </Box>
  )
}
export default LeftWindow
