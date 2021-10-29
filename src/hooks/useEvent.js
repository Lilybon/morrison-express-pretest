import { useEffect } from 'react'

const defaultTarget = window

const useEvent = (eventName, handler, target = defaultTarget, eventOptions) => {
  useEffect(() => {
    if (!handler || !target || typeof target.addEventListener !== 'function') {
      return
    }
    target.addEventListener(eventName, handler, eventOptions)

    return () => {
      if (typeof target.removeEventListener !== 'function') {
        return
      }
      target.removeEventListener(eventName, handler, eventOptions)
    }
  }, [eventName, handler, target, eventOptions])
}

export default useEvent
