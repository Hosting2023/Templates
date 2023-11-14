export const hasEmptyFields = (obj: any): boolean => {
  console.log(obj)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined || !obj[key].length) {
        return true
      }
    }
  }
  return false
}
