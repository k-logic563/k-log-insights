import React from 'react'
import { useState, useCallback } from 'react'
import { NextPage } from 'next'

import { Progress } from '@/components/Elements/Progress'
import { Result } from '@/features/Home/components/Result'
import { AppForm } from '@/features/Home/components/AppForm'

import { axios } from '@/lib/axios'
import { useProgress } from '@/hooks/useProgress'
import { wait } from '@/utils/wait'
import { RHF_OPTIONS } from '@/constants'
import * as types from '@/types'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [urls, setUrls] = useState<string[]>([])
  const [results, setResult] = useState<types.api.DataResponses[]>([])
  const { progressRate, setProgressRate, progressPromise } =
    useProgress<types.api.DataResponses>()

  const onSubmit = useCallback(async (data: types.form.FormValues) => {
    // 初期化処理
    results.length = 0
    setProgressRate(0)
    setUrls(data.items.map((x) => x.url))
    setLoading(true)

    // apiコール処理を配列に格納
    const promises = data.items.map((x) => {
      return axios.get('analyze', {
        params: {
          strategy: data.strategy,
          url: x.url,
        },
      })
    })

    // api配列を並列処理させる
    const res = await progressPromise(promises)
    const formatRes = res.map((x) => {
      if (x.status === 'fulfilled') {
        return x.value
      }
      return x.reason.response
    })
    setResult(formatRes)
    // 処理後余裕を持たせて100%表示をさせる
    await wait(1000)
    setLoading(false)
  }, [])

  return (
    <>
      <div className="py-5 bg-white">
        <div className="container">
          <AppForm options={RHF_OPTIONS} onSubmit={onSubmit} />
        </div>
      </div>
      <div className="container">
        {loading ? (
          <Progress now={progressRate} />
        ) : (
          results.length !== 0 && (
            <div className="py-5 px-4">
              <Result urls={urls} results={results} />
            </div>
          )
        )}
      </div>
    </>
  )
}

export default Home
