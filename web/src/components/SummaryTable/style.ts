import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
`

export const Article = styled.section`
    display: grid;
    grid-template-rows: repeat(7, minmax(0, 1fr));
    grid-auto-flow: row;
    gap: 12px;
`

export const DaysWeek = styled.div`
    color: #a1a1aa;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
`

export const Days = styled.div`
    display: grid;
    grid-template-rows: repeat(7, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 12px;
`

export const Day = styled.div`
    width: 40px;
    height: 40px;
    background: #18181B;
    border: 2px solid #27272A;
    border-radius: 8px;
    opacity: 0.4;
    cursor: not-allowed;
`