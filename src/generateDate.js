(function(){

  var moment = require('moment'),
    assert = require('assert')

  module.exports = function( options ){

    var now = {
      'timestamp': moment().unix(),
      'iso': moment().toISOString()
    }

    if ( options ) {

      if ( options.miliseconds === true ) {
        now.miliseconds = parseInt( moment().valueOf() )
      }
    }

    return now
  }


})()
