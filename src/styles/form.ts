import { css } from '@emotion/react'
import { hex2rgba } from '@/utils/displayUtils'

export const navWrap = css`
  width: 250px;
`

export const contentWrap = css`
  flex: 1;
`

export const score = (color: string) => css`
  width: 100px;
  height: 100px;
  font-size: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  margin: 0 auto 2rem;
  border: 4px solid currentColor;
  color: ${color};
  background-color: ${hex2rgba(color, 0.2)};
`
