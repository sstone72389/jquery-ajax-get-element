'use strict'

const app = require('../app.js')

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET'
  })
}

const show = function (bookId) {
  return $.ajax({
    url: app.host + '/books/' + bookId,
    method: 'GET'
  })
}
module.exports = {
  index,
  show
}
