import React from 'react'
import { useCookies } from 'react-cookie'

import { Route, Redirect, RouteProps } from 'react-router-dom'

export type PrivateRouteProps = {
  component: React.ReactNode
} & RouteProps

const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
  const [getCookie] = useCookies(['vant-auth'])

  if (!getCookie['vant-auth']) {
    return <Redirect to='/' />
  }

  return <Route {...rest} component={component} />
}

export default PrivateRoute
