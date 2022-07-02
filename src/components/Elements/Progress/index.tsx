import React from 'react'
import { ProgressBar } from 'react-bootstrap'

type Props = {
  now: number
}

export const Progress: React.FC<Props> = ({ now }) => (
  <div className="text-center py-5" data-testid="progress">
    <p>Now loading...</p>
    <ProgressBar animated now={now} label={`${now}%`} />
  </div>
)