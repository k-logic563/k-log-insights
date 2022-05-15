import { css } from '@emotion/react'

import { Color } from '@/utils/displayUtils'

export const list = css`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 1rem;
`

export const listTitle = (color: string) => css`
  font-size: 16px;
  margin-bottom: 0.5em;

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

export const listDesc = (color: string) => css`
  font-size: 24px;
  color: ${color};
`

export const accordionHeading = (color: string) => css`
  &::before {
    content: '${color === Color.Danger ? '▲' : Color.Warning ? '■' : '●'}';
    color: ${color};
    margin-right: 0.4em;
  }
`
