import * as types from '@/types'

export type SProps = {
  id: types.form.Strategy
  label: string
}

export type Item = {
  id: string
  url: string
  error?: string
}

export type Strategy = 'desktop' | 'mobile'

export type FormValues = {
  strategy: Strategy
  items: {
    url: string
  }[]
}
