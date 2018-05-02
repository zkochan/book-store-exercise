import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './components/HomePage'
import BookPage from './components/BookPage'
import CartPage from './components/CartPage'
import {Link, Switch, Route} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <header className="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav">
            <li className="nav-item mr-auto">
              <Link className="nav-link" to="/">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/book/:bookId" component={({match}) => <BookPage bookId={match.params.bookId}/>} />
        </Switch>
      </div>
    )
  }
}

export default App
