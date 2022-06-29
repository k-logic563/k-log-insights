import { SProps } from '../types/form'

export const SCORE_WEIGHT = {
  firstContentfulPaint: 0.1,
  interactive: 0.1,
  speedIndex: 0.1,
  totalBlockingTime: 0.3,
  largestContentfulPaint: 0.25,
  cumulativeLauoutShift: 0.15,
} as const

export const RHF_OPTIONS = {
  defaultValues: {
    strategy: 'desktop' as const,
    items: [
      {
        url: '',
      },
    ],
  },
  mode: 'onSubmit' as const,
}

export const LIGHTHOUSE_ITEMS = [
  {
    title: 'First Contentful Paint',
    prop: 'first-contentful-paint',
  },
  {
    title: 'Time to Interactive',
    prop: 'interactive',
  },
  {
    title: 'Speed Index',
    prop: 'speed-index',
  },
  {
    title: 'Total Blocking Time',
    prop: 'total-blocking-time',
  },
  {
    title: 'Largest Contentful Paint',
    prop: 'largest-contentful-paint',
  },
  {
    title: 'Cumulative Layout Shift',
    prop: 'cumulative-layout-shift',
  },
] as const

export const LIGHTHOUSE_KEYS = LIGHTHOUSE_ITEMS.map((x) => x.prop)

export const STRATEGIES: SProps[] = [
  {
    id: 'desktop',
    label: 'デスクトップ',
  },
  {
    id: 'mobile',
    label: 'モバイル',
  },
]

export const URL_REGEX = /^(http|https)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)\..+$/

export const IMPROVE_PROPS = [
  'server-response-time',
  'modern-image-formats',
  'uses-responsive-images',
  'offscreen-images',
  'unused-javascript',
  'unused-css-rules',
  'unminified-css',
  'unminified-javascript',
] as const
