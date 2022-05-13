import PageLayout from 'components/page-layout'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Box h="200px" w="100%" bg="red">
        A
      </Box>
      <Box h="200px" w="100%" bg="red">
        B
      </Box>
      <Box h="200px" w="100%" bg="red">
        C
      </Box>
      <Box h="200px" w="100%" bg="red">
        D
      </Box>
    </PageLayout>
  )
}

export default Home
