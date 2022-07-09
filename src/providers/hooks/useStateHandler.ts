import { useState } from 'react'

export type StateHandler<T> = {
  value: T
  setValue: (value: T | ((previousValue: T) => T)) => void
  reset: () => void
}

export const useStateHandler = <T>(defaultValue: T): StateHandler<T> => {
  const [state, setState] = useState<T>(defaultValue)

  return {
    value: state,
    setValue: (v) => setState(v),
    reset: () => setState(defaultValue),
  }
}
