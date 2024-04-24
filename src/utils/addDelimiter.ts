function addDelimiter(value: number, delimiter = ',') {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)
}

export default addDelimiter
