import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Authenticated/Home/Home'
import { Login } from '../pages/Login/Login'
import { Signup } from '../pages/Signup/Signup'
import { MyVants } from '../pages/MyVants'
import { MyFlights } from '../pages/MyFlights'
import PrivateRoute from './protectedRoutes'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/myVants" component={MyVants} />
      <PrivateRoute path="/myFlights" component={MyFlights} />
    </Switch>
  )
}

export { Routes }
