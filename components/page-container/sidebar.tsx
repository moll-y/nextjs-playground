import { useRouter } from 'next/router'
import { Box, Button } from '@chakra-ui/react'

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
        <Button
          as={motion.button}
          onViewportEnter={() => router.prefetch(href)}
          onClick={() => onMenuItemClick(href)}
          key={label}
        >
          {label}
        </Button>
      ))}
    </Box>
  )
}
export default Sidebar
