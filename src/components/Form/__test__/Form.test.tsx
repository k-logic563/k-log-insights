import React from 'react'
import {
  render,
  fireEvent,
  act,
  screen,
  waitFor,
  cleanup,
} from '@testing-library/react'

import { Form } from '../Form'
import { URL_REGEX } from '@/constants'
import { InputField } from '@/components/Form'
import { Button } from '@/components/Elements/Button'

const mockData = {
  defaultValues: {
    strategy: 'desktop' as const,
    items: [
      {
        url: '',
      },
    ],
  },
  mode: 'onSubmit' as const,
}

test('基本的なフォームの入力、送信ができる', async () => {
  const handleSubmit = jest.fn()
  render(
    <Form<typeof mockData.defaultValues>
      options={mockData}
      onSubmit={handleSubmit}
      fieldName="items"
    >
      {({ register, formState, fields, remove }) => (
        <>
          {fields.map((field, idx) => (
            <div key={field.id}>
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
          <Button type="submit" variant="primary" text="分析" />
        </>
      )}
    </Form>
  )

  const inputEl = (await document.querySelector(
    'input[name="items.0.url"]'
  )) as HTMLInputElement
  await act(() => {
    fireEvent.change(inputEl, { target: { value: 'https://example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /分析/i }))
  })
  await waitFor(() => {
    const newData = {
      ...mockData.defaultValues,
      items: [{ url: 'https://example.com' }],
    }
    expect(handleSubmit).toHaveBeenCalledWith(newData, expect.anything())
  })
})

describe('バリデーション', () => {
  const handleSubmit = jest.fn()
  beforeEach(() => {
    render(
      <Form<typeof mockData.defaultValues>
        options={mockData}
        onSubmit={handleSubmit}
        fieldName="items"
      >
        {({ register, formState, fields, remove }) => (
          <>
            {fields.map((field, idx) => (
              <div key={field.id}>
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
            <Button type="submit" variant="primary" text="分析" />
          </>
        )}
      </Form>
    )
  })
  afterEach(() => {
    cleanup()
  })
  test('必須項目エラーメッセージの出力', async () => {
    await act(() => {
      fireEvent.click(screen.getByRole('button', { name: /分析/i }))
    })
    await screen.findByRole(/alert/i, { name: '※必須項目です' })
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })

  test('URLフォーマットエラー出力', async () => {
    const inputEl = (await document.querySelector(
      'input[name="items.0.url"]'
    )) as HTMLInputElement
    await act(() => {
      fireEvent.change(inputEl, { target: { value: 'example.com' } })
      fireEvent.click(screen.getByRole('button', { name: /分析/i }))
    })
    await screen.findByRole(/alert/i, {
      name: '※URLフォーマットを確認してください',
    })
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
})
