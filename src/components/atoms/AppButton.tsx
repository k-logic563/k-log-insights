import React from 'react'
import { Button } from 'react-bootstrap'

type Props = {
  variant: 'primary' | 'danger' | 'outline-primary'
  text: string
  type?: 'button' | 'submit'
  handleClick?: () => void
  disabled?: boolean
  inputClass?: string
}

export const AppButton: React.FC<Props> = ({
  variant,
  type = 'button',
  handleClick,
  text,
  disabled = false,
  inputClass,
}) => {
  return (
    <Button
      className={inputClass}
      type={type}
      variant={variant}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
