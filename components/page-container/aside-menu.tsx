import { Box, useStyleConfig } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface AsideMenuProps {
  animate: any
  variants: any
  children?: any
  right?: number
  left?: number
  order?: number
  w?: string
}

function AsideMenu(props: AsideMenuProps) {
  const { animate, variants, right, left, order, w, children } = props
  const styles = useStyleConfig('CustomBadge')
  return (
    <Box
      as={motion.div}
      variant={'CustomBadge'}
      maxH={{ base: 'initial', md: '100vh' }}
      minH={{ base: '100%', md: 'initial' }}
      // w base and mx base are related
      w={{ base: 'calc(90% - 10px)', md: w ?? '30%' }}
      mx={{ base: '5px', md: 0 }}
      mt={{ base: '5px', md: 0 }}
      borderTopRadius={{ base: 'lg', md: 0 }}
      pos={{ base: 'absolute', md: 'sticky' }}
      top={0}
      right={right}
      left={left}
      order={order}
      animate={animate}
      variants={variants}
      bg="gray"
      initial="init"
    >
      {children}
    </Box>
  )
}

export default AsideMenu
