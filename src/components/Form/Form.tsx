import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Form as RBForm } from 'react-bootstrap'

import { Button } from '@/components/Elements/Button'
import { InputField } from './FormInput'

import { STRATEGIES, URL_REGEX } from '@/constants'
import * as types from '@/types'

type Props = {
  onSubmit: (data: types.form.FormValues) => void
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<types.form.FormValues>()

  const { fields, remove, append } = useFieldArray({
    name: 'items',
    control,
  })

  return (
    <RBForm onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        {STRATEGIES.map((x) => (
          <div className="form-check" key={x.id}>
            <RBForm.Check
              {...register('strategy')}
              type="radio"
              name="strategy"
              defaultValue={x.id}
              id={x.id}
              label={x.label}
            />
          </div>
        ))}
      </div>
      <div className="mb-5">
        <div className="row g-3">
          {fields.map((field, idx) => (
            <div className="col-4" key={field.id}>
              <InputField
                defaultValue={field.url}
                registration={register(`items.${idx}.url` as const, {
                  required: '※必須項目です',
                  pattern: {
                    value: URL_REGEX,
                    message: '※URLフォーマットを確認してください',
                  },
                })}
                handleClickRemove={() => remove(idx)}
                error={errors.items && errors.items[idx]?.url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <Button
          variant="outline-primary"
          text="追加"
          handleClick={() =>
            append({
              url: '',
            })
          }
        />
        <Button
          type="submit"
          variant="primary"
          text="分析"
          disabled={!isValid || !fields.length}
        />
      </div>
    </RBForm>
  )
}
