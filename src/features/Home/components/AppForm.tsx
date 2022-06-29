import React from 'react'
import { UseFormProps } from 'react-hook-form'
import { Form as RBForm } from 'react-bootstrap'

import { InputField } from '@/components/Form'
import { Form } from '@/components/Form'
import { Button } from '@/components/Elements/Button'

import { STRATEGIES, URL_REGEX } from '@/constants'
import * as types from '@/types'

type Props = {
  options: UseFormProps<types.form.FormValues>
  onSubmit: (data: types.form.FormValues) => void
}

export const AppForm: React.FC<Props> = ({ options, onSubmit }) => {
  return (
    <Form<types.form.FormValues>
      options={options}
      fieldName="items"
      onSubmit={onSubmit}
    >
      {({ register, formState, fields, remove, append }) => (
        <>
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
                    error={
                      formState.errors.items && formState.errors.items[idx]?.url
                    }
                    fieldsCount={fields.length}
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
            <Button type="submit" variant="primary" text="分析" />
          </div>
        </>
      )}
    </Form>
  )
}
