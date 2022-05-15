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

export type ErrorResponse = {
  status: 500
  data: {
    error: {
      code: number
      message: string
    }
  }
}

export type Response = {
  status: 200
  data: {
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
}
