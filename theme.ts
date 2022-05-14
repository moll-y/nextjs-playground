import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  components: {
    Window: {
      baseStyle: {
        top: 0,
        h: { base: '100%', md: 'initial' },
        mt: { base: '5px', md: 0 },
        borderTopRadius: { base: 'lg', md: 0 },
      },
      variants: {
        static: ({ colorMode }) => ({
          w: '100%',
          minH: { base: 'initial', md: '100vh' },
          pos: { base: 'absolute', md: 'static' },
          bg: {
            base: colorMode === 'dark' ? 'gray.700' : 'gray.100',
            md: colorMode === 'dark' ? 'gray.800' : 'white',
          },
        }),
        sticky: ({ colorMode }) => ({
          w: { base: 'calc(90% - 10px)', md: '350px' },
          mx: { base: '5px', md: 0 },
          minH: { base: '100%', md: 'initial' },
          maxH: { base: 'initial', md: '100vh' },
          pos: { base: 'absolute', md: 'sticky' },
          overflowY: { base: 'hidden', md: 'auto' },
          bg: {
            base: colorMode === 'dark' ? 'gray.700' : 'gray.100',
            md: colorMode === 'dark' ? 'gray.800' : 'white',
          },
        }),
      },
    },
  },
})

export default theme
