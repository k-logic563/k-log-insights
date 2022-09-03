import type { AppProps } from 'next/app'
import Head from 'next/head'

import { MainLayout } from '@/components/Layout'

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <title>k-log-insights</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
