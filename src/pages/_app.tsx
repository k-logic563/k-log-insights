import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '@/layout/default'

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>k-log-insights</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
