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
* The ScheduledMessageResponse model module.
* @module model/ScheduledMessageResponse
* @version 1.6.0
*/
export default class ScheduledMessageResponse {
    /**
    * Constructs a new <code>ScheduledMessageResponse</code>.
    * @alias module:model/ScheduledMessageResponse
    * @class
    * @param messageid {String} 
    * @param status {String} 
    */

    constructor(messageid, status) {
        
        
        this['messageid'] = messageid;
        this['status'] = status;
        
    }

    /**
    * Constructs a <code>ScheduledMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ScheduledMessageResponse} obj Optional instance to populate.
    * @return {module:model/ScheduledMessageResponse} The populated <code>ScheduledMessageResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledMessageResponse();
                        
            
            if (data.hasOwnProperty('messageid')) {
                obj['messageid'] = ApiClient.convertToType(data['messageid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} messageid
    */
    messageid = undefined;
    /**
    * @member {String} status
    */
    status = undefined;




}
