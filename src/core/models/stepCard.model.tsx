interface StepInfoModel {
  title: React.ReactNode
  contents: React.ReactNode
  primaryButton?: {
    label: string
    opensDialog: boolean
    path?: string
  }
  secondaryButton?: {
    label: string
    opensDialog: boolean
    path?: string
  }
}

interface StepStateModel {
  true: StepInfoModel
  false?: StepInfoModel
}

interface StepModel {
  incomplete: StepStateModel
  inProgress: StepStateModel
  complete: StepStateModel
}

interface StepCardModel {
  1: StepModel
  2: StepModel
  3: StepModel
  4: StepModel
  5: StepModel
  6: StepModel
}

export default StepCardModel
