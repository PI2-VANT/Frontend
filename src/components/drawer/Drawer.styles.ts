import { Drawer } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const Container = styled(Drawer)``

export const List = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

export const ListItem = styled.div<{
  active: boolean
}>`
  ${({ active }) => css`
    cursor: pointer;
    background: ${active ? 'rgba(0, 150, 136, 0.4)' : 'transparent'};
    display: flex;
    border-radius: 0.3rem;
    padding: 0.5rem;
    > p {
      margin-left: 2rem;
    }

    transition: background 0.3s;

    &:hover {
      background: rgba(0, 150, 136, 0.4);
    }
  `}
`
