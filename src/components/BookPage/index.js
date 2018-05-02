import React, { Component } from 'react'
import BooksList from '../BooksList'
import {getBookById} from '../../controllers/booksController'
import * as cartController from '../../controllers/cartController'

class BookPage extends Component {
  state = {
    book: 'loading'
  }
  constructor (props) {
    super(props)

    getBookById(props.bookId)
      .then(book => this.setState({book}))
      .catch(err => {
        // TODO: show an error message
      })
  }
  render () {
    if (this.state.book === 'loading') {
      return (
        <div>Loading data...</div>
      )
    }
    return (
      <div>
        <h1>{this.state.book.title}</h1>
        <div>
          {
            this.state.book.isInCart
              ? 'This book is in your cart'
              : <button className="btn btn-primary" onClick={() => this.addToCart()}>Add to cart</button>
          }
        </div>
        <strong>
        Author: {
          this.state.book.authors
            ? this.state.book.authors.join(', ')
            : 'Unknown author'
        }</strong>
        <p>{this.state.book.description}</p>
        <img src={this.state.book.image} />
      </div>
    )
  }
  addToCart () {
    // Optimistically updating the UI
    this.setState({
      book: {
        ...this.state.book,
        isInCart: true,
      }
    })
    cartController.addToCart({id: this.props.bookId, title: this.state.book.title})
  }
}

export default BookPage
