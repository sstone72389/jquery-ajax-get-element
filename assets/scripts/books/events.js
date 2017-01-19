'use strict';

const booksApi = require('./api.js');
const booksUi = require('./ui.js');
const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  let book = getFormFields($('#book-search'));

  if (book.id.length === 0) {
    booksApi.index()
    .then(booksUi.onSuccess)
    .catch(booksUi.onError);
  } else {
    booksApi.show(book.id)
    .then(booksUi.onSuccess)
    .catch(booksUi.onError);
  }
};

module.exports = {
  onGetBooks,
};
