import React, { Component } from 'react'
import BooksList from '../BooksList'
import * as booksController from '../../controllers/booksController'

class HomePage extends Component {
  state = {
    books: []
  }
  render () {
    return (
      <div>
        <input
          type="text"
          onKeyUp={(ev) => this.searchBooks(ev.target.value)}
          placeholder="Type the name of the book..." />
        <BooksList books={this.state.books} />
      </div>
    )
  }
  searchBooks (searchedText) {
    if (!searchedText) {
      this.setState({books: []})
      return
    }
    booksController.findBooks(searchedText)
      .then(books => this.setState({books: books}))
      .catch(err => {
        // TODO: show an error message
      })
  }
}

export default HomePage
