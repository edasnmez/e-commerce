
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Contact from './pages/Contact'
import Team from './pages/Team'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import OrderPage from './pages/OrderPage'

import { autoLogin } from './store/actions/clientActions';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategories } from "./store/actions/categoryActions";
import ShoppingCard from './components/ShoppingCard'
import PrivateRoute from "./components/PrivateRoute"; 
import PreviousOrdersPage from './pages/PreviousOrdersPage'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin()); 
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
     <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
     {/* ProductDetailPage en spesifik */}
      <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetailPage} />

      {/* ShopPage için kategori seçimi */}
      <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />

      {/* Genel /shop route */}
      <Route exact path="/shop" component={ShopPage} />

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
       <Route path="/login">
          <Login />
       </Route>
       <Route path="/shopping-card">
          <ShoppingCard />
       </Route>
        <PrivateRoute path="/order" component={OrderPage} />
        <PrivateRoute path="/previous-orders" component={PreviousOrdersPage}/>

    </Switch>
  )

}

export default App
