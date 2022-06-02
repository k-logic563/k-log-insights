export enum Color {
  Danger = '#c00',
  Warning = '#fa3',
  Safe = '#0c6',
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
