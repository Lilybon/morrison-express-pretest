import uniqBy from './uniqBy'

it('filters only one child, one adult and one elder in people by name', () => {
  const child = { age: 8, name: 'Ann' }
  const adult = { age: 27, name: 'Lilybon' }
  const elder = { age: 67, name: 'Jenny' }
  const people = [child, elder, child, adult, child, child, elder, child]

  const result = uniqBy(people, (person) => person.name)
  expect(result).toHaveLength(3)
  expect(result).toEqual(expect.arrayContaining([child, adult, elder]))
})
