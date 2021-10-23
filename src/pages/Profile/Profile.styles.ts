import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  max-width: 170px;
  align-self: center;
`

export const StyledButton = styled(Button)`
  && {
    border-radius: 200px;
    background: #032338;
    margin: 1rem 0;
  }
`
