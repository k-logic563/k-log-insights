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

export const convertToKiB = (value: number) => {
  const kb = 1024
  return Math.floor((value / kb) * 100) / 100
}
