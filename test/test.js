var chai = require("chai"),
  expect = chai.expect,
  should = chai.should(),
  Components = require('./../')

describe( "Components", function() {

  describe( "generateDate", function() {

    it( "Should generate date object", function( done ) {

      var date = Components.generateDate()

      should.exist( date )

      date.should.be.an( 'object' )

      done()

    })

    it( "Should generate date object with miliseconds", function( done ) {

      var date = Components.generateDate({ miliseconds: true })

      should.exist( date )

      date.should.be.an( 'object' )

      should.exist( date.miliseconds )

      done()

    })

  })

  describe( "generateId", function() {

    it( "Should generate Id", function( done ) {

      var id = Components.generateId()

      should.exist( id )

      id.should.be.a( 'string' )

      done()

    })

  })

})
