# Retrieves application dependencies

module.exports = (root) ->

  dependencies =
    express: require 'express'
    mongoose: require 'mongoose'
    coffeekup: require root + '/vendor/coffeekup.js'
    backbone: require 'backbone'
    browserify: require 'browserify'
    jsmin: require 'jsmin'
    formidable: require 'formidable'
    imagemagick: require 'imagemagick'
    io: require 'socket.io'
  
  dependencies.lib = (name) -> require(root + '/app/lib/' + name + '.js')(dependencies)

  dependencies