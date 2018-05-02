import React, {Component} from 'react'
import * as cartController from '../../controllers/cartController'
import BooksList from '../BooksList'

class CartPage extends Component {
  state = {
    books: cartController.getBooksFromCart()
  }
  render () {
    return <BooksList books={this.state.books} />
  }
}

export default CartPage
