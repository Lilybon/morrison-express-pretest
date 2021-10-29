import { renderHook, act, fireEvent } from '@testing-library/react-hooks'
import useCheckBoxes from './useCheckBoxes'

const checkBoxes = [
  { value: 0, disabled: false },
  { value: 1, disabled: true },
  { value: 2, disabled: true },
  { value: 3, disabled: false },
  { value: 4, disabled: true },
  { value: 5, disabled: false },
]
const allSelections = checkBoxes.filter((checkBox) => !checkBox.disabled)

let result

beforeEach(() => {
  const rendered = renderHook(() => useCheckBoxes(checkBoxes))
  result = rendered.result
})

it('supplies a toggle all util', () => {
  act(() => {
    result.current.handleSelectAll()
  })

  expect(result.current.isAllSelected).toBe(true)
  expect(result.current.selections).toEqual(
    expect.arrayContaining(allSelections)
  )

  act(() => {
    result.current.handleSelectAll()
  })

  expect(result.current.isAllSelected).toBe(false)
  expect(result.current.selections).toEqual([])
})

it('suppilies a toggle single util', () => {
  const index0 = 0
  const index3 = 3
  const checkBox0 = checkBoxes[index0]
  const checkBox3 = checkBoxes[index3]

  act(() => {
    result.current.handleSelectSingle(checkBox0)
  })

  expect(result.current.isAllSelected).toBe(false)
  expect(result.current.selections).toEqual(
    expect.arrayContaining(
      allSelections.filter((selection) => selection.value === checkBox0.value)
    )
  )

  act(() => {
    result.current.handleSelectSingle(checkBox0)
    result.current.handleSelectSingle(checkBox3)
  })

  expect(result.current.isAllSelected).toBe(false)
  expect(result.current.selections).toEqual(
    expect.arrayContaining(
      allSelections.filter(
        (selection) =>
          checkBox0.value <= selection.value &&
          selection.value <= checkBox3.value
      )
    )
  )
})

it("doesn't allow a disabled checkbox to be togglable", () => {
  const index2 = 2
  const checkBox2 = checkBoxes[index2]

  act(() => {
    result.current.handleSelectSingle(checkBox2)
  })

  expect(result.current.isAllSelected).toBe(false)
  expect(result.current.selections).toEqual([])
})

// TODO: try resolving TypeError: Cannot read property 'keyDown' of undefined
// it('supply multi-selct while shift key is pressed', () => {
//   const index3 = 3
//   const checkBox3 = checkBoxes[index3]

//   act(() => {
//     fireEvent.keyDown(window, { key: 'Shift', shiftKey: true })
//     result.current.handleSelectSingle(checkBox3)
//     fireEvent.keyUp(window, { key: 'Shift', shiftKey: true })
//   })

//   expect(result.current.isAllSelected).toBe(false)
//   expect(result.current.selections).toEqual(
//     expect.arrayContaining(
//       allSelections.filter((selection) => selection.value <= checkBox3.value)
//     )
//   )

//   const index0 = 0
//   const checkBox0 = checkBoxes[index0]

//   act(() => {
//     fireEvent.keyDown(window, { key: 'Shift', shiftKey: true })
//     result.current.handleSelectSingle(checkBox0)
//     fireEvent.keyUp(window, { key: 'Shift', shiftKey: true })
//   })

//   expect(result.current.isAllSelected).toBe(false)
//   expect(result.current.selections).toEqual([])
// })
