
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

type onUpdate = <T>(t: T) => void

interface AsyncMultipleSelectProps {
  url: string,
  data: {
    [key: string]: any
  }
  selected: string[],
  onChange: (t: string[]) => void
}


interface MultipleSelectProps {
  groups: Group[],
  selected: string[],
  onChange: (t: string[]) => void
}

interface MultiSelect {
  options: Option[],
  selected: string[],
  onChange: (t: string[]) => void
}

// 
type DateRange = {
  start: Date,
  end: Date
}

interface DateRangeSelectorProps {
  value: DateRange,
  onChange: (t: DateRange) => void
}
interface DateRangePickerProps {
  value: DateRange,
  onChange: (t: DateRange) => void
}

type DateOptions =
	| 'thisWeek'
	| 'lastWeek'
	| 'thisMonth'
	| 'lastMonth'
	| 'thisThreeMonths'
	| 'lastThreeMonths'
	| 'thisYear'
	| 'lastYear'
	| 'twoMonthsAgo'
	| 'threeMonthsAgo'
	| 'custom';