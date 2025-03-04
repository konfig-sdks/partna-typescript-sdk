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
 * @interface BalanceTransferFundsRequest
 */
export interface BalanceTransferFundsRequest {
    /**
     * Amount to transfer.
     * @type {string}
     * @memberof BalanceTransferFundsRequest
     */
    'amount'?: string;
    /**
     * Currency being sent.
     * @type {string}
     * @memberof BalanceTransferFundsRequest
     */
    'currency': BalanceTransferFundsRequestCurrencyEnum;
    /**
     * Transaction memo.
     * @type {string}
     * @memberof BalanceTransferFundsRequest
     */
    'memo'?: string;
    /**
     * The type of OTP to be used.
     * @type {string}
     * @memberof BalanceTransferFundsRequest
     */
    'otpType'?: BalanceTransferFundsRequestOtpTypeEnum;
    /**
     * Receiver\'s coinprofile username.
     * @type {string}
     * @memberof BalanceTransferFundsRequest
     */
    'receiverUsername': string;
    /**
     * The token to be used for OTP.
     * @type {string}
     * @memberof BalanceTransferFundsRequest
     */
    'token'?: string;
}

type BalanceTransferFundsRequestCurrencyEnum = 'NGN' | 'USD'
type BalanceTransferFundsRequestOtpTypeEnum = 'otp' | 'totp'


