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
 * @interface BalanceWithdrawFundsRequest
 */
export interface BalanceWithdrawFundsRequest {
    /**
     * The account name. This is the name of the account holder.
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'accountName': string;
    /**
     * The account number of the user\'s bank account.
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'accountNumber': string;
    /**
     * The amount to be withdrawn.
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'amount': string;
    /**
     * The bank name. e.g. \"Access Bank\".
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'bank': string;
    /**
     * The bank code. e.g. \"044\".
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'bankCode': string;
    /**
     * The currency of the withdrawal.
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'currency': string;
    /**
     * The type of OTP to be used.
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'otpType': BalanceWithdrawFundsRequestOtpTypeEnum;
    /**
     * The token to be used for OTP.
     * @type {string}
     * @memberof BalanceWithdrawFundsRequest
     */
    'token'?: string;
}

type BalanceWithdrawFundsRequestOtpTypeEnum = 'otp' | 'totp'


