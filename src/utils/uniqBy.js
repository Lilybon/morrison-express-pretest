const uniqBy = (array, iteratee) => {
  const set = new Set()
  const results = []
  for (let value of array) {
    const key = iteratee(value)
    if (!set.has(key)) {
      set.add(key)
      results.push(value)
    }
  }
  return results
}

export default uniqBy
