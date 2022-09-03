import axios, { AxiosResponse, AxiosError } from 'axios'

import { getColor } from '@/utils/color'
import * as types from '@/types'
import * as constants from '@/constants'

axios.interceptors.response.use(
  (response: AxiosResponse<types.api.SuccessResponse['data']>) => {
    const data = response.data.lighthouseResult.audits
    // set colors
    constants.LIGHTHOUSE_KEYS.forEach((x) => {
      let targetScore = 0
      targetScore = data[x].numericValue / 1000
      if (x === 'cumulative-layout-shift') {
        targetScore = data[x].numericValue
      }
      response.data.lighthouseResult.audits[x].color = getColor(x, targetScore)
    })

    // setTotalScore
    const fcpScore =
      data['first-contentful-paint'].score *
      100 *
      constants.SCORE_WEIGHT.firstContentfulPaint
    const interactiveScore =
      data['interactive'].score * 100 * constants.SCORE_WEIGHT.interactive
    const siScore =
      data['speed-index'].score * 100 * constants.SCORE_WEIGHT.speedIndex
    const tbtScore =
      data['total-blocking-time'].score *
      100 *
      constants.SCORE_WEIGHT.totalBlockingTime
    const lcpScore =
      data['largest-contentful-paint'].score *
      100 *
      constants.SCORE_WEIGHT.largestContentfulPaint
    const clsScore =
      data['cumulative-layout-shift'].score *
      100 *
      constants.SCORE_WEIGHT.cumulativeLauoutShift
    const totalScore = Math.round(
      fcpScore + interactiveScore + siScore + tbtScore + lcpScore + clsScore
    )
    response.data.totalScore = totalScore
    response.data.totalScoreColor = getColor('total', totalScore)

    return response
  }
)

export { axios, AxiosError }
