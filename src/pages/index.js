import {
  Link,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import { Container } from '../components/Container'
import Navigation from '../components/Navigation'

const Index = (props) => (
  <Container>
    <Navigation selected='/' />

    <Flex marginX="24px" mt={[24, 36]} alignItems="center" justifyItems="center" flexDirection={["column-reverse", "row"]}>

      <Text flex="3" fontSize="20px" lineHeight="36px">Hello there, I’m Daniel.
      Welcome to my online home for ideas, writing and side projects
            <br /><br /><em>“Art is never finished, only abandoned.” <br />Leonardo Da Vinci</em>
      </Text>
      <Box flex="2" ml={8} mb={[16, 0]}>
        <img src="/profilepic.jpg" alt="daniel" style={{ width: 220, height: 220, borderRadius: 110 }} />
      </Box>
    </Flex>

  </Container>
)

export default Index
