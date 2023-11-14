export const hasNonEmptyFields = (obj: any): boolean => {
  console.log(obj)
  let counter = 0
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].lenght && obj[key].lenght > 0) {
        counter++
      }
    }
  }
  return counter <= obj.lenght && counter > 0
}
