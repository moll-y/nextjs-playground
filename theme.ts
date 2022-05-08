import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {},
    }),
  },
})

export default theme