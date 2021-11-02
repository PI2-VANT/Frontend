import styled from 'styled-components'
import { Button } from '@material-ui/core'


export const StyledButton = styled(Button)`
  && {
    border-radius: 200px;
    background: #032338;
    margin: 1rem 0;
  }
`
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const ChartContainer = styled.div`
    max-width: 70%;
    min-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;

`
export const ChartContant = styled.div`
    margin-top: 5%;
    max-width: 70%;
    min-width: 700px;
    height: 40%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 10%;
    align-items: center;
    justify-content: center;
`




