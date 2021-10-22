import { ReactNode } from 'react'
import { Drawer } from '../../drawer/Drawer'
import * as S from './AuthenticatedTemplate.styles'

type Props = {
  active: 'Meus Vants' | 'Novo Vant' | 'Meus voos' | 'Perfil' | 'Monitoramento'
  children: ReactNode
}

export const AuthenticatedTemplate = ({active, children}: Props) => {
  return (
    <S.Container>
      <Drawer active={active} />
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}
