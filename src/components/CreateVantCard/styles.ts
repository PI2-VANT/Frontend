import { Button, Typography } from '@material-ui/core'
import { Box } from '@material-ui/system'
import styled from 'styled-components'

export const Container = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 60px;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(158, 158, 158, 0.1);
    border-radius: 8px;
    .input {
      margin: 1rem 0;
    }
  }
`

export const Logo = styled.img`
  max-width: 170px;
  align-self: center;
`

export const Title = styled(Typography)`
    &&{
        margin-bottom: 9px;
    }
`

export const StyledButton = styled(Button)`
  && {
    border-radius: 200px;
    background: #032338;
    margin: 1rem 0;
  }
`

export const Link = styled(Typography)`
  & > span {
    text-decoration: underline;
    color: #032338;
    cursor: pointer;
    height: 53px;
  }
`
