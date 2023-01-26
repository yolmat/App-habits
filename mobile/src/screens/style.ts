import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #09090a;
    height: 100%;
    padding: 20px 10px 0 10px;
`

export const WeekDays = styled.View`
    display: flex;
    flex-direction: row;
    margin: 24px 0 8px 0;
    align-items: center;
    justify-content: center;
`

export const WeekDay = styled.Text`
    color: #A1A1AA;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin: 4px;
`

export const Days = styled.View`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`

export const DaysComplement = styled.View`
    background: #18181b;
    border: 2px solid #27272A;
    border-radius: 8px;
    margin: 4px;
    opacity: 0.4;
`