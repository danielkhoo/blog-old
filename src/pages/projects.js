import Navigation from '../components/Navigation'
import {
  Link,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import { Container } from '../components/Container'
export default function Projects(props) {
  return (
    <Container>
      <Navigation selected='/projects' />
      <Flex marginX="24px" marginY={16} alignItems="center">

        <div>
          <ProjectItem
            type="npm"
            title={'nric'}
            url={'https://www.npmjs.com/package/nric'}
            tags='#javascript'
          >
            <img src="https://img.shields.io/npm/dw/nric?label=npm%20downloads&style=flat-square" />
            An npm library for generating and validating Singapore NRIC numbers

          </ProjectItem>

          <ProjectItem
            type="web"
            title={'Graduate Employment Visualisation'}
            url={'https://danielkhoo.github.io/ges'}
            tags='#react'
          >
            A visualisation of employmenet and salary data by school and degree from GES 2018

          </ProjectItem>

          <ProjectItem
            type="mobile"
            title={'TRUN'}
            url={'https://www.youtube.com/watch?v=ZVCYgMpj1ks'}
            tags='#android'
          >

            A TRON-inspired GPS-based Multiplayer Android Game. Like Snake but players have to run for real
          </ProjectItem>
        </div>
      </Flex>
    </Container>
  )
}

const ProjectItem = ({ type, title, tags, url, children }) => {
  return <Flex marginY={8} alignItems="center">
    <Text textColor="gray.500" flex={2}>{type}</Text>
    <Box flex={2} flex={10} ml={4}>
      <Flex alignItems="center">
        <Link href={url} fontSize="20px" _hover={{ textColor: "primary" }} _focus={{ textColor: "primary" }} >{title}</Link>
        <Text textColor="gray.500" ml={4} fontSize="16px" my={0}>{tags}</Text>
      </Flex>
      <Text my="8px">
        {children}
      </Text>
    </Box>
  </Flex>
}
