import { useState } from 'react'
import useKeyPress from './useKeyPress'
import uniqBy from './../utils/uniqBy'

const useCheckBoxes = (checkBoxes = []) => {
  const allSelections = checkBoxes.filter((checkbox) => !checkbox.disabled)
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [selections, setSelections] = useState([])
  const [lastSelection, setLastSelection] = useState(null)
  const isShiftPressed = useKeyPress('Shift')

  const isSelectionChecked = (target) => {
    return (
      selections.findIndex((selection) => selection.value === target.value) >= 0
    )
  }

  const createSelections = (target) => {
    if (isShiftPressed) {
      const targetIndex = allSelections.findIndex(
        (selection) => selection.value === target.value
      )
      const lastSelectionIndex = lastSelection
        ? allSelections.findIndex(
            (selection) => selection.value === lastSelection.value
          )
        : 0
      const newSelections = allSelections.slice(
        Math.min(targetIndex, lastSelectionIndex),
        Math.max(targetIndex, lastSelectionIndex) + 1
      )
      if (isSelectionChecked(target)) {
        return selections.filter(
          (selection) =>
            !newSelections.some(
              (newSelection) => newSelection.value === selection.value
            )
        )
      } else {
        return uniqBy([...selections, ...newSelections], (item) => item.value)
      }
    }
    if (isSelectionChecked(target)) {
      return selections.filter((selection) => selection.value !== target.value)
    }
    return [...selections, target]
  }

  const handleSelectAll = () => {
    setSelections(isAllSelected ? [] : [...allSelections])
    setIsAllSelected(!isAllSelected)
  }
  const handleSelectSingle = (target) => {
    if (target.disabled) return
    const newSelections = createSelections(target)
    setSelections(newSelections)
    setLastSelection(target)

    if (newSelections.length === 0) {
      setIsAllSelected(false)
    } else if (newSelections.length === allSelections.length) {
      setIsAllSelected(true)
    }
  }

  return {
    isAllSelected,
    selections,
    isSelectionChecked,
    handleSelectAll,
    handleSelectSingle,
  }
}

export default useCheckBoxes
