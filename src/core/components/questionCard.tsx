import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Typography, TypographyProps } from "@material-ui/core"

interface QuestionCard {
  question: string
  questionProps?: TypographyProps
  caption?: string | null
  captionProps?: TypographyProps
  imagePath?: string | null
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  mutiline: {
    "&>*": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  }
}))

const QuestionCardComponent: React.FC<QuestionCard> = ({ question, questionProps, caption, captionProps, imagePath, children }) => {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant="h5" {...questionProps}>
        {question}
      </Typography>
      {imagePath && <img src={imagePath} alt={question} />}
      {caption && (
        <Typography variant="caption" {...captionProps}>
          {caption}
        </Typography>
      )}
      {children}
    </Paper>
  )
}

export { QuestionCardComponent }
