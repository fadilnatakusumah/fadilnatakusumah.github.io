import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { MyTheme } from '../lib/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }): JSX.Element {
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