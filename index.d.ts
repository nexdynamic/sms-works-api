declare module "ApiClient" {
    export default ApiClient;
    /**
    * @module ApiClient
    * @version 1.9.0
    */
    /**
    * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
    * application to use this class directly - the *Api and model classes provide the public API for the service. The
    * contents of this file should be regarded as internal but are documented for completeness.
    * @alias module:ApiClient
    * @class
    */
    class ApiClient {
        /**
        * Returns a boolean indicating if the parameter could be JSON.stringified
        * @param param The actual parameter
        * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
        */
        static canBeJsonified(str: any): boolean;
        /**
        * Parses an ISO-8601 string representation or epoch representation of a date value.
        * @param {String} str The date value as a string.
        * @returns {Date} The parsed date object.
        */
        static parseDate(str: string): Date;
        /**
        * Converts a value to the specified type.
        * @param {(String|Object)} data The data to convert, as a string or object.
        * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
        * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
        * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
        * all properties on <code>data<code> will be converted to this type.
        * @returns An instance of the specified type or null or undefined if data is null or undefined.
        */
        static convertToType(data: (string | any), type: (string | Array<string> | any | Function)): any;
        /**
        * Constructs a new map or array model from REST data.
        * @param data {Object|Array} The REST data.
        * @param obj {Object|Array} The target object or array.
        */
        static constructFromObject(data: any | any[], obj: any | any[], itemType: any): void;
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * Overrides the default value set in spec file if present
         * @param {String} basePath
         */
        constructor(basePath?: string);
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://api.thesmsworks.co.uk/v1
         */
        basePath: string;
        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        authentications: Array<string>;
        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
        defaultHeaders: Array<string>;
        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        timeout: number;
        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        cache: boolean;
        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        enableCookies: boolean;
        agent: any;
        requestAgent: any;
        plugins: any;
        /**
        * Returns a string representation for an actual parameter.
        * @param param The actual parameter.
        * @returns {String} The string representation of <code>param</code>.
        */
        paramToString(param: any): string;
        /**
         * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
         * NOTE: query parameters are not handled here.
         * @param {String} path The path to append to the base URL.
         * @param {Object} pathParams The parameter values to append.
         * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
         * @returns {String} The encoded path with parameter values substituted.
         */
        buildUrl(path: string, pathParams: any, apiBasePath: string): string;
        /**
        * Checks whether the given content type represents JSON.<br>
        * JSON content type examples:<br>
        * <ul>
        * <li>application/json</li>
        * <li>application/json; charset=UTF8</li>
        * <li>APPLICATION/JSON</li>
        * </ul>
        * @param {String} contentType The MIME content type to check.
        * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
        */
        isJsonMime(contentType: string): boolean;
        /**
        * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
        * @param {Array.<String>} contentTypes
        * @returns {String} The chosen content type, preferring JSON.
        */
        jsonPreferredMime(contentTypes: Array<string>): string;
        /**
        * Checks whether the given parameter value represents file-like content.
        * @param param The parameter to check.
        * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
        */
        isFileParam(param: any): boolean;
        /**
        * Normalizes parameter values:
        * <ul>
        * <li>remove nils</li>
        * <li>keep files and arrays</li>
        * <li>format to string with `paramToString` for other cases</li>
        * </ul>
        * @param {Object.<String, Object>} params The parameters as object properties.
        * @returns {Object.<String, Object>} normalized parameters.
        */
        normalizeParams(params: any): any;
        /**
        * Builds a string representation of an array-type actual parameter, according to the given collection format.
        * @param {Array} param An array parameter.
        * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
        * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
        * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
        */
        buildCollectionParam(param: any[], collectionFormat: any): string | any[];
        /**
        * Applies authentication headers to the request.
        * @param {Object} request The request object created by a <code>superagent()</code> call.
        * @param {Array.<String>} authNames An array of authentication method names.
        */
        applyAuthToRequest(request: any, authNames: Array<string>): void;
        /**
         * Deserializes an HTTP response body into a value of the specified type.
         * @param {Object} response A SuperAgent response object.
         * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
         * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
         * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
         * all properties on <code>data<code> will be converted to this type.
         * @returns A value of the specified type.
         */
        deserialize(response: any, returnType: (string | Array<string> | any | Function)): any;
        /**
         * Callback function to receive the result of the operation.
         * @callback module:ApiClient~callApiCallback
         * @param {String} error Error message, if any.
         * @param data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Invokes the REST service using the supplied settings and parameters.
         * @param {String} path The base URL to invoke.
         * @param {String} httpMethod The HTTP method to use.
         * @param {Object.<String, String>} pathParams A map of path parameters and their values.
         * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
         * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
         * @param {Object.<String, Object>} formParams A map of form parameters and their values.
         * @param {Object} bodyParam The value to pass as the request body.
         * @param {Array.<String>} authNames An array of authentication type names.
         * @param {Array.<String>} contentTypes An array of request MIME types.
         * @param {Array.<String>} accepts An array of acceptable response MIME types.
         * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
         * constructor for a complex type.
         * @param {String} apiBasePath base path defined in the operation/path level to override the default one
         * @param {module:ApiClient~callApiCallback} callback The callback function.
         * @returns {Object} The SuperAgent request object.
         */
        callApi(path: string, httpMethod: string, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: any, authNames: Array<string>, contentTypes: Array<string>, accepts: Array<string>, returnType: (string | any[] | ObjectFunction), apiBasePath: string, callback: any): any;
        /**
          * Gets an array of host settings
          * @returns An array of host settings
          */
        hostSettings(): {
            url: string;
            description: string;
        }[];
        getBasePathFromSettings(index: any, variables?: {}): string;
    }
    namespace ApiClient {
        namespace CollectionFormatEnum {
            let CSV: string;
            let SSV: string;
            let TSV: string;
            let PIPES: string;
            let MULTI: string;
        }
        /**
         * *
         */
        type CollectionFormatEnum = string;
        let instance: any;
    }
}
declare module "model/BatchMessage" {
    export default BatchMessage;
    /**
     * The BatchMessage model module.
     * @module model/BatchMessage
     * @version 1.9.0
     */
    class BatchMessage {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, sender: any, destinations: any, content: any): void;
        /**
         * Constructs a <code>BatchMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BatchMessage} obj Optional instance to populate.
         * @return {module:model/BatchMessage} The populated <code>BatchMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>BatchMessage</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchMessage</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>BatchMessage</code>.
         * SMS Message Batch
         * @alias module:model/BatchMessage
         * @param sender {String} The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
         * @param destinations {Array.<String>} Telephone numbers of each of the recipients
         * @param content {String} Message to send to the recipient
         */
        constructor(sender: string, destinations: Array<string>, content: string);
        sender: any;
        destinations: any;
        content: any;
        deliveryreporturl: any;
        schedule: any;
        tag: any;
        ttl: any;
        validity: any;
        ai: any;
    }
    namespace BatchMessage {
        let RequiredProperties: string[];
    }
}
declare module "model/BatchMessageResponse" {
    export default BatchMessageResponse;
    /**
     * The BatchMessageResponse model module.
     * @module model/BatchMessageResponse
     * @version 1.9.0
     */
    class BatchMessageResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, batchid: any, status: any): void;
        /**
         * Constructs a <code>BatchMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BatchMessageResponse} obj Optional instance to populate.
         * @return {module:model/BatchMessageResponse} The populated <code>BatchMessageResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>BatchMessageResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchMessageResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>BatchMessageResponse</code>.
         * @alias module:model/BatchMessageResponse
         * @param batchid {String}
         * @param status {String}
         */
        constructor(batchid: string, status: string);
        batchid: any;
        status: any;
    }
    namespace BatchMessageResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/CancelledMessageResponse" {
    export default CancelledMessageResponse;
    /**
     * The CancelledMessageResponse model module.
     * @module model/CancelledMessageResponse
     * @version 1.9.0
     */
    class CancelledMessageResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, messageid: any, status: any): void;
        /**
         * Constructs a <code>CancelledMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CancelledMessageResponse} obj Optional instance to populate.
         * @return {module:model/CancelledMessageResponse} The populated <code>CancelledMessageResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>CancelledMessageResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CancelledMessageResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>CancelledMessageResponse</code>.
         * @alias module:model/CancelledMessageResponse
         * @param messageid {String}
         * @param status {String}
         */
        constructor(messageid: string, status: string);
        messageid: any;
        status: any;
    }
    namespace CancelledMessageResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/CreditsResponse" {
    export default CreditsResponse;
    /**
     * The CreditsResponse model module.
     * @module model/CreditsResponse
     * @version 1.9.0
     */
    class CreditsResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, credits: any): void;
        /**
         * Constructs a <code>CreditsResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CreditsResponse} obj Optional instance to populate.
         * @return {module:model/CreditsResponse} The populated <code>CreditsResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>CreditsResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreditsResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>CreditsResponse</code>.
         * @alias module:model/CreditsResponse
         * @param credits {Number} The number of remaining credits on your SMS Works account. Floating point number.
         */
        constructor(credits: number);
        credits: any;
    }
    namespace CreditsResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/DeletedMessageResponse" {
    export default DeletedMessageResponse;
    /**
     * The DeletedMessageResponse model module.
     * @module model/DeletedMessageResponse
     * @version 1.9.0
     */
    class DeletedMessageResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, messageid: any, status: any): void;
        /**
         * Constructs a <code>DeletedMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/DeletedMessageResponse} obj Optional instance to populate.
         * @return {module:model/DeletedMessageResponse} The populated <code>DeletedMessageResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>DeletedMessageResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeletedMessageResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>DeletedMessageResponse</code>.
         * @alias module:model/DeletedMessageResponse
         * @param messageid {String}
         * @param status {String}
         */
        constructor(messageid: string, status: string);
        messageid: any;
        status: any;
    }
    namespace DeletedMessageResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/ErrorModel" {
    export default ErrorModel;
    /**
     * The ErrorModel model module.
     * @module model/ErrorModel
     * @version 1.9.0
     */
    class ErrorModel {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, message: any): void;
        /**
         * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ErrorModel} obj Optional instance to populate.
         * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ErrorModel</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorModel</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>ErrorModel</code>.
         * @alias module:model/ErrorModel
         * @param message {String}
         */
        constructor(message: string);
        message: any;
    }
    namespace ErrorModel {
        let RequiredProperties: string[];
    }
}
declare module "model/ExtendedErrorModel" {
    export default ExtendedErrorModel;
    /**
     * The ExtendedErrorModel model module.
     * @module model/ExtendedErrorModel
     * @version 1.9.0
     */
    class ExtendedErrorModel {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, message: any, errorCode: any, status: any): void;
        /**
         * Constructs a <code>ExtendedErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ExtendedErrorModel} obj Optional instance to populate.
         * @return {module:model/ExtendedErrorModel} The populated <code>ExtendedErrorModel</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ExtendedErrorModel</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtendedErrorModel</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>ExtendedErrorModel</code>.
         * @alias module:model/ExtendedErrorModel
         * @implements module:model/ErrorModel
         * @param message {String}
         * @param errorCode {Number} Numeric code used to identify the error. Integer.
         * @param status {String}
         */
        constructor(message: string, errorCode: number, status: string);
        message: any;
        errorCode: any;
        status: any;
        permanent: any;
    }
    namespace ExtendedErrorModel {
        let RequiredProperties: string[];
    }
}
declare module "model/MetaData" {
    export default MetaData;
    /**
     * The MetaData model module.
     * @module model/MetaData
     * @version 1.9.0
     */
    class MetaData {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>MetaData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/MetaData} obj Optional instance to populate.
         * @return {module:model/MetaData} The populated <code>MetaData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>MetaData</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MetaData</code>.
         */
        static validateJSON(data: any): boolean;
        key: any;
        value: any;
    }
}
declare module "model/MessageMetadata" {
    export default MessageMetadata;
    /**
     * The MessageMetadata model module.
     * @module model/MessageMetadata
     * @version 1.9.0
     */
    class MessageMetadata {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>MessageMetadata</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/MessageMetadata} obj Optional instance to populate.
         * @return {module:model/MessageMetadata} The populated <code>MessageMetadata</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>MessageMetadata</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageMetadata</code>.
         */
        static validateJSON(data: any): boolean;
        schema: any;
    }
}
declare module "model/Message" {
    export default Message;
    /**
     * The Message model module.
     * @module model/Message
     * @version 1.9.0
     */
    class Message {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, sender: any, destination: any, content: any): void;
        /**
         * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/Message} obj Optional instance to populate.
         * @return {module:model/Message} The populated <code>Message</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>Message</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Message</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>Message</code>.
         * SMS message object
         * @alias module:model/Message
         * @param sender {String} The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
         * @param destination {String} Telephone number of the recipient
         * @param content {String} Message to send to the recipient. Content can be up to 1280 characters in length. Messages of 160 characters or fewer are charged 1 credit. If your message is longer than 160 characters then it will be broken down in to chunks of 153 characters before being sent to the recipient's handset, and you will be charged 1 credit for each 153 characters. Messages sent to numbers registered outside the UK will be typically charged double credits, but for certain countries may be charged fractions of credits (e.g. 2.5). Please contact us for rates for each country.
         */
        constructor(sender: string, destination: string, content: string);
        sender: any;
        destination: any;
        content: any;
        deliveryreporturl: any;
        schedule: any;
        tag: any;
        ttl: any;
        responseemail: any;
        metadata: any;
        validity: any;
        ai: any;
    }
    namespace Message {
        let RequiredProperties: string[];
    }
}
declare module "model/MessageResponseFailurereason" {
    export default MessageResponseFailurereason;
    /**
     * The MessageResponseFailurereason model module.
     * @module model/MessageResponseFailurereason
     * @version 1.9.0
     */
    class MessageResponseFailurereason {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>MessageResponseFailurereason</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/MessageResponseFailurereason} obj Optional instance to populate.
         * @return {module:model/MessageResponseFailurereason} The populated <code>MessageResponseFailurereason</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>MessageResponseFailurereason</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageResponseFailurereason</code>.
         */
        static validateJSON(data: any): boolean;
        code: any;
        details: any;
        permanent: any;
    }
}
declare module "model/MessageResponse" {
    export default MessageResponse;
    /**
     * The MessageResponse model module.
     * @module model/MessageResponse
     * @version 1.9.0
     */
    class MessageResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, content: any, created: any, customerid: any, destination: any, messageid: any, modified: any, schedule: any, status: any, sender: any, tag: any): void;
        /**
         * Constructs a <code>MessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/MessageResponse} obj Optional instance to populate.
         * @return {module:model/MessageResponse} The populated <code>MessageResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>MessageResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>MessageResponse</code>.
         * @alias module:model/MessageResponse
         * @param content {String}
         * @param created {String}
         * @param customerid {String}
         * @param destination {Number}
         * @param messageid {String}
         * @param modified {String}
         * @param schedule {String}
         * @param status {String}
         * @param sender {String}
         * @param tag {String}
         */
        constructor(content: string, created: string, customerid: string, destination: number, messageid: string, modified: string, schedule: string, status: string, sender: string, tag: string);
        batchid: any;
        content: any;
        created: any;
        customerid: any;
        deliveryreporturl: any;
        destination: any;
        failurereason: any;
        id: any;
        identifier: any;
        keyword: any;
        messageid: any;
        modified: any;
        schedule: any;
        status: any;
        sender: any;
        tag: any;
    }
    namespace MessageResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/OTP" {
    export default OTP;
    /**
     * The OTP model module.
     * @module model/OTP
     * @version 1.9.0
     */
    class OTP {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>OTP</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/OTP} obj Optional instance to populate.
         * @return {module:model/OTP} The populated <code>OTP</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>OTP</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTP</code>.
         */
        static validateJSON(data: any): boolean;
        sender: any;
        destination: any;
        length: any;
        template: any;
        validity: any;
        passcode: any;
        metadata: any;
    }
}
declare module "model/OTPResponse" {
    export default OTPResponse;
    /**
     * The OTPResponse model module.
     * @module model/OTPResponse
     * @version 1.9.0
     */
    class OTPResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>OTPResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/OTPResponse} obj Optional instance to populate.
         * @return {module:model/OTPResponse} The populated <code>OTPResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>OTPResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPResponse</code>.
         */
        static validateJSON(data: any): boolean;
        messageid: any;
        status: any;
        credits: any;
        creditsUsed: any;
        messageparts: any;
    }
}
declare module "model/OTPVerify" {
    export default OTPVerify;
    /**
     * The OTPVerify model module.
     * @module model/OTPVerify
     * @version 1.9.0
     */
    class OTPVerify {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>OTPVerify</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/OTPVerify} obj Optional instance to populate.
         * @return {module:model/OTPVerify} The populated <code>OTPVerify</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>OTPVerify</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPVerify</code>.
         */
        static validateJSON(data: any): boolean;
        passcode: any;
    }
}
declare module "model/OTPVerifyResponse" {
    export default OTPVerifyResponse;
    /**
     * The OTPVerifyResponse model module.
     * @module model/OTPVerifyResponse
     * @version 1.9.0
     */
    class OTPVerifyResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>OTPVerifyResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/OTPVerifyResponse} obj Optional instance to populate.
         * @return {module:model/OTPVerifyResponse} The populated <code>OTPVerifyResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>OTPVerifyResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPVerifyResponse</code>.
         */
        static validateJSON(data: any): boolean;
        destination: any;
        status: any;
        passcode: any;
        validity: any;
        metadata: any;
        created: any;
        expires: any;
        modified: any;
    }
}
declare module "model/QueryMetadata" {
    export default QueryMetadata;
    /**
     * The QueryMetadata model module.
     * @module model/QueryMetadata
     * @version 1.9.0
     */
    class QueryMetadata {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>QueryMetadata</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/QueryMetadata} obj Optional instance to populate.
         * @return {module:model/QueryMetadata} The populated <code>QueryMetadata</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>QueryMetadata</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryMetadata</code>.
         */
        static validateJSON(data: any): boolean;
        schema: any;
    }
}
declare module "model/Query" {
    export default Query;
    /**
     * The Query model module.
     * @module model/Query
     * @version 1.9.0
     */
    class Query {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/Query} obj Optional instance to populate.
         * @return {module:model/Query} The populated <code>Query</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>Query</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Query</code>.
         */
        static validateJSON(data: any): boolean;
        status: any;
        credits: any;
        destination: any;
        sender: any;
        keyword: any;
        from: any;
        to: any;
        limit: any;
        skip: any;
        unread: any;
        metadata: any;
    }
}
declare module "model/ScheduledBatchResponse" {
    export default ScheduledBatchResponse;
    /**
     * The ScheduledBatchResponse model module.
     * @module model/ScheduledBatchResponse
     * @version 1.9.0
     */
    class ScheduledBatchResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, batchid: any, status: any): void;
        /**
         * Constructs a <code>ScheduledBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ScheduledBatchResponse} obj Optional instance to populate.
         * @return {module:model/ScheduledBatchResponse} The populated <code>ScheduledBatchResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ScheduledBatchResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledBatchResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>ScheduledBatchResponse</code>.
         * @alias module:model/ScheduledBatchResponse
         * @param batchid {String}
         * @param status {String}
         */
        constructor(batchid: string, status: string);
        batchid: any;
        status: any;
    }
    namespace ScheduledBatchResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/ScheduledMessage" {
    export default ScheduledMessage;
    /**
     * The ScheduledMessage model module.
     * @module model/ScheduledMessage
     * @version 1.9.0
     */
    class ScheduledMessage {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>ScheduledMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ScheduledMessage} obj Optional instance to populate.
         * @return {module:model/ScheduledMessage} The populated <code>ScheduledMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ScheduledMessage</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledMessage</code>.
         */
        static validateJSON(data: any): boolean;
        sender: any;
        content: any;
        destination: any;
        destinations: any;
        schedule: any;
    }
}
declare module "model/ScheduledMessageResponse" {
    export default ScheduledMessageResponse;
    /**
     * The ScheduledMessageResponse model module.
     * @module model/ScheduledMessageResponse
     * @version 1.9.0
     */
    class ScheduledMessageResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, messageid: any, status: any): void;
        /**
         * Constructs a <code>ScheduledMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ScheduledMessageResponse} obj Optional instance to populate.
         * @return {module:model/ScheduledMessageResponse} The populated <code>ScheduledMessageResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ScheduledMessageResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledMessageResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>ScheduledMessageResponse</code>.
         * @alias module:model/ScheduledMessageResponse
         * @param messageid {String}
         * @param status {String}
         */
        constructor(messageid: string, status: string);
        messageid: any;
        status: any;
    }
    namespace ScheduledMessageResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/ScheduledMessagesResponseMessage" {
    export default ScheduledMessagesResponseMessage;
    /**
     * The ScheduledMessagesResponseMessage model module.
     * @module model/ScheduledMessagesResponseMessage
     * @version 1.9.0
     */
    class ScheduledMessagesResponseMessage {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>ScheduledMessagesResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ScheduledMessagesResponseMessage} obj Optional instance to populate.
         * @return {module:model/ScheduledMessagesResponseMessage} The populated <code>ScheduledMessagesResponseMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ScheduledMessagesResponseMessage</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledMessagesResponseMessage</code>.
         */
        static validateJSON(data: any): boolean;
        schema: any;
    }
}
declare module "model/ScheduledMessagesResponse" {
    export default ScheduledMessagesResponse;
    /**
     * The ScheduledMessagesResponse model module.
     * @module model/ScheduledMessagesResponse
     * @version 1.9.0
     */
    class ScheduledMessagesResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any): void;
        /**
         * Constructs a <code>ScheduledMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ScheduledMessagesResponse} obj Optional instance to populate.
         * @return {module:model/ScheduledMessagesResponse} The populated <code>ScheduledMessagesResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ScheduledMessagesResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledMessagesResponse</code>.
         */
        static validateJSON(data: any): boolean;
        status: any;
        id: any;
        batch: any;
        message: any;
    }
}
declare module "model/SendMessageResponse" {
    export default SendMessageResponse;
    /**
     * The SendMessageResponse model module.
     * @module model/SendMessageResponse
     * @version 1.9.0
     */
    class SendMessageResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, messageid: any, status: any, credits: any, creditsUsed: any): void;
        /**
         * Constructs a <code>SendMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/SendMessageResponse} obj Optional instance to populate.
         * @return {module:model/SendMessageResponse} The populated <code>SendMessageResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>SendMessageResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendMessageResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>SendMessageResponse</code>.
         * @alias module:model/SendMessageResponse
         * @param messageid {String}
         * @param status {String}
         * @param credits {Number} The number of remaining credits on your SMS Works account. Floating point number.
         * @param creditsUsed {Number} The number of credits used to send the message. Floating point number.
         */
        constructor(messageid: string, status: string, credits: number, creditsUsed: number);
        messageid: any;
        status: any;
        credits: any;
        creditsUsed: any;
    }
    namespace SendMessageResponse {
        let RequiredProperties: string[];
    }
}
declare module "model/TestResponse" {
    export default TestResponse;
    /**
     * The TestResponse model module.
     * @module model/TestResponse
     * @version 1.9.0
     */
    class TestResponse {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, message: any): void;
        /**
         * Constructs a <code>TestResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/TestResponse} obj Optional instance to populate.
         * @return {module:model/TestResponse} The populated <code>TestResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>TestResponse</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResponse</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>TestResponse</code>.
         * @alias module:model/TestResponse
         * @param message {String}
         */
        constructor(message: string);
        message: any;
    }
    namespace TestResponse {
        let RequiredProperties: string[];
    }
}
declare module "api/BatchMessagesApi" {
    /**
    * BatchMessages service.
    * @module api/BatchMessagesApi
    * @version 1.9.0
    */
    export default class BatchMessagesApi {
        /**
        * Constructs a new BatchMessagesApi.
        * @alias module:api/BatchMessagesApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the batchAnyPost operation.
         * @callback module:api/BatchMessagesApi~batchAnyPostCallback
         * @param {String} error Error message, if any.
         * @param {module:model/BatchMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Sends a collection of unique SMS messages. Batches may contain up to 5000 messages at a time.
         * @param {Object.<String, Object>} messages An array of messages
         * @param {module:api/BatchMessagesApi~batchAnyPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/BatchMessageResponse}
         */
        batchAnyPost(messages: any, callback: any): any;
        /**
         * Callback function to receive the result of the batchBatchidGet operation.
         * @callback module:api/BatchMessagesApi~batchBatchidGetCallback
         * @param {String} error Error message, if any.
         * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Retrieve all messages in a batch with the given batch ID
         * @param {String} batchid The ID of the batch you would like returned
         * @param {module:api/BatchMessagesApi~batchBatchidGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Array.<module:model/MessageResponse>}
         */
        batchBatchidGet(batchid: string, callback: any): any;
        /**
         * Callback function to receive the result of the batchSchedulePost operation.
         * @callback module:api/BatchMessagesApi~batchSchedulePostCallback
         * @param {String} error Error message, if any.
         * @param {module:model/ScheduledBatchResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Schedules a batch of SMS messages to be sent at the date time you specify
         * @param {module:model/BatchMessage} smsMessage Message properties
         * @param {module:api/BatchMessagesApi~batchSchedulePostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/ScheduledBatchResponse}
         */
        batchSchedulePost(smsMessage: any, callback: any): any;
        /**
         * Callback function to receive the result of the batchSendPost operation.
         * @callback module:api/BatchMessagesApi~batchSendPostCallback
         * @param {String} error Error message, if any.
         * @param {module:model/BatchMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Send a single SMS message to multiple recipients.  Batches may contain up to 5000 messages at a time.
         * @param {module:model/BatchMessage} smsMessage Message properties
         * @param {module:api/BatchMessagesApi~batchSendPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/BatchMessageResponse}
         */
        batchSendPost(smsMessage: any, callback: any): any;
        /**
         * Callback function to receive the result of the batchesScheduleBatchidDelete operation.
         * @callback module:api/BatchMessagesApi~batchesScheduleBatchidDeleteCallback
         * @param {String} error Error message, if any.
         * @param {module:model/CancelledMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Cancels a scheduled SMS message
         * @param {String} batchid The ID of the batch you would like returned
         * @param {module:api/BatchMessagesApi~batchesScheduleBatchidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/CancelledMessageResponse}
         */
        batchesScheduleBatchidDelete(batchid: string, callback: any): any;
    }
}
declare module "api/CreditsApi" {
    /**
    * Credits service.
    * @module api/CreditsApi
    * @version 1.9.0
    */
    export default class CreditsApi {
        /**
        * Constructs a new CreditsApi.
        * @alias module:api/CreditsApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the creditsBalanceGet operation.
         * @callback module:api/CreditsApi~creditsBalanceGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/CreditsResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Returns the number of credits currently available on the account
         * @param {module:api/CreditsApi~creditsBalanceGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/CreditsResponse}
         */
        creditsBalanceGet(callback: any): any;
    }
}
declare module "api/MessagesApi" {
    /**
    * Messages service.
    * @module api/MessagesApi
    * @version 1.9.0
    */
    export default class MessagesApi {
        /**
        * Constructs a new MessagesApi.
        * @alias module:api/MessagesApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the messageSchedulePost operation.
         * @callback module:api/MessagesApi~messageSchedulePostCallback
         * @param {String} error Error message, if any.
         * @param {Array.<module:model/ScheduledMessageResponse>} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Schedules an SMS message to be sent at the date-time you specify
         * @param {module:model/Message} smsMessage Message properties
         * @param {module:api/MessagesApi~messageSchedulePostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Array.<module:model/ScheduledMessageResponse>}
         */
        messageSchedulePost(smsMessage: any, callback: any): any;
        /**
         * Callback function to receive the result of the messageSendPost operation.
         * @callback module:api/MessagesApi~messageSendPostCallback
         * @param {String} error Error message, if any.
         * @param {module:model/SendMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Send an SMS Message
         * @param {module:model/Message} smsMessage Message properties
         * @param {module:api/MessagesApi~messageSendPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/SendMessageResponse}
         */
        messageSendPost(smsMessage: any, callback: any): any;
        /**
         * Callback function to receive the result of the messagesFailedPost operation.
         * @callback module:api/MessagesApi~messagesFailedPostCallback
         * @param {String} error Error message, if any.
         * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Get failed messages matching your search criteria
         * @param {module:model/Query} query
         * @param {module:api/MessagesApi~messagesFailedPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Array.<module:model/MessageResponse>}
         */
        messagesFailedPost(query: any, callback: any): any;
        /**
         * Callback function to receive the result of the messagesInboxPost operation.
         * @callback module:api/MessagesApi~messagesInboxPostCallback
         * @param {String} error Error message, if any.
         * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Get unread uncoming messages matching your search criteria
         * @param {module:model/Query} query
         * @param {module:api/MessagesApi~messagesInboxPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Array.<module:model/MessageResponse>}
         */
        messagesInboxPost(query: any, callback: any): any;
        /**
         * Callback function to receive the result of the messagesMessageidDelete operation.
         * @callback module:api/MessagesApi~messagesMessageidDeleteCallback
         * @param {String} error Error message, if any.
         * @param {module:model/DeletedMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Delete the message with the mathcing messageid
         * @param {String} messageid The ID of the message you would like returned
         * @param {module:api/MessagesApi~messagesMessageidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/DeletedMessageResponse}
         */
        messagesMessageidDelete(messageid: string, callback: any): any;
        /**
         * Callback function to receive the result of the messagesMessageidGet operation.
         * @callback module:api/MessagesApi~messagesMessageidGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/MessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Retrieve a logged message by the message ID
         * @param {String} messageid The ID of the message you would like returned
         * @param {module:api/MessagesApi~messagesMessageidGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/MessageResponse}
         */
        messagesMessageidGet(messageid: string, callback: any): any;
        /**
         * Callback function to receive the result of the messagesPost operation.
         * @callback module:api/MessagesApi~messagesPostCallback
         * @param {String} error Error message, if any.
         * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Retrieve up to 1000 messages matching your search criteria
         * @param {module:model/Query} query
         * @param {module:api/MessagesApi~messagesPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Array.<module:model/MessageResponse>}
         */
        messagesPost(query: any, callback: any): any;
        /**
         * Callback function to receive the result of the messagesScheduleGet operation.
         * @callback module:api/MessagesApi~messagesScheduleGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/ScheduledMessagesResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Returns a list of messages scheduled from your account, comprising any messages scheduled in the last 3 months and any scheduled to send in the future
         * @param {module:api/MessagesApi~messagesScheduleGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/ScheduledMessagesResponse}
         */
        messagesScheduleGet(callback: any): any;
        /**
         * Callback function to receive the result of the messagesScheduleMessageidDelete operation.
         * @callback module:api/MessagesApi~messagesScheduleMessageidDeleteCallback
         * @param {String} error Error message, if any.
         * @param {module:model/CancelledMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Cancels a scheduled SMS message
         * @param {String} messageid The ID of the message you would like returned
         * @param {module:api/MessagesApi~messagesScheduleMessageidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/CancelledMessageResponse}
         */
        messagesScheduleMessageidDelete(messageid: string, callback: any): any;
        /**
         * Callback function to receive the result of the sendFlashMessage operation.
         * @callback module:api/MessagesApi~sendFlashMessageCallback
         * @param {String} error Error message, if any.
         * @param {module:model/SendMessageResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Sends an SMS flash message, which appears on the recipients lock screen
         * @param {module:model/Message} smsMessage Message properties
         * @param {module:api/MessagesApi~sendFlashMessageCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/SendMessageResponse}
         */
        sendFlashMessage(smsMessage: any, callback: any): any;
    }
}
declare module "api/OneTimePasswordApi" {
    /**
    * OneTimePassword service.
    * @module api/OneTimePasswordApi
    * @version 1.9.0
    */
    export default class OneTimePasswordApi {
        /**
        * Constructs a new OneTimePasswordApi.
        * @alias module:api/OneTimePasswordApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the otpMessageidGet operation.
         * @callback module:api/OneTimePasswordApi~otpMessageidGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OTPVerifyResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Retrieve an OTP by it's message ID
         * @param {String} messageid The ID of the OTP you would like returned
         * @param {module:api/OneTimePasswordApi~otpMessageidGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OTPVerifyResponse}
         */
        otpMessageidGet(messageid: string, callback: any): any;
        /**
         * Callback function to receive the result of the otpSendPost operation.
         * @callback module:api/OneTimePasswordApi~otpSendPostCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OTPResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Generates and sends a One-Time Password
         * @param {module:model/OTP} otp OTP properties
         * @param {module:api/OneTimePasswordApi~otpSendPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OTPResponse}
         */
        otpSendPost(otp: any, callback: any): any;
        /**
         * Callback function to receive the result of the otpVerifyPost operation.
         * @callback module:api/OneTimePasswordApi~otpVerifyPostCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OTPVerifyResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Generates and sends a One-Time Password
         * @param {module:model/OTPVerify} passcode One-Time Password
         * @param {module:api/OneTimePasswordApi~otpVerifyPostCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OTPVerifyResponse}
         */
        otpVerifyPost(passcode: any, callback: any): any;
    }
}
declare module "api/UtilsApi" {
    /**
    * Utils service.
    * @module api/UtilsApi
    * @version 1.9.0
    */
    export default class UtilsApi {
        /**
        * Constructs a new UtilsApi.
        * @alias module:api/UtilsApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the utilsErrorsErrorcodeGet operation.
         * @callback module:api/UtilsApi~utilsErrorsErrorcodeGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/ExtendedErrorModel} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Returns a sample error object for the given error code. Useful for designing code to react to errors when they occur for real.
         * @param {String} errorcode The code of the error you would like returned
         * @param {module:api/UtilsApi~utilsErrorsErrorcodeGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/ExtendedErrorModel}
         */
        utilsErrorsErrorcodeGet(errorcode: string, callback: any): any;
        /**
         * Callback function to receive the result of the utilsTestGet operation.
         * @callback module:api/UtilsApi~utilsTestGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/TestResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Returns the customer ID to the caller
         * @param {module:api/UtilsApi~utilsTestGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/TestResponse}
         */
        utilsTestGet(callback: any): any;
    }
}
declare module "index" {
    import ApiClient from "ApiClient";
    import BatchMessage from "model/BatchMessage";
    import BatchMessageResponse from "model/BatchMessageResponse";
    import CancelledMessageResponse from "model/CancelledMessageResponse";
    import CreditsResponse from "model/CreditsResponse";
    import DeletedMessageResponse from "model/DeletedMessageResponse";
    import ErrorModel from "model/ErrorModel";
    import ExtendedErrorModel from "model/ExtendedErrorModel";
    import Message from "model/Message";
    import MessageMetadata from "model/MessageMetadata";
    import MessageResponse from "model/MessageResponse";
    import MessageResponseFailurereason from "model/MessageResponseFailurereason";
    import MetaData from "model/MetaData";
    import OTP from "model/OTP";
    import OTPResponse from "model/OTPResponse";
    import OTPVerify from "model/OTPVerify";
    import OTPVerifyResponse from "model/OTPVerifyResponse";
    import Query from "model/Query";
    import QueryMetadata from "model/QueryMetadata";
    import ScheduledBatchResponse from "model/ScheduledBatchResponse";
    import ScheduledMessage from "model/ScheduledMessage";
    import ScheduledMessageResponse from "model/ScheduledMessageResponse";
    import ScheduledMessagesResponse from "model/ScheduledMessagesResponse";
    import ScheduledMessagesResponseMessage from "model/ScheduledMessagesResponseMessage";
    import SendMessageResponse from "model/SendMessageResponse";
    import TestResponse from "model/TestResponse";
    import BatchMessagesApi from "api/BatchMessagesApi";
    import CreditsApi from "api/CreditsApi";
    import MessagesApi from "api/MessagesApi";
    import OneTimePasswordApi from "api/OneTimePasswordApi";
    import UtilsApi from "api/UtilsApi";
    export { ApiClient, BatchMessage, BatchMessageResponse, CancelledMessageResponse, CreditsResponse, DeletedMessageResponse, ErrorModel, ExtendedErrorModel, Message, MessageMetadata, MessageResponse, MessageResponseFailurereason, MetaData, OTP, OTPResponse, OTPVerify, OTPVerifyResponse, Query, QueryMetadata, ScheduledBatchResponse, ScheduledMessage, ScheduledMessageResponse, ScheduledMessagesResponse, ScheduledMessagesResponseMessage, SendMessageResponse, TestResponse, BatchMessagesApi, CreditsApi, MessagesApi, OneTimePasswordApi, UtilsApi };
}
declare module "model/ApiKeyResponse" {
    /**
    * The ApiKeyResponse model module.
    * @module model/ApiKeyResponse
    * @version 1.6.0
    */
    export default class ApiKeyResponse {
        /**
        * Constructs a <code>ApiKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
        * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
        * @param {Object} data The plain JavaScript object bearing properties of interest.
        * @param {module:model/ApiKeyResponse} obj Optional instance to populate.
        * @return {module:model/ApiKeyResponse} The populated <code>ApiKeyResponse</code> instance.
        */
        static constructFromObject(data: any, obj: any): any;
        /**
        * Constructs a new <code>ApiKeyResponse</code>.
        * @alias module:model/ApiKeyResponse
        * @class
        * @param key {String}
        * @param secret {String}
        */
        constructor(key: string, secret: string);
        /**
        * @member {String} key
        */
        key: any;
        /**
        * @member {String} secret
        */
        secret: any;
    }
}
declare module "model/Login" {
    /**
    * The Login model module.
    * @module model/Login
    * @version 1.6.0
    */
    export default class Login {
        /**
        * Constructs a <code>Login</code> from a plain JavaScript object, optionally creating a new instance.
        * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
        * @param {Object} data The plain JavaScript object bearing properties of interest.
        * @param {module:model/Login} obj Optional instance to populate.
        * @return {module:model/Login} The populated <code>Login</code> instance.
        */
        static constructFromObject(data: any, obj: any): any;
        /**
        * Your customer ID, available from your account area at https://thesmsworks.co.uk/user/login
        * @member {String} customerid
        */
        customerid: any;
        /**
        * API Key, available from your account area at https://thesmsworks.co.uk/user/login
        * @member {String} key
        */
        key: any;
        /**
        * API Secret, available from your account area at https://thesmsworks.co.uk/user/login
        * @member {String} secret
        */
        secret: any;
    }
}
declare module "model/TokenResponse" {
    /**
    * The TokenResponse model module.
    * @module model/TokenResponse
    * @version 1.6.0
    */
    export default class TokenResponse {
        /**
        * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
        * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
        * @param {Object} data The plain JavaScript object bearing properties of interest.
        * @param {module:model/TokenResponse} obj Optional instance to populate.
        * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
        */
        static constructFromObject(data: any, obj: any): any;
        /**
        * Constructs a new <code>TokenResponse</code>.
        * @alias module:model/TokenResponse
        * @class
        * @param token {String}
        */
        constructor(token: string);
        /**
        * @member {String} token
        */
        token: any;
    }
}
declare module "api/AuthApi" {
    /**
    * Auth service.
    * @module api/AuthApi
    * @version 1.6.0
    */
    export default class AuthApi {
        /**
        * Constructs a new AuthApi.
        * @alias module:api/AuthApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the keySecret operation.
         * @callback module:api/AuthApi~keySecretCallback
         * @param {String} error Error message, if any.
         * @param {module:model/ApiKeyResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login
         * @param {module:api/AuthApi~keySecretCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/ApiKeyResponse}
         */
        keySecret(customerid: any, callback: any): any;
        /**
         * Callback function to receive the result of the login operation.
         * @callback module:api/AuthApi~loginCallback
         * @param {String} error Error message, if any.
         * @param {module:model/TokenResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * Generates a JSON Web Token for including in the Authorization header of all your calls to the API. This only needs to be done once. Generate the customer ID, API Key &amp; Secret required for this call from the API Key tab your account page.
         * @param {module:api/AuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/TokenResponse}
         */
        login(body: any, callback: any): any;
    }
}
declare module "model/ExtendedErrorModelAllOf" {
    export default ExtendedErrorModelAllOf;
    /**
     * The ExtendedErrorModelAllOf model module.
     * @module model/ExtendedErrorModelAllOf
     * @version 1.8.0
     */
    class ExtendedErrorModelAllOf {
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj: any, errorCode: any, status: any): void;
        /**
         * Constructs a <code>ExtendedErrorModelAllOf</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ExtendedErrorModelAllOf} obj Optional instance to populate.
         * @return {module:model/ExtendedErrorModelAllOf} The populated <code>ExtendedErrorModelAllOf</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Validates the JSON data with respect to <code>ExtendedErrorModelAllOf</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtendedErrorModelAllOf</code>.
         */
        static validateJSON(data: any): boolean;
        /**
         * Constructs a new <code>ExtendedErrorModelAllOf</code>.
         * @alias module:model/ExtendedErrorModelAllOf
         * @param errorCode {Number} Numeric code used to identify the error. Integer.
         * @param status {String}
         */
        constructor(errorCode: number, status: string);
        errorCode: any;
        status: any;
        permanent: any;
    }
    namespace ExtendedErrorModelAllOf {
        let RequiredProperties: string[];
    }
}
//# sourceMappingURL=index.d.ts.map