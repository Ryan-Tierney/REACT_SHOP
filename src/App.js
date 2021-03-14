import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Products'
import Cart from './components/Cart'
import About from './components/About'
import Products from './components/Home'
import { Provider } from 'react-redux'
import  store  from './store.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cart" component={Cart} />
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
