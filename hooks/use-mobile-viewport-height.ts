import { useState, useCallback, useEffect } from 'react'

/**
 * React hook to manage the known mobile issue with 100vh. The issue is managed
 * using the window.innerHeight approach.
 */
const useMobileViewportHeight = () => {
  const [isInnerHeightSet, setIsInnerHeightSet] = useState<boolean>(false)
  const [innerHeight, setInnerHeight] = useState<number>(1)

  const mvh = useCallback(
    (scale: number) =>
      isInnerHeightSet
        ? `${innerHeight * scale}px`
        : `${innerHeight * scale}vh`,
    [isInnerHeightSet, innerHeight]
  )

  useEffect(() => {
    /**
     * TODO: add debouncing and throttling
     */
    const handle = () => {
      setInnerHeight(window.innerHeight / 100)
      setIsInnerHeightSet(true)
    }

    handle()

    screen.orientation.addEventListener('change', handle)
    window.addEventListener('resize', handle)

    return () => {
      screen.orientation.removeEventListener('change', handle)
      window.removeEventListener('resize', handle)
    }
  }, [setInnerHeight, setIsInnerHeightSet])

  return mvh
}

export default useMobileViewportHeight
