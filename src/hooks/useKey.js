import useEvent from './useEvent'
import { useMemo } from 'react'

const useKey = (key, fn, useKeyOptions = {}) => {
  const { eventName = 'keypress', target, eventOptions } = useKeyOptions

  const useMemoHandler = useMemo(() => {
    const handler = (event) => {
      if (event.key === key) {
        return fn(event)
      }
    }
    return handler
  }, [fn, key])

  useEvent(eventName, useMemoHandler, target, eventOptions)
}

export default useKey
