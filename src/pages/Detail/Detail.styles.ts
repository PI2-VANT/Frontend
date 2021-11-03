import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const StyledButton = styled(Button)`
  && {
    border-radius: 200px;
    background: #032338;
    margin: 1rem 0;
    width: 250px;
    align-self: center;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChartContainer = styled.div`
  align-self: center;
  margin: 5rem 0;
`
export const GaugeContainer = styled.div`
  align-self: center;
  display: grid;
  max-width: 70%;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
`
