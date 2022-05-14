import PageLayout from 'components/page-layout'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Box h="200px" w="100%" border="1px">
        A
      </Box>
      <Box h="200px" w="100%" border="1px">
        B
      </Box>
      <Box h="200px" w="100%" border="1px">
        C
      </Box>
      <Box h="200px" w="100%" border="1px">
        D
      </Box>
    </PageLayout>
  )
}

export default Home
