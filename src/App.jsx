
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Contact from './pages/Contact'
import Team from './pages/Team'
import About from './pages/About'



function App() {

  return (
     <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/product-detail">
        <ProductDetailPage />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
       <Route path="/about">
        <About />    
      </Route>
       <Route path="/signup">
          <SignUp />
       </Route>
    </Switch>
  )
}

export default App
