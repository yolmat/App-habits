import styled from "styled-components"

export const HeaderPage = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Logo = styled.img`

`

export const NewHabit = styled.button`
    border: 1px solid #8B5CF6;
    border-radius: 8px;
    padding: 16px 24px;
    background: transparent;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;

    :hover {
        border: 1px solid #c4b5fd;
    }
`