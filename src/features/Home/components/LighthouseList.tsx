import React from 'react'

import { LIGHTHOUSE_ITEMS } from '@/constants'

import * as types from '@/types'
import * as styles from '@/styles'

type Props = {
  lighthouseResult: types.api.SuccessResponse['data']['lighthouseResult']
}

export const LighthouseList: React.FC<Props> = ({ lighthouseResult }) => {
  return (
    <ul className="row row-cols-2 row-cols-md-3 list-unstyled">
      {LIGHTHOUSE_ITEMS.map((x, i) => (
        <li key={i}>
          <h3
            css={styles.content.listTitle(
              lighthouseResult.audits[x.prop].color
            )}
          >
            {x.title}
          </h3>
          <p
            css={styles.content.listDesc(lighthouseResult.audits[x.prop].color)}
          >
            {lighthouseResult.audits[x.prop].displayValue}
          </p>
        </li>
      ))}
    </ul>
  )
}
