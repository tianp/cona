(function(){

  var crypto = require('crypto')

  module.exports = function( string, algorithm ){

    if ( !string || !algorithm ) {
      return
    }

    switch ( algorithm ) {

      case 'md5':

        return crypto.createHash('md5').update( password ).digest('hex')

      break
    }    

  }

})()
