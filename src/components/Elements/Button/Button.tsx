import React from 'react'
import { Button as RBButton } from 'react-bootstrap'

type Props = {
  variant: string
  text: string
  type?: 'button' | 'submit'
  handleClick?: () => void
  disabled?: boolean
  inputClass?: string
}

export const Button: React.FC<Props> = ({
  variant,
  type = 'button',
  handleClick,
  text,
  disabled = false,
  inputClass,
}) => {
  return (
    <RBButton
      className={inputClass}
      type={type}
      variant={variant}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </RBButton>
  )
}
