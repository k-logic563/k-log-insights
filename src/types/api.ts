import { AxiosResponse } from 'axios'

type Contents = {
  score: number
  displayValue: string
  numericValue: number
  color: string
}

type ItemProps = {
  totalBytes: number
  wastedBytes: number
  url: string
  node?: {
    selector: string
  }
}

type ImproveContents = {
  title: string
  details: {
    headings: {
      label: string
      key: keyof ItemProps
    }[]
    items: ItemProps[]
  }
}

type DataProps = {
  id: string
  totalScore: number
  totalScoreColor: string
  lighthouseResult: {
    audits: {
      'first-contentful-paint': Contents
      'cumulative-layout-shift': Contents
      interactive: Contents
      'speed-index': Contents
      'total-blocking-time': Contents
      'largest-contentful-paint': Contents
      'modern-image-formats': ImproveContents
      'uses-responsive-images': ImproveContents
      'offscreen-images': ImproveContents
      'unused-javascript': ImproveContents
      'unused-css-rules': ImproveContents
      'unminified-css': ImproveContents
      'unminified-javascript': ImproveContents
    }
  }
}

type ErrorDataProps = {
  error: {
    message: string
  }
}

export type SuccessResponse = AxiosResponse<DataProps>
export type ErrorResponse = AxiosResponse<ErrorDataProps>
export type DataResponses = SuccessResponse | ErrorResponse
