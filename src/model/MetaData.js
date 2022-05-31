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

import ApiClient from '../ApiClient';

/**
* The MetaData model module.
* @module model/MetaData
* @version 1.6.0
*/
export default class MetaData {
    /**
    * Constructs a new <code>MetaData</code>.
    * Key/value pair that will be returned to you in the API call response.
    * @alias module:model/MetaData
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>MetaData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MetaData} obj Optional instance to populate.
    * @return {module:model/MetaData} The populated <code>MetaData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaData();
                        
            
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * key of the key/value pair
    * @member {String} key
    */
    key = undefined;
    /**
    * value of the key/value pair
    * @member {String} value
    */
    value = undefined;




}
