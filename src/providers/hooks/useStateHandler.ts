import { useState } from 'react'

export type StateHandler<T> = {
  value: T
  setValue: (a: T) => void
  reset: () => void
}

export const useStateHandler = <T>(defaultValue: T, filterFunc?: (a: T) => T): StateHandler<T> => {
  const [state, setState] = useState<T>(defaultValue)

  return {
    value: state,
    setValue: (v) => setState(filterFunc ? filterFunc(v) : v),
    reset: () => setState(defaultValue),
  }
}
