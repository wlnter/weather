import { useState, useEffect, useCallback } from "react"
export const useAsync = (asyncFunction, auto = true) => {
    const [value, setValue] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
  
    const reSync = useCallback(
      (options) => {
        setPending(true)
        setError(null)
        return asyncFunction(options)
          .then((response) => setValue(response))
          .catch((error) => setError(error))
          .finally(() => {
            setPending(false)
          })
      },
      [asyncFunction]
    )
  
    useEffect(() => {
      if (auto) {
        reSync()
      }
    }, [reSync, auto])
  
    return { value, pending, error, setValue, reSync }
  }