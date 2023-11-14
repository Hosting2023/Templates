export const getWithFirstUppercase = (value: string) => {
  return value && value.length > 0 ? value[0] + value.slice(1) : ''
}
