import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosError } from 'axios'

import { http } from '@/utils/apiUtils'
import * as types from '@/types'

const key = process.env.PAGESPEED_INSIGHT_KEY

type Props = types.api.Response | types.api.ErrorResponse

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await http.get<Props>(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${req.query.url}&strategy=${req.query.strategy}&key=${key}`,
      {
        headers: {
          Referer: `${req.headers.referer}`,
        },
      }
    )
    return res.status(200).json(data.data)
  } catch (e) {
    if (e instanceof AxiosError) {
      return res.status(500).json(e.response?.data)
    }
  }
}

export default getData
