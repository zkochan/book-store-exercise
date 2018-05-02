import {isBookInCart} from './cartController'

export function getBookById (id) {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(res => res.json())
    .then(book => ({
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.small,
      isInCart: isBookInCart(id),
    }))
}

export function findBooks (searchedText) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchedText}`)
    .then(res => res.json())
    .then(books => books ? books.items.map(book => ({id: book.id, title: book.volumeInfo.title})) : [])
}
