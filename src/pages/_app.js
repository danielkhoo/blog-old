import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
