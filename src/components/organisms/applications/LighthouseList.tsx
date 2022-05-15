import React from 'react'

import { lighthouseItems } from '@/constants'

import * as types from '@/types'
import * as styles from '@/styles'

type Props = {
  lighthouseResult: types.api.Response['data']['lighthouseResult']
}

const LighthouseList: React.FC<Props> = ({ lighthouseResult }) => {
  return (
    <ul css={styles.content.list}>
      {lighthouseItems.map((x, i) => (
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

export default LighthouseList