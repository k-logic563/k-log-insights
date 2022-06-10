export type Strategy = 'desktop' | 'mobile'

export type SProps = {
  id: Strategy
  label: string
}

export type Item = {
  id: string
  url: string
  error?: string
}

export type FormValues = {
  strategy: Strategy
  items: {
    url: string
  }[]
}
