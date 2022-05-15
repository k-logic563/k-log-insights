import React from 'react'
import { ProgressBar } from 'react-bootstrap'

type Props = {
  now: number
}

const Progress: React.FC<Props> = ({ now }) => (
  <div className="text-center py-5">
    <ProgressBar now={now} label={`${now}%`} />
  </div>
)

export default Progress
