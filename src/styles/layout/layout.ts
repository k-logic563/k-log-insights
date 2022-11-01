import { css } from '@emotion/react'

export const wrapper = css({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
})

export const customContainer = css({
  maxWidth: '768px',
  padding: '0 1rem',
  margin: 'auto',

  '@media (min-width: 768px)': {
    padding: 0,
  },
})
