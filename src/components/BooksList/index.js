import React from 'react'
import {Link} from 'react-router-dom'

const BookItem = (book) => (
  <div className="list-group-item">
    <Link to={`/book/${book.id}`}>
      {book.title}
    </Link>
  </div>
)

export default ({books}) => (
  <div className="list-group">
    {books.map(BookItem)}
  </div>
)
