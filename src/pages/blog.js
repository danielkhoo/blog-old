import { Link, Text, Flex, Box } from '@chakra-ui/react';
import { Container } from '../components/Container';
import Navigation from '../components/Navigation';
import { getAllPosts } from '../lib/api';
import { parseISO, format } from 'date-fns';

const Blog = (props) => (
  <Container>
    <Navigation selected="/blog" />
    <Flex marginX="24px" marginY="72px" alignItems="center">
      <Box>
        {props.posts.map((post) => {
          return (
            <BlogItems key={post.title} date={post.date} title={post.title} tags={post.tags || ''} url={post.slug} />
          );
        })}
      </Box>
    </Flex>
  </Container>
);

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'tags']);
  return {
    props: { posts },
  };
}

const BlogItems = ({ date, title, tags, url }) => {
  const displayDate = parseISO(date);
  return (
    <Flex alignItems="center" marginY={4} fontSize="16px" key={title}>
      <Text flex="1" textColor="lightgray">
        <time dateTime={date}>{format(displayDate, 'MMM yyyy')}</time>
      </Text>
      <Box flex="4" marginLeft="16px">
        <Link
          href={`/${url}`}
          fontSize="20px"
          textAlign="left"
          _hover={{ textColor: 'primary' }}
          _focus={{ textColor: 'primary' }}
        >
          {title}
        </Link>
        <Link textColor="lightgray" marginLeft="16px">
          {tags}
        </Link>
      </Box>
    </Flex>
  );
};

export default Blog;
