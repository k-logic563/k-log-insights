import { SProps } from '../types/form'

export const scoreWeight = {
  firstContentfulPaint: 0.1,
  interactive: 0.1,
  speedIndex: 0.1,
  totalBlockingTime: 0.3,
  largestContentfulPaint: 0.25,
  cumulativeLauoutShift: 0.15,
} as const

export const lighthouseItems = [
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

export const lighthouseKeys = lighthouseItems.map((x) => x.prop)

export const strategies: SProps[] = [
  {
    id: 'desktop',
    label: 'デスクトップ',
  },
  {
    id: 'mobile',
    label: 'モバイル',
  },
]

export const urlRegex = /^(http|https)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)\..+$/

export const improveProps = [
  'server-response-time',
  'modern-image-formats',
  'uses-responsive-images',
  'offscreen-images',
  'unused-javascript',
  'unused-css-rules',
  'unminified-css',
  'unminified-javascript',
] as const
