import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  max-width: 251px;
  max-height: 153px;

`

export const DataTitle = styled(Typography)`
    &&{
        color: #032338;
        font-size: 65px;
        font: bolder;
        align-items: center;
    }

`

export const Title = styled(Typography)`
    &&{
        color: #032338;
        font-size: 25px;
        font: bold;
    }

`