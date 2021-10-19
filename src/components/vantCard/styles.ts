import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import CardContent from '@mui/material/CardContent';

export const Container = styled.div`
    &&{
        max-width: 280px;
        align-items: center;
        justify-content: center;
    }
`

export const Image = styled.img`
    &&{
        width: 280px;
        height: 153px;
    }
`

export const CardContainer = styled(CardContent)`
    &&{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 9px;
    }
`

export const Title = styled(Typography)`
    &&{
        color: #032338;
        font-size: 20px;
        font: bold;
        margin-bottom: 9px;
    }

`