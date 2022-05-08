import PageContainer from 'components/page-container'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  )
}

export default Home
