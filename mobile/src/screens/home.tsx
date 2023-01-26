import { Container, WeekDays, WeekDay, Days, DaysComplement } from "./style";
import { HeaderScreen } from "../components/Header/Header";
import { DAY_SIZE, HabitDays } from "../components/HabitDays/HabitDays";

import { genereteDatesFromYearBeginning } from "../utils/genereteDateFromYearBeginning";
import { ScrollView } from "react-native";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const dateFromYearStart = genereteDatesFromYearBeginning();

const minuumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minuumSummaryDatesSizes - dateFromYearStart.length;

export function Home() {
  return (
    <Container>
      <HeaderScreen />
      <WeekDays>
        {weekDays.map((weekDays, i) => (
          <WeekDay style={{ width: DAY_SIZE }} key={`${weekDays}-${i}`}>
            {weekDays}
          </WeekDay>
        ))}
      </WeekDays>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Days>
          {dateFromYearStart.map((date) => (
            <HabitDays key={date.toISOString()} />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <DaysComplement
                key={i}
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              ></DaysComplement>
            ))}
        </Days>
        
      </ScrollView>
    </Container>
  );
}
