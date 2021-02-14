import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MyTheme } from '../lib/theme';
import '../styles/globals.css';


export async function getStaticPaths() {
  return {
    fallback: true,
    paths: []
  }
}

function MyApp({ Component, pageProps }): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <ThemeProvider>
      <MyTheme />
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
        {/* {} */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>)
}

export default MyApp;
