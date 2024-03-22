/*
Coinprofile business API

Coinprofile business API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface VoucherCreatePaymentRequest
 */
export interface VoucherCreatePaymentRequest {
    /**
     * Required voucher amount
     * @type {number}
     * @memberof VoucherCreatePaymentRequest
     */
    'amount': number;
    /**
     * Required voucher currency
     * @type {string}
     * @memberof VoucherCreatePaymentRequest
     */
    'currency': VoucherCreatePaymentRequestCurrencyEnum;
    /**
     * User email
     * @type {string}
     * @memberof VoucherCreatePaymentRequest
     */
    'email': string;
    /**
     * Fullname of the user creating voucher
     * @type {string}
     * @memberof VoucherCreatePaymentRequest
     */
    'fullname': string;
    /**
     * This is a Ventogram-signed rate key. If provided when a voucher is created, the conversion will use the rate signed with this key if it is valid at the time of redeeming a voucher. Conversion will use the current rate if key has expired.
     * @type {string}
     * @memberof VoucherCreatePaymentRequest
     */
    'rateKey'?: string;
}

type VoucherCreatePaymentRequestCurrencyEnum = 'NGN' | 'USD'


