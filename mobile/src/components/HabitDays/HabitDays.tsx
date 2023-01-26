import { Dimensions } from 'react-native';
import { Day, } from './style'

const WEEK_DAYS = 7

const SCREEN_HORIZONTAL_PADDING = (32* 2) /5

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

export function HabitDays() {
    return (
            <Day 
            style={{width: DAY_SIZE, height: DAY_SIZE}} activeOpacity={0.4}/>
    )
}