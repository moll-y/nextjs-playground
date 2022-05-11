import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  components: {
    CustomBadge: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'green' : 'blue',
      }),
    },
  },
})

export default theme
