import { CssBaseline } from '@material-ui/core'
import { Router } from 'react-router-dom'
import { Routes } from './routes/routes'
import history from './routes/services/history'

function App() {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  )
}
export default App
