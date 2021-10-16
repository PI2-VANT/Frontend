import { Button } from '@material-ui/core'
import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: auto 0;
`

export const Image = styled.img`
  max-width: 280px;
  align-self: center;
`

export const StyledButton = styled(Button)`
  && {
    border-radius: 200px;
    background: #032338;
    margin: 1rem 0;
    color: white;

    transition: color 0.5s;

    &:hover {
      color: #032338
    }
  }
`
