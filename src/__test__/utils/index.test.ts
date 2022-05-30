import { Color, convertToKiB, getColor, hex2rgba } from '@/utils/displayUtils'

describe('ユーティリティ関数単体テスト', () => {
  it('kb変換', () => {
    const baseByte = 1024
    expect(convertToKiB(baseByte)).toBe(1)
  })

  it('カラー十六進法からRGBA', () => {
    const mockHex = '#000'
    expect(hex2rgba(mockHex)).toBe('rgba(0, 0, 0, 1)')
    const mockAlpha = 0.6
    expect(hex2rgba(mockHex, mockAlpha)).toBe('rgba(0, 0, 0, 0.6)')
  })

  it('色取得', () => {
    const mockProps = [
      {
        key: 'total',
        data: [90, 89, 41],
      },
      {
        key: 'first-contentful-paint',
        data: [1.8, 3, 3.1],
      },
      {
        key: 'interactive',
        data: [3.7, 3.9, 7.4],
      },
      {
        key: 'speed-index',
        data: [3.4, 3.5, 5.9],
      },
      {
        key: 'largest-contentful-paint',
        data: [2.5, 4, 4.1],
      },
      {
        key: 'cumulative-layout-shift',
        data: [0.1, 0.24, 0.26],
      },
    ]

    const colors = [Color.Safe, Color.Warning, Color.Danger]

    mockProps.forEach((x) => {
      x.data.forEach((y, index) => {
        expect(getColor(x.key, y)).toBe(colors[index])
      })
    })
  })
})
