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
* The ScheduledBatchResponse model module.
* @module model/ScheduledBatchResponse
* @version 1.6.0
*/
export default class ScheduledBatchResponse {
    /**
    * Constructs a new <code>ScheduledBatchResponse</code>.
    * @alias module:model/ScheduledBatchResponse
    * @class
    * @param batchid {String} 
    * @param status {String} 
    */

    constructor(batchid, status) {
        
        
        this['batchid'] = batchid;
        this['status'] = status;
        
    }

    /**
    * Constructs a <code>ScheduledBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ScheduledBatchResponse} obj Optional instance to populate.
    * @return {module:model/ScheduledBatchResponse} The populated <code>ScheduledBatchResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledBatchResponse();
                        
            
            if (data.hasOwnProperty('batchid')) {
                obj['batchid'] = ApiClient.convertToType(data['batchid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} batchid
    */
    batchid = undefined;
    /**
    * @member {String} status
    */
    status = undefined;




}
