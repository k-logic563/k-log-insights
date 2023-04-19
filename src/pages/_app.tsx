import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { MainLayout } from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        <Head>
          <title>k-log-insights</title>
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </MantineProvider>
  )
}

export default MyApp
