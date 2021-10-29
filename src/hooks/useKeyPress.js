import { useState } from 'react'
import useKey from './useKey'

const useKeyPress = (keyCode) => {
  const [isPressed, setIsPressed] = useState(false)
  useKey(keyCode, () => setIsPressed(true), { eventName: 'keydown' }, [
    isPressed,
  ])
  useKey(keyCode, () => setIsPressed(false), { eventName: 'keyup' }, [
    isPressed,
  ])
  return isPressed
}

export default useKeyPress
