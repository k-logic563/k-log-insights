import React from 'react'

import { LighthouseList } from './LighthouseList'
import { ImproveList } from './ImproveList'
import { Sidebar } from './Sidebar'
import Score from '@/components/Elements/Score'

import * as types from '@/types'
import * as styles from '@/styles'

type Props = {
  results: types.api.DataResponses[]
  urls: string[]
}

const isSuccessResponse = (
  data: types.api.DataResponses
): data is types.api.SuccessResponse => {
  return data.status === 200
}

export const Result: React.FC<Props> = ({ results, urls }) => {
  return (
    <div css={styles.layout.wrapper}>
      <Sidebar urls={urls} />
      <div className="d-grid gap-5 bg-white rounded border py-4 px-5">
        {results.map((x, i) =>
          isSuccessResponse(x) ? (
            <div key={x.data.id} id={`res-${i}`}>
              <section>
                <h2
                  className="pb-2 mb-5 border-bottom border-2"
                  data-testid={`title-${i}`}
                >
                  {urls[i]}
                </h2>
                <Score
                  score={`${x.data.totalScore}`}
                  color={x.data.totalScoreColor}
                />
                <LighthouseList lighthouseResult={x.data.lighthouseResult} />
              </section>
              <section>
                <h3 className="pb-2 mb-3 border-bottom border-1 fs-4 fw-bold">
                  改善できる項目
                </h3>
                <ImproveList results={x} />
              </section>
            </div>
          ) : (
            <section key={i} id={`res-${i}`}>
              <h2 className="pb-2 mb-5 border-bottom border-2">{urls[i]}</h2>
              <p
                className="text-center text-danger fw-bold text-2xl"
                data-testid={`error-text-${i}`}
              >
                {x.data.error ?? 'エラーが発生しました'}
              </p>
            </section>
          )
        )}
      </div>
    </div>
  )
}
