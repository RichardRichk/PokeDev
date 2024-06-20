import styled from "styled-components"

export const Button = styled.TouchableOpacity` 
    width: 100%;
    height: ${props => `${props.height}`};
    background-color: #b81414;
    border-radius: 10px;
    justify-content:center;
    margin: ${props => `${props.margin}`};
`

export const TextButton = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    align-self: center;
`