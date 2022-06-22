import { css } from '@emotion/react'
import { hex2rgba } from '@/utils/converter'

export const score = (score: string, color: string) => css`
  width: 100px;
  height: 100px;
  font-size: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  margin: 0 auto 2rem;
  color: ${color};
  position: relative;
  background: conic-gradient(
    ${color} 0 ${score}%,
    ${hex2rgba(color, 0.2)} ${score}% 100%
  );

  &:after {
    content: attr(data-score) '';
    display: grid;
    place-items: center;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 10;
  }
`
