import { css } from '@emotion/react'

import { Color } from '@/utils/color'

export const listTitle = (color: string) => css`
  &::before {
    content: '${color === Color.Danger
      ? '▲'
      : color === Color.Warning
      ? '■'
      : '●'}';
    color: ${color};
    margin-right: 0.2em;
  }
`

export const accordionHeading = (color: string) => css`
  &::before {
    content: '${color === Color.Danger ? '▲' : Color.Warning ? '■' : '●'}';
    color: ${color};
    margin-right: 0.4em;
  }
`
