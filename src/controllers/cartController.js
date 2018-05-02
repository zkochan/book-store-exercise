const BOOKS_KEY = 'books'

// NOTE: it might be enough to store the book ID and request
// the rest of the data from the API
// It depends from the requirements
export function addToCart (book) {
  const booksInCart = getBooksFromCart()
  if (booksInCart.some(existingBook => existingBook.id === book.id)) {
    return
  }
  localStorage.setItem(BOOKS_KEY, JSON.stringify([...booksInCart, book]))
}

export function getBooksFromCart () {
  try {
    return JSON.parse(localStorage.getItem(BOOKS_KEY)) || []
  } catch (err) {
    return []
  }
}

export function isBookInCart (bookId) {
  const booksInCart = getBooksFromCart()
  return booksInCart.some(existingBook => existingBook.id === bookId)
}