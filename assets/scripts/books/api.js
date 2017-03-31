'use strict'

const app = require('../app.js')

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: app.host + '/books/' + data.book.id,
    method: 'PATCH',
    data: data  // FYI - value can be anything as long as it matches the parameter, e.g. data: somethingsomething
  })
}

const create = function (data) {
  return $.ajax({
    url: app.host + '/books',
    method: 'POST',
    data: data  // FYI - value can be anything as long as it matches the parameter, e.g. data: somethingsomething
  })
}
module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
