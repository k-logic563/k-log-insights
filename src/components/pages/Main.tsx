import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios'

import Form from '@/components/organisms/applications/Form'
import Result from '@/components/organisms/applications/Result'
import Progress from '@/components/organisms/Progress'

import * as types from '@/types'

type Props = types.api.Response | types.api.ErrorResponse

const Main: React.FC = () => {
  const [progressRate, setProgressRate] = useState(0)
  const [loading, setLoading] = useState(false)
  const [urls, setUrls] = useState<string[]>([])
  const [results, setResult] = useState<Props[]>([])
  const { handleSubmit } = useFormContext<types.form.FormValues>()

  const progressPromise = (promises: Promise<AxiosResponse<Props>>[]) => {
    const len = promises.length
    let progress = 0

    function tick(promise: Promise<AxiosResponse<Props>>) {
      promise.then(() => {
        progress++
        setProgressRate(Math.round((progress / len) * 100))
      })
      return promise
    }

    return Promise.allSettled(promises.map(tick))
  }

  const onSubmit = async (data: types.form.FormValues) => {
    // 初期化処理
    results.length = 0
    setProgressRate(0)
    setLoading(true)
    setUrls(data.items.map((x) => x.url))

    // apiコール処理を配列に格納
    const promises = data.items.map((x) => {
      return axios.get<Props>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/insight?url=${x.url}&strategy=${data.strategy}`
      )
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
    setLoading(false)
  }

  return !loading ? (
    <>
      <div className="py-5 bg-white">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form />
          </form>
        </div>
      </div>
      {results.length !== 0 && (
        <div className="container py-5" data-cy="result">
          <Result urls={urls} results={results} />
        </div>
      )}
    </>
  ) : (
    <div className="container">
      <Progress now={progressRate} />
    </div>
  )
}

export default Main
