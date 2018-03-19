/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiKeyResponse', 'model/ExtendedErrorModel', 'model/Login', 'model/TokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiKeyResponse'), require('../model/ExtendedErrorModel'), require('../model/Login'), require('../model/TokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.TheSmsWorksApi) {
      root.TheSmsWorksApi = {};
    }
    root.TheSmsWorksApi.AuthApi = factory(root.TheSmsWorksApi.ApiClient, root.TheSmsWorksApi.ApiKeyResponse, root.TheSmsWorksApi.ExtendedErrorModel, root.TheSmsWorksApi.Login, root.TheSmsWorksApi.TokenResponse);
  }
}(this, function(ApiClient, ApiKeyResponse, ExtendedErrorModel, Login, TokenResponse) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the keySecret operation.
     * @callback module:api/AuthApi~keySecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates an API Key/Secret pair
     * @param {String} customerid The Customer ID
     * @param {module:api/AuthApi~keySecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKeyResponse}
     */
    this.keySecret = function(customerid, callback) {
      var postBody = null;

      // verify the required parameter 'customerid' is set
      if (customerid === undefined || customerid === null) {
        throw new Error("Missing the required parameter 'customerid' when calling keySecret");
      }


      var pathParams = {
      };
      var queryParams = {
        'customerid': customerid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiKeyResponse;

      return this.apiClient.callApi(
        '/auth/getApiKey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates a Json Web Token
     * @param {module:model/Login} credentials API Key &amp; Secret
     * @param {module:api/AuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenResponse}
     */
    this.login = function(credentials, callback) {
      var postBody = credentials;

      // verify the required parameter 'credentials' is set
      if (credentials === undefined || credentials === null) {
        throw new Error("Missing the required parameter 'credentials' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TokenResponse;

      return this.apiClient.callApi(
        '/auth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
