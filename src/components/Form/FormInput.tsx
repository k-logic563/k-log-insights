import { UseFormRegisterReturn } from 'react-hook-form'
import { Form } from 'react-bootstrap'

import { Button } from '../Elements/Button'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  fieldsCount: number
  defaultValue: string
  handleClickRemove: () => void
  registration: Partial<UseFormRegisterReturn>
}

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', registration, error, fieldsCount } = props
  return (
    <div className="d-flex align-items-start gap-2">
      <div className="w-100">
        <FieldWrapper error={error}>
          <Form.Control
            type={type}
            defaultValue={props.defaultValue}
            {...registration}
          />
        </FieldWrapper>
      </div>
      {fieldsCount !== 1 && (
        <Button
          variant="danger"
          text="削除"
          inputClass="text-nowrap"
          handleClick={props.handleClickRemove}
        />
      )}
    </div>
  )
}
