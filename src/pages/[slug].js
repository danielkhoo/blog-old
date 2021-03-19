import { getPostBySlug, getAllPosts } from '../lib/api';
import {
  Link,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import markdownToHtml from '../lib/markdownToHtml';
import { parseISO, format } from 'date-fns';
import Navigation from '../components/Navigation';
import { Container } from '../components/Container';

export default function Post({ post }) {
  return (
    <Container>
      <Navigation selected='/blog' />
      <Flex marginX="24px" flexDirection="column">
        <Box marginY="24px">
          <h3><DateFormatter dateString={post.date} /></h3>
          <h1>{post.title}</h1>
        </Box>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Flex>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMM yyyy')}</time>;
}
