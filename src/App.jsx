
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'


function App() {

  return (
     <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App
