import styled from "styled-components/native";

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #09090a;
`

export const NewHabit = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    border: 1px solid #8B5CF6;
    border-radius: 8px;
    height: 44px;
    padding: 12px;
`

export const Text = styled.Text`
    color: #fff;
    margin-left: 12px;
    font-weight: 400;
`