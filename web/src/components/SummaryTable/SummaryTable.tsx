import { genereteDatesFromYearBeginning } from "../../utils/genereteDateFromYearBeginning";
import { HabitDay } from "../HabitDay/habit";
import { Section, Article, DaysWeek, Days, Day } from "./style";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = genereteDatesFromYearBeginning()

const minimunSummaryDatesSize = 18 * 7

const amauntOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <Section>
      <Article>
        {weekDays.map((weekDay, i) => {
          return <DaysWeek key={`${weekDay}-${i}`}>{weekDay}</DaysWeek>;
        })}
      </Article>

      <Days>
        {summaryDates.map(date => {
          return <HabitDay key={date.toString()} />
        })}

        {amauntOfDaysToFill > 0 && Array.from({ length: amauntOfDaysToFill}).map((_, i) => {
          return (
            <Day key={i} />
          )
          
        })}
      </Days>
    </Section>
  );
}
