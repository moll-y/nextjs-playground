import { useRouter } from 'next/router'
import { Box, Center } from '@chakra-ui/react'

import { motion } from 'framer-motion'

export const mainLinks = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/',
    label: 'Home',
  },
]

function Sidebar(props: any) {
  const { onMenuItemClick } = props
  const router = useRouter()

  return (
    <Box>
      {mainLinks.map(({ href, label }) => (
        <Center
          as={motion.button}
          onViewportEnter={() => {
            console.log('prefetching: ', label)
            router.prefetch(href)
          }}
          onClick={() => onMenuItemClick(href)}
          key={label}
        >
          {label}
        </Center>
      ))}
    </Box>
  )
}
export default Sidebar
