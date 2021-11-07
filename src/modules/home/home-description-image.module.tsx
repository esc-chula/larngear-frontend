import { Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React, { useState, useCallback, useEffect } from "react"
import descriptionConstant from "../../core/constants/description.constant"

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: "10px",
    width: "min(497px, calc(100vw - 16px))",
    height: "332px",
    [theme.breakpoints.down("sm")]: {
      height: `min( 332px, calc(${332 / 497} * (100vw - 16px)))`
    }
  },
  imageContainer: {
    maxWidth: "498px",
    flex: 1
  }
}))

const HomeDescriptionImage = () => {
  const classes = useStyles()
  const [index, setIndex] = useState(0)
  const changeImage = useCallback(() => {
    setIndex(index => (index + 1) % descriptionConstant.length)
  }, [])

  const [display, setDisplay] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(false)
      setTimeout(() => {
        changeImage()
      }, 500)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [changeImage])

  useEffect(() => {
    setDisplay(true)
  }, [index])

  return (
    <Fade in={display} timeout={500}>
      <div>
        {descriptionConstant.map(({ src }, idx) => {
          return <img src={src} key={idx} alt="descriptionImage" style={{ display: index === idx ? "block" : "none" }} className={classes.image} />
        })}
      </div>
    </Fade>
  )
}

export default HomeDescriptionImage
