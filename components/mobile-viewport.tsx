import React from 'react'

const useMobileViewportHeight = () => {
  const [isInnerHeightSet, setIsInnerHeightSet] = React.useState<boolean>(false)
  const [innerHeight, setInnerHeight] = React.useState<number>(1)

  React.useEffect(() => {
    const handle = () => {
      setViewportHeight(window.innerHeight / 100)
      setIsInnerHeightSet(true)
    }

    screen.orientation.addEventListener('change', handle)
    window.addEventListener('resize', handle)
    return () => {
      screen.orientation.removeEventListener('change', handle)
      window.removeEventListener('resize', handle)
    }
  }, [setViewportHeight])

  const mvh = React.useCallback(
    (scale: number) => {
      isInnerHeightSet ? `${innerHeight * scale}px` : `${innerHeight * scale}vh`
    },
    [isInnerHeightSet, innerHeight]
  )

  return {
    mvh,
  }
}

export default useMobileViewportHeight
