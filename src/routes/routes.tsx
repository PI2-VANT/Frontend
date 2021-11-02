import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Authenticated/Home/Home'
import { Login } from '../pages/Login/Login'
import { Signup } from '../pages/Signup/Signup'
import { MyVants } from '../pages/MyVants'
import { MyFlights } from '../pages/MyFlights'
import { Monitoring } from '../pages/Monitoring'
import { VantInfo } from '../pages/VantInfo'
import { CreateVant } from '../pages/createVant'
import PrivateRoute from './protectedRoutes'
import { Profile } from '../pages/Profile/Profile'
import { Detail } from '../pages/Detail'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/monitoring' component={Monitoring} />
      <PrivateRoute path='/myVants' component={MyVants} />
      <PrivateRoute path='/myFlights' component={MyFlights} />
      <PrivateRoute path='/profile' component={Profile} />
      <PrivateRoute path="/vantInfo" component={VantInfo} />
      <PrivateRoute path="/createVant" component={CreateVant} />
      <PrivateRoute path='/details' component={Detail} />
    </Switch>
  )
}

export { Routes }
