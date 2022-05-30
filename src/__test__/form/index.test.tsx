import React from 'react'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'

import HomePage from '@/pages'

beforeEach(async () => {
  await act(() => {
    render(<HomePage />)
  })
})

afterEach(() => {
  cleanup()
})

describe('フォームテスト', () => {
  it('インプット数の整合性', async () => {
    const testAddButton = screen.getByTestId('add-input')
    await act(() => {
      fireEvent.click(testAddButton)
      fireEvent.click(testAddButton)
    })
    expect(screen.getAllByTestId('form-input-box').length).toBe(2)

    await act(() => {
      fireEvent.click(screen.getByTestId('delete-btn-1'))
    })
    expect(screen.getAllByTestId('form-input-box').length).toBe(1)
  })

  it('URLフォーマットエラー表示', async () => {
    const testAddButton = screen.getByTestId('add-input')

    await act(() => {
      fireEvent.click(testAddButton)
    })
    await act(() => {
      fireEvent.change(screen.getByTestId('form-input-0'), {
        target: {
          value: 'https://example',
        },
      })
    })
    expect(screen.getByTestId('error-text-0').textContent).toBe(
      '※URLフォーマットを確認してください'
    )

    await act(() => {
      fireEvent.change(screen.getByTestId('form-input-0'), {
        target: {
          value: '',
        },
      })
    })
    expect(screen.getByTestId('error-text-0').textContent).toBe('※必須項目です')
  })

  it('必須項目エラー表示', async () => {
    const testAddButton = screen.getByTestId('add-input')

    await act(() => {
      fireEvent.click(testAddButton)
    })

    await act(() => {
      fireEvent.change(screen.getByTestId('form-input-0'), {
        target: {
          value: 'https://example',
        },
      })
    })

    await act(() => {
      fireEvent.change(screen.getByTestId('form-input-0'), {
        target: {
          value: '',
        },
      })
    })
    expect(screen.getByTestId('error-text-0').textContent).toBe('※必須項目です')
  })
})
