/* tslint:disable */
/* eslint-disable */
/*
Coinprofile business API

Coinprofile business API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BankAccountVerifyAndReturnDetailsRequest } from '../models';
// @ts-ignore
import { BankAccountVerifyAndReturnDetailsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BankAccountApi - axios parameter creator
 * @export
 */
export const BankAccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Verifies the bank account and returns the bank account details
         * @summary Resolve bank account
         * @param {BankAccountVerifyAndReturnDetailsRequest} bankAccountVerifyAndReturnDetailsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAndReturnDetails: async (bankAccountVerifyAndReturnDetailsRequest: BankAccountVerifyAndReturnDetailsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bankAccountVerifyAndReturnDetailsRequest' is not null or undefined
            assertParamExists('verifyAndReturnDetails', 'bankAccountVerifyAndReturnDetailsRequest', bankAccountVerifyAndReturnDetailsRequest)
            const localVarPath = `/bank/resolve`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: bankAccountVerifyAndReturnDetailsRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/bank/resolve',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(bankAccountVerifyAndReturnDetailsRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BankAccountApi - functional programming interface
 * @export
 */
export const BankAccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BankAccountApiAxiosParamCreator(configuration)
    return {
        /**
         * Verifies the bank account and returns the bank account details
         * @summary Resolve bank account
         * @param {BankAccountApiVerifyAndReturnDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyAndReturnDetails(requestParameters: BankAccountApiVerifyAndReturnDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BankAccountVerifyAndReturnDetailsResponse>> {
            const bankAccountVerifyAndReturnDetailsRequest: BankAccountVerifyAndReturnDetailsRequest = {
                accountNumber: requestParameters.accountNumber,
                bankCode: requestParameters.bankCode
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyAndReturnDetails(bankAccountVerifyAndReturnDetailsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BankAccountApi - factory interface
 * @export
 */
export const BankAccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BankAccountApiFp(configuration)
    return {
        /**
         * Verifies the bank account and returns the bank account details
         * @summary Resolve bank account
         * @param {BankAccountApiVerifyAndReturnDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAndReturnDetails(requestParameters: BankAccountApiVerifyAndReturnDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<BankAccountVerifyAndReturnDetailsResponse> {
            return localVarFp.verifyAndReturnDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for verifyAndReturnDetails operation in BankAccountApi.
 * @export
 * @interface BankAccountApiVerifyAndReturnDetailsRequest
 */
export type BankAccountApiVerifyAndReturnDetailsRequest = {
    
} & BankAccountVerifyAndReturnDetailsRequest

/**
 * BankAccountApiGenerated - object-oriented interface
 * @export
 * @class BankAccountApiGenerated
 * @extends {BaseAPI}
 */
export class BankAccountApiGenerated extends BaseAPI {
    /**
     * Verifies the bank account and returns the bank account details
     * @summary Resolve bank account
     * @param {BankAccountApiVerifyAndReturnDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApiGenerated
     */
    public verifyAndReturnDetails(requestParameters: BankAccountApiVerifyAndReturnDetailsRequest, options?: AxiosRequestConfig) {
        return BankAccountApiFp(this.configuration).verifyAndReturnDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
