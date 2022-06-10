import React, { useState } from 'react'
import { NextPage } from 'next'
import axios from 'axios'

import { InputField } from '@/components/Form'
import { Result } from '@/components/List'
import Progress from '@/components/Elements/Progress/Progress'
import { Form } from '@/components/Form'

import { useProgress } from '@/hooks/useProgress'
import { wait } from '@/utils/wait'
import * as types from '@/types'
import { STRATEGIES, URL_REGEX } from '@/constants'
import { Form as RBForm } from 'react-bootstrap'
import { Button } from '@/components/Elements/Button'

export type Props = types.api.Response | types.api.ErrorResponse

const options = {
  defaultValues: {
    strategy: 'desktop' as const,
    items: [
      {
        url: '',
      },
    ],
  },
  mode: 'onSubmit' as const,
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [urls, setUrls] = useState<string[]>([])
  const [results, setResult] = useState<Props[]>([])
  const { progressRate, setProgressRate, progressPromise } = useProgress()

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
    // 処理後余裕を持たせて100%表示をさせる
    await wait(1000)
    setLoading(false)
  }

  return !loading ? (
    <>
      <div className="py-5 bg-white">
        <div className="container">
          <Form<types.form.FormValues>
            options={options}
            fieldName="items"
            onSubmit={onSubmit}
          >
            {({ register, formState, fields, remove, append }) => (
              <>
                <div className="mb-3">
                  {STRATEGIES.map((x) => (
                    <div className="form-check" key={x.id}>
                      <RBForm.Check
                        {...register('strategy')}
                        type="radio"
                        name="strategy"
                        defaultValue={x.id}
                        id={x.id}
                        label={x.label}
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-5">
                  <div className="row g-3">
                    {fields.map((field, idx) => (
                      <div className="col-4" key={field.id}>
                        <InputField
                          defaultValue={field.url}
                          registration={register(`items.${idx}.url` as const, {
                            required: '※必須項目です',
                            pattern: {
                              value: URL_REGEX,
                              message: '※URLフォーマットを確認してください',
                            },
                          })}
                          handleClickRemove={() => remove(idx)}
                          error={
                            formState.errors.items &&
                            formState.errors.items[idx]?.url
                          }
                          fieldsCount={fields.length}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="outline-primary"
                    text="追加"
                    handleClick={() =>
                      append({
                        url: '',
                      })
                    }
                  />
                  <Button type="submit" variant="primary" text="分析" />
                </div>
              </>
            )}
          </Form>
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

export default Home
