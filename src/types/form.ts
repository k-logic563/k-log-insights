export type SProps = {
  id: string
  label: string
}

export type Item = {
  id: string
  url: string
  error?: string
}

export type FormValues = {
  strategy: string
  items: {
    url: string
  }[]
}
