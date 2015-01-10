var chai = require("chai"),
  expect = chai.expect,
  should = chai.should(),
  cona = require('./../')

describe( "Components", function() {

  describe( "generateDate", function() {

    it( "Should generate date object", function( done ) {

      var date = cona.generateDate()

      should.exist( date )

      date.should.be.an( 'object' )

      done()

    })

    it( "Should generate date object with miliseconds", function( done ) {

      var date = cona.generateDate({ miliseconds: true })

      should.exist( date )

      date.should.be.an( 'object' )

      should.exist( date.miliseconds )

      done()

    })

  })

  describe( "generateId", function() {

    it( "Should generate Id", function( done ) {

      var id = cona.generateId()

      should.exist( id )

      id.should.be.a( 'string' )

      done()

    })

  })

  describe( "hash", function() {

    it( "Should hash string using md5", function( done ) {

      var hashed = cona.hash( 'secret', 'md5' )

      should.exist( hashed )

      hashed.should.be.a( 'string' )

      done()

    })

  })

})
