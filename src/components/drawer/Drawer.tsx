import { Divider, Typography, Box } from '@material-ui/core'

import LocalAirportIcon from '@material-ui/icons/LocalAirport'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import { useCookies } from 'react-cookie'
import { Avatar } from '../avatar/Avatar'
import * as S from './Drawer.styles'
import history from '../../routes/services/history'

const drawerWidth = 240

type Item = {
  name: string
  page?: string
  icon: any
}

const items: Item[] = [
  { name: 'Meus Vants', page: '/home', icon: <LocalAirportIcon /> },
  { name: 'Novo Vant', page: '/vants', icon: <AddCircleIcon /> },
  { name: 'Meus voos', page: '/flights', icon: <FlightTakeoffIcon /> },
  { name: 'Perfil', page: '/profile', icon: <AccountCircleIcon /> },
  { name: 'Sair', icon: <PowerSettingsNewIcon /> },
]

type Props = {
  active: 'Meus Vants' | 'Novo Vant' | 'Meus voos' | 'Perfil' | 'Monitoramento'
}

export const Drawer = ({ active }: Props) => {
  // eslint-disable-next-line no-unused-vars
  const [getCookie, _, removeCookie] = useCookies(['vant-auth'])

  const handleItemClick = (item: Item) => {
    if (item.page) {
      history.push(item.page)
    }

    if (item.name === 'Sair') {
      removeCookie('vant-auth')
    }
  }
  return (
    <S.Container
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Box
        display='flex'
        flexDirection='column'
        sx={{
          backgroundColor: '#009688',
          paddingLeft: '2rem',
          paddingY: '4rem',
          gap: '1rem',
        }}
      >
        <Avatar name={getCookie['vant-auth'].name} />
        <Typography
          variant='h6'
          color='white'
        >{`Olá, ${getCookie['vant-auth'].name}`}</Typography>
      </Box>
      <Divider />

      <S.List>
        {items.map((item, index) => (
          <S.ListItem
            key={item.name}
            active={active === item.name}
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
            <p>{item.name}</p>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  )
}
