type optionType = {
  value: string | number
  label: string | number
}

export type filterTypes = {
  id: number
  label: string
  value: string
  selected: boolean
  options: optionType[]
  questionType: string
  selectedValue: null | string[]
}

export type FilterInitialDataType = {
  filters: {
    depth: number
    category: filterTypes[]
  }
}
