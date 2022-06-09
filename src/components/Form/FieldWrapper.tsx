import React from 'react'
import { FieldError } from 'react-hook-form'

type FieldWrapperProps = {
  children: React.ReactNode
  error?: FieldError | undefined
}

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { error, children } = props
  return (
    <>
      {children}
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="mt-1 text-danger"
          style={{ fontSize: '12px' }}
        >
          {error.message}
        </div>
      )}
    </>
  )
}
