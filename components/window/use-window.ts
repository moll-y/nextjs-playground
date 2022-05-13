import { useDisclosure, useBreakpointValue } from '@chakra-ui/react'
import { useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'

function useWindow() {
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

  return {
    controls,
    isOpenLeftMenu,
    onCloseLeftMenu,
    onToggleLeftMenu,
    isOpenRightMenu,
    onCloseRightMenu,
    onToggleRightMenu,
    handleCloseMenu,
    handleMenuItemClick,
  }
}

export default useWindow
