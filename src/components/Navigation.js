import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/react'

export default function Navigation({ selected }) {
  return <Flex width="100%" height="64px" flexDirection="row" justify="start" alignItems="center" px="2rem" >
    <Link href="/">
      <Flex height="100%" justifyContent="center" alignItems="center" mr="3rem" fontWeight="500">
        <Box textColor={`${selected === '/' ? 'primary' : 'lightgray'}`} _hover={{ textColor: 'primary', cursor: 'pointer' }}>
          About</Box>
      </Flex>
    </Link>
    <Link href="/blog">
      <Flex height="100%" justifyContent="center" alignItems="center" mr="3rem" fontWeight="500">
        <Box textColor={`${selected === '/blog' ? 'primary' : 'lightgray'}`} _hover={{ textColor: 'primary', cursor: 'pointer' }}>
          Blog</Box>
      </Flex>
    </Link>

    <Link href="/projects">
      <Flex height="100%" justifyContent="center" alignItems="center" mr="3rem" fontWeight="500">
        <Box textColor={`${selected === '/projects' ? 'primary' : 'lightgray'}`} _hover={{ textColor: 'primary', cursor: 'pointer' }}>
          Projects</Box>
      </Flex>
    </Link>
  </Flex>
}