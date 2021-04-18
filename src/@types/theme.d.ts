
interface Option {
  value: string,
  label: string
}

interface Group {
  label: string,
  value: string,
  options: Option[]
}

interface InternalGroup {
  label: string,
  value: string,
  status: boolean,
  options: Option[]
}

interface ButtonStatus {
  [key: string]: boolean
}

interface MultipleSelectProps {
  // options: Option[],
  groups: Group[]
}