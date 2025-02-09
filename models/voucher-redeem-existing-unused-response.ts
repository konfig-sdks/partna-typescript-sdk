/*
Coinprofile business API

Coinprofile business API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VoucherRedeemExistingUnusedResponseData } from './voucher-redeem-existing-unused-response-data';

/**
 * 
 * @export
 * @interface VoucherRedeemExistingUnusedResponse
 */
export interface VoucherRedeemExistingUnusedResponse {
    /**
     * 
     * @type {VoucherRedeemExistingUnusedResponseData}
     * @memberof VoucherRedeemExistingUnusedResponse
     */
    'data'?: VoucherRedeemExistingUnusedResponseData;
    /**
     * 
     * @type {string}
     * @memberof VoucherRedeemExistingUnusedResponse
     */
    'message'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VoucherRedeemExistingUnusedResponse
     */
    'success'?: VoucherRedeemExistingUnusedResponseSuccessEnum;
}

type VoucherRedeemExistingUnusedResponseSuccessEnum = true


