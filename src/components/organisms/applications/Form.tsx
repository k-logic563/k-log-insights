import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { strategies, urlRegex } from '@/constants'
import * as types from '@/types'

const Form: React.FC = () => {
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
        {strategies.map((x) => (
          <div className="form-check" key={x.id}>
            <input
              {...register('strategy')}
              className="form-check-input"
              type="radio"
              name="strategy"
              defaultValue={x.id}
              id={x.id}
            />
            <label className="form-check-label" htmlFor={x.id}>
              {x.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <div className="row g-3">
          {fields.map((field, idx) => (
            <div className="col-4" key={field.id} data-testid="form-input-box">
              <div className="d-flex gap-2">
                <input
                  {...register(`items.${idx}.url` as const, {
                    required: '※必須項目です',
                    pattern: {
                      value: urlRegex,
                      message: '※URLフォーマットを確認してください',
                    },
                  })}
                  type="text"
                  className="form-control"
                  defaultValue={field.url}
                  data-testid={`form-input-${idx}`}
                />
                <button
                  type="button"
                  style={{ whiteSpace: 'nowrap' }}
                  className="btn btn-danger"
                  onClick={() => remove(idx)}
                  data-testid={`delete-btn-${idx}`}
                >
                  削除
                </button>
              </div>
              {errors.items && errors.items[idx]?.url && (
                <p
                  className="text-danger mt-1"
                  style={{ fontSize: '12px' }}
                  data-testid={`error-text-${idx}`}
                >
                  {errors.items[idx].url?.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() =>
            append({
              url: '',
            })
          }
          data-testid="add-input"
        >
          追加
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isValid || !fields.length}
          data-testid="submit"
        >
          分析
        </button>
      </div>
    </>
  )
}

export default Form
