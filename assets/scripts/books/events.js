'use strict'

const booksApi = require('./api.js')
const booksUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('here is the data: ' + data)
  const book = data.book
  console.log('here is the book' + book)

  if (book.id.length !== 0) {
    booksApi.show(book.id)
    .then(booksUi.onSuccess)
    .catch(booksUi.onError)
  } else {
    console.warn('you forgot your ID Dummmy!!!')
  }
}

const onGetBooks = function (event) {
  event.preventDefault()

  booksApi.index()
  .then(booksUi.onSuccess)
  .catch(booksUi.onError)
}

module.exports = {
  onGetBooks,
  onGetBook

}
