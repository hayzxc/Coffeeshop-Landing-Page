import {
  DayPicker,
  type DayPickerSingleProps,
} from "react-day-picker"
import { cn } from "@/lib/utils"

export type CalendarProps = DayPickerSingleProps

function Calendar(props: CalendarProps) {
  return (
    <DayPicker
      className={cn("p-3")}
      {...props}
    />
  )
}

export { Calendar }
