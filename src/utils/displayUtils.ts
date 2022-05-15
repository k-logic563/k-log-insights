export enum Color {
  Danger = '#c00',
  Warning = '#fa3',
  Safe = '#0c6',
}

export const hex2rgba = (hex: string, alpha = 1) => {
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  let c = null
  if (r) {
    c = r.slice(1, 4).map(function (x) {
      return parseInt(x, 16)
    })
  }
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (r) {
    c = r.slice(1, 4).map(function (x) {
      return 0x11 * parseInt(x, 16)
    })
  }
  if (!c) {
    return null
  }
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`
}

export const getColor = (key: string, value: number) => {
  let color = Color.Safe

  if (key === 'total') {
    if (value < 90) {
      color = Color.Warning
    }
    if (value < 50) {
      color = Color.Danger
    }
  }

  if (key === 'first-contentful-paint') {
    if (value > 1.8) {
      color = Color.Warning
    }
    if (value > 3) {
      color = Color.Danger
    }
  }

  if (key === 'interactive') {
    if (value > 3.8) {
      color = Color.Warning
    }
    if (value > 7.3) {
      color = Color.Danger
    }
  }

  if (key === 'speed-index') {
    if (value > 3.4) {
      color = Color.Warning
    }
    if (value > 5.8) {
      color = Color.Danger
    }
  }

  if (key === 'total-blocking-time') {
    if (value > 200) {
      color = Color.Warning
    }
    if (value > 600) {
      color = Color.Danger
    }
  }

  if (key === 'largest-contentful-paint') {
    if (value > 2.5) {
      color = Color.Warning
    }
    if (value > 4) {
      color = Color.Danger
    }
  }

  if (key === 'cumulative-layout-shift') {
    if (value > 0.1) {
      color = Color.Warning
    }
    if (value > 0.25) {
      color = Color.Danger
    }
  }

  return color
}

export const convertToKiB = (value: number) => {
  return Math.round((value / 1000) * 10) / 10
}
