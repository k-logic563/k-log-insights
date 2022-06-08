import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Form } from 'react-bootstrap'

import { AppButton } from '@/components/atoms/AppButton'

import { STRATEGIES, URL_REGEX } from '@/constants'
import * as types from '@/types'

export const AppForm: React.FC = () => {
  const {
    register,
    control,
    formState: { errors, isValid },
  } = useFormContext<types.form.FormValues>()

  const { fields, remove, append } = useFieldArray({
    name: 'items',
    control,
  })

  return (
    <>
      <div className="mb-3">
        {STRATEGIES.map((x) => (
          <div className="form-check" key={x.id}>
            <Form.Check
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
              <div className="d-flex gap-2">
                <Form.Control
                  {...register(`items.${idx}.url` as const, {
                    required: '※必須項目です',
                    pattern: {
                      value: URL_REGEX,
                      message: '※URLフォーマットを確認してください',
                    },
                  })}
                  defaultValue={field.url}
                />
                <AppButton
                  variant="danger"
                  text="削除"
                  inputClass="text-nowrap"
                  handleClick={() => remove(idx)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <AppButton
          variant="outline-primary"
          text="追加"
          handleClick={() =>
            append({
              url: '',
            })
          }
        />
        <AppButton
          type="submit"
          variant="primary"
          text="分析"
          disabled={!isValid || !fields.length}
        />
      </div>
    </>
  )
}
