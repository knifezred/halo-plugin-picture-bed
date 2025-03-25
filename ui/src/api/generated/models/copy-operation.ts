/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CopyOperation
 */
export interface CopyOperation {
    /**
     * A JSON Pointer path pointing to the location to move/copy from.
     * @type {string}
     * @memberof CopyOperation
     */
    'from': string;
    /**
     * 
     * @type {string}
     * @memberof CopyOperation
     */
    'op': CopyOperationOpEnum;
    /**
     * A JSON Pointer path pointing to the location to move/copy from.
     * @type {string}
     * @memberof CopyOperation
     */
    'path': string;
}

export const CopyOperationOpEnum = {
    Copy: 'copy'
} as const;

export type CopyOperationOpEnum = typeof CopyOperationOpEnum[keyof typeof CopyOperationOpEnum];


