(function(){

  var moment = require('moment')

  module.exports = function( options ){

    var now = {
      'timestamp': moment().unix(),
      'iso': moment().toISOString(),
      'miliseconds': parseInt( moment().valueOf() )
    }

    return now
  }


})()
