/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
 *
 * OpenAPI spec version: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSmsWorksApi);
  }
}(this, function(expect, TheSmsWorksApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSmsWorksApi.DeletedMessageResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeletedMessageResponse', function() {
    it('should create an instance of DeletedMessageResponse', function() {
      // uncomment below and update the code to test DeletedMessageResponse
      //var instane = new TheSmsWorksApi.DeletedMessageResponse();
      //expect(instance).to.be.a(TheSmsWorksApi.DeletedMessageResponse);
    });

    it('should have the property messageid (base name: "messageid")', function() {
      // uncomment below and update the code to test the property messageid
      //var instane = new TheSmsWorksApi.DeletedMessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TheSmsWorksApi.DeletedMessageResponse();
      //expect(instance).to.be();
    });

  });

}));
