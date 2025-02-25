export const convertToFloat = (value: string | number) => {
  if (typeof value === 'string' && value) {
    return Number.parseFloat(value.replace(',', '.'))
  }
  return value
}
