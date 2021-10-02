import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Authenticated/Home/Home'
import { Login } from '../pages/Login/Login'
import { Signup } from '../pages/Signup/Signup'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}

export { Routes }
