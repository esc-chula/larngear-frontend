import React, { useCallback, useMemo } from "react"
import { useRouteMatch, Link, useHistory } from "react-router-dom"
import { Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useLoadingStatus } from "./loading.component"

const useStyles = makeStyles(theme => ({
  buttonSuccess: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  },
  buttonWarning: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  }
}))

export type ButtonBarProps = {
  beforeNavigate?: () => boolean | Promise<boolean>
}

const ButtonBar: React.FC<ButtonBarProps> = ({ beforeNavigate }) => {
  const step = parseInt(useRouteMatch<{ step: string }>().params.step)
  const history = useHistory()
  const previousPage = `/application/step/${step - 1}`
  const nextPage = `/application/step/${step + 1}`
  const classes = useStyles()
  const setLoading = useLoadingStatus()

  const wrappedBeforeNavigate = useMemo(() => {
    if (!beforeNavigate) {
      return null
    }
    return async () => {
      try {
        setLoading(true)
        return await beforeNavigate()
      } finally {
        setLoading(false)
      }
    }
  }, [beforeNavigate, setLoading])

  const handlePrevious = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (wrappedBeforeNavigate) {
        e.preventDefault()
        if (await wrappedBeforeNavigate()) {
          history.push(previousPage)
        }
      }
    },
    [wrappedBeforeNavigate, history, previousPage]
  )

  const handleNext = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (wrappedBeforeNavigate) {
        e.preventDefault()
        if (await wrappedBeforeNavigate()) {
          history.push(nextPage)
        }
      }
    },
    [wrappedBeforeNavigate, history, nextPage]
  )

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={previousPage}>
          <Button variant="contained" className={classes.buttonWarning} fullWidth onClick={handlePrevious}>
            {step === 6 ? "กลับไปแก้ไขหน้าที่แล้ว" : "ย้อนกลับ"}
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} sm={6} item>
        <Button variant="contained" className={classes.buttonSuccess} fullWidth type="submit" onClick={handleNext}>
          {step === 6 ? "ยืนยันการสมัคร" : "ไปขั้นตอนถัดไป"}
        </Button>
      </Grid>
    </Grid>
  )
}

export default ButtonBar
