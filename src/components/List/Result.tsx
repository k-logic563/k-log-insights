import React from 'react'

import LighthouseList from './LighthouseList'
import ImproveList from './ImproveList'

import * as types from '@/types'
import * as styles from '@/styles'

type Props = {
  results: (types.api.Response | types.api.ErrorResponse)[]
  urls: string[]
}

export const Result: React.FC<Props> = ({ results, urls }) => (
  <div className="d-flex align-items-start gap-5">
    <nav css={styles.form.navWrap} className="sticky-top">
      <ul className="list-group">
        {urls.map((x, i) => (
          <li className="list-group-item" key={i}>
            <a className="d-block" href={`#res-${i}`}>
              {x}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div css={styles.form.contentWrap} className="py-5 px-4 bg-white rounded-3">
      <div className="d-grid gap-5">
        {results.map((x, i) =>
          x.status === 200 ? (
            <div key={x.data.id} id={`res-${i}`}>
              <section>
                <h2 className="pb-2 mb-5 border-bottom border-2">{urls[i]}</h2>
                <div css={styles.form.score(x.data.totalScoreColor)}>
                  {x.data.totalScore}
                </div>
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
              <p className="text-center text-danger fw-bold text-2xl">
                {x.data.error.message}
              </p>
            </section>
          )
        )}
      </div>
    </div>
  </div>
)
