(function() {

  /**
    * 8villages Messages - /src/components/validator.js
    *
    * Copyright (c) 2014 - 2015 8villages, Inc - All Rights Reserved
    *
    * Unauthorized copying of this file, via any medium is strictly prohibited
    * Proprietary and confidential
    *
    * Written by Tian Permana <t.permana@8villages.com>, December 2014
    *
    */


  var amanda = require('amanda'),
    validator = require('validator'),
    _ = require('underscore'),
    assert = require('assert'),
    str = require('string'),
    jsonSchemaValidator = amanda('json')

  module.exports = function( data, schema, done ){

    var options = {}

    var isUUID = function( property, propertyValue, attributeValue, propertyAttributes, callback ) {

      if ( attributeValue ) {
        if ( validator.isUUID( propertyValue ) ) {
          return callback()
        }
        else{
          this.addError( property + ' is not a valid UUID' )
          return callback()
        }
      }
    }

    var isMessageStatus = function( property, propertyValue, attributeValue, propertyAttributes, callback ) {

      if ( attributeValue ) {

        var messageStatuses = ['queued', 'received', 'processed', 'sending', 'sent', 'delivered', 'undelivered', 'failed']

        if ( _.indexOf( messageStatuses, propertyValue ) === -1 ) {

          this.addError( propertyValue + ' is not valid message status' )
          return callback()
        }
        else {
          return callback()
        }
      }

    }

    var isE164 = function( property, propertyValue, attributeValue, propertyAttributes, callback ) {

      if ( attributeValue ) {
        if ( str( propertyValue ).startsWith("+1") ) {
          return callback()
        }
        else{
          this.addError( propertyValue + ' is not a valid E.164 format number' )
          return callback()
        }
      }
    }

    jsonSchemaValidator.addAttribute( 'uuid', isUUID )
    jsonSchemaValidator.addAttribute( 'messageStatus', isMessageStatus )
    jsonSchemaValidator.addAttribute( 'e164', isE164 )

    jsonSchemaValidator.validate( data, schema, function( error ){

      if ( error ) {

        var errorMessage = {
          code: 'INVALID_PARAMETERS',
          message: error[0].message
        }

        done( errorMessage )

        return
      }

      done()

    })
  }


})()
