import { AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
