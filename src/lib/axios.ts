import Axios, { AxiosResponse } from 'axios'

import { getColor } from '@/utils/color'
import * as types from '@/types'
import * as constants from '@/constants'

export const axios = Axios.create()

axios.interceptors.response.use(
  (response: AxiosResponse<types.api.Response['data']>) => {
    const data = response.data.lighthouseResult.audits
    // set colors
    constants.lighthouseKeys.forEach((x) => {
      let targetScore = 0
      targetScore = data[x].numericValue / 1000
      if (x === 'cumulative-layout-shift') {
        targetScore = data[x].numericValue
      }
      response.data.lighthouseResult.audits[x].color = getColor(x, targetScore)
    })

    // setTotalScore
    const fcpScore = data['first-contentful-paint'].score * 100 * 0.1
    const interactiveScore = data['interactive'].score * 100 * 0.1
    const siScore = data['speed-index'].score * 100 * 0.1
    const tbtScore = data['total-blocking-time'].score * 100 * 0.3
    const lcpScore = data['largest-contentful-paint'].score * 100 * 0.25
    const clsScore = data['cumulative-layout-shift'].score * 100 * 0.15
    const totalScore = Math.round(
      fcpScore + interactiveScore + siScore + tbtScore + lcpScore + clsScore
    )
    response.data.totalScore = totalScore
    response.data.totalScoreColor = getColor('total', totalScore)

    return response
  }
)
