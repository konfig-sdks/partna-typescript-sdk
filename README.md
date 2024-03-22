<div align="center">

[![Visit Partna](./header.png)](https://getpartna.com&#x2F;)

# [Partna](https://getpartna.com&#x2F;)<a id="partna"></a>

Coinprofile business API

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`partna.apiKey.generateNewApiKey`](#partnaapikeygeneratenewapikey)
  * [`partna.balance.getAccountBalance`](#partnabalancegetaccountbalance)
  * [`partna.balance.getAccountBalance_0`](#partnabalancegetaccountbalance_0)
  * [`partna.balance.transferFunds`](#partnabalancetransferfunds)
  * [`partna.balance.withdrawFunds`](#partnabalancewithdrawfunds)
  * [`partna.bank.getSupportedBanks`](#partnabankgetsupportedbanks)
  * [`partna.bankAccount.verifyAndReturnDetails`](#partnabankaccountverifyandreturndetails)
  * [`partna.currency.getMinimumAllowed`](#partnacurrencygetminimumallowed)
  * [`partna.currency.listSupportedCurrencies`](#partnacurrencylistsupportedcurrencies)
  * [`partna.merchants.getRecord`](#partnamerchantsgetrecord)
  * [`partna.merchants.updateRecord`](#partnamerchantsupdaterecord)
  * [`partna.mockPayment.requestSubmission`](#partnamockpaymentrequestsubmission)
  * [`partna.payment.createNewPayment`](#partnapaymentcreatenewpayment)
  * [`partna.payment.getSingle`](#partnapaymentgetsingle)
  * [`partna.payment.resolveOverpaidTransaction`](#partnapaymentresolveoverpaidtransaction)
  * [`partna.rates.getConversionRates`](#partnaratesgetconversionrates)
  * [`partna.rates.getCurrentRates`](#partnaratesgetcurrentrates)
  * [`partna.transaction.getDetails`](#partnatransactiongetdetails)
  * [`partna.transaction.getUserTransactionSummary`](#partnatransactiongetusertransactionsummary)
  * [`partna.transaction.getUserTransactions`](#partnatransactiongetusertransactions)
  * [`partna.transactions.getMerchantTransactionSummary`](#partnatransactionsgetmerchanttransactionsummary)
  * [`partna.voucher.createPayment`](#partnavouchercreatepayment)
  * [`partna.voucher.getMultipleRecords`](#partnavouchergetmultiplerecords)
  * [`partna.voucher.getRecord`](#partnavouchergetrecord)
  * [`partna.voucher.redeemAndWithdraw`](#partnavoucherredeemandwithdraw)
  * [`partna.voucher.redeemExistingUnused`](#partnavoucherredeemexistingunused)
  * [`partna.voucherFee.getFee`](#partnavoucherfeegetfee)
  * [`partna.voucherMinMaxAmount.getMinMaxAmount`](#partnavoucherminmaxamountgetminmaxamount)
  * [`partna.wallet.executeTransfer`](#partnawalletexecutetransfer)
  * [`partna.wallet.getAddresses`](#partnawalletgetaddresses)
  * [`partna.wallet.getSupportedConfig`](#partnawalletgetsupportedconfig)
  * [`partna.webhook.getCallbackUrl`](#partnawebhookgetcallbackurl)
  * [`partna.webhook.subscribeWebhookCallback`](#partnawebhooksubscribewebhookcallback)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Partna&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Partna } from "partna-typescript-sdk";

const partna = new Partna({
  // Defining the base path is optional and defaults to https://staging-biz.coinprofile.co/v2
  // basePath: "https://staging-biz.coinprofile.co/v2",
  adminSecret: "API_KEY",
  apiKey: "API_KEY",
  apiUser: "API_KEY",
  userVersion: "API_KEY",
});

const generateNewApiKeyResponse = await partna.apiKey.generateNewApiKey({});

console.log(generateNewApiKeyResponse);
```

## Reference<a id="reference"></a>


### `partna.apiKey.generateNewApiKey`<a id="partnaapikeygeneratenewapikey"></a>

Create a new api key

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateNewApiKeyResponse = await partna.apiKey.generateNewApiKey({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otpType: `string`<a id="otptype-string"></a>

##### token: `string`<a id="token-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ApiKeyGenerateNewApiKeyResponse](./models/api-key-generate-new-api-key-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/api-key` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.balance.getAccountBalance`<a id="partnabalancegetaccountbalance"></a>

Retrieves account balance for the selected currency

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountBalanceResponse = await partna.balance.getAccountBalance({
  currency: "NGN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `'NGN' | 'USD'`<a id="currency-ngn--usd"></a>

One of supported currencies

#### 🔄 Return<a id="🔄-return"></a>

[BalanceGetAccountBalanceResponse](./models/balance-get-account-balance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/balance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.balance.getAccountBalance_0`<a id="partnabalancegetaccountbalance_0"></a>

Retrieves account balance for each currency

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountBalance_0Response = await partna.balance.getAccountBalance_0({
  currency: "NGN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `'NGN' | 'USD' | 'USDT'`<a id="currency-ngn--usd--usdt"></a>

Currency for which balance is to be retrieved. When this is not supplied, balance will be retrieved for all available currencies.

#### 🔄 Return<a id="🔄-return"></a>

[BalanceGetAccountBalance200Response](./models/balance-get-account-balance200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/balance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.balance.transferFunds`<a id="partnabalancetransferfunds"></a>

Transfer funds from user's balance to another user (fiat-to-fiat)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferFundsResponse = await partna.balance.transferFunds({
  currency: "NGN",
  otpType: "otp",
  receiverUsername: "receiverUsername_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `string`<a id="currency-string"></a>

Currency being sent.

##### receiverUsername: `string`<a id="receiverusername-string"></a>

Receiver\\\'s coinprofile username.

##### amount: `string`<a id="amount-string"></a>

Amount to transfer.

##### memo: `string`<a id="memo-string"></a>

Transaction memo.

##### otpType: `string`<a id="otptype-string"></a>

The type of OTP to be used.

##### token: `string`<a id="token-string"></a>

The token to be used for OTP.

#### 🔄 Return<a id="🔄-return"></a>

[BalanceTransferFundsResponse](./models/balance-transfer-funds-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/balance/transfer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.balance.withdrawFunds`<a id="partnabalancewithdrawfunds"></a>

Withdraw funds from the user's balance

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const withdrawFundsResponse = await partna.balance.withdrawFunds({
  accountName: "accountName_example",
  accountNumber: "accountNumber_example",
  amount: "amount_example",
  bank: "bank_example",
  bankCode: "bankCode_example",
  currency: "currency_example",
  otpType: "otp",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountName: `string`<a id="accountname-string"></a>

The account name. This is the name of the account holder.

##### accountNumber: `string`<a id="accountnumber-string"></a>

The account number of the user\\\'s bank account.

##### amount: `string`<a id="amount-string"></a>

The amount to be withdrawn.

##### bank: `string`<a id="bank-string"></a>

The bank name. e.g. \\\"Access Bank\\\".

##### bankCode: `string`<a id="bankcode-string"></a>

The bank code. e.g. \\\"044\\\".

##### currency: `string`<a id="currency-string"></a>

The currency of the withdrawal.

##### otpType: `string`<a id="otptype-string"></a>

The type of OTP to be used.

##### token: `string`<a id="token-string"></a>

The token to be used for OTP.

#### 🔄 Return<a id="🔄-return"></a>

[BalanceWithdrawFundsResponse](./models/balance-withdraw-funds-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/balance/withdraw` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.bank.getSupportedBanks`<a id="partnabankgetsupportedbanks"></a>

Retrieve a list of supported banks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSupportedBanksResponse = await partna.bank.getSupportedBanks({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

The country from which to retrieve supported banks

#### 🔄 Return<a id="🔄-return"></a>

[BankGetSupportedBanksResponse](./models/bank-get-supported-banks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bank/supported` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.bankAccount.verifyAndReturnDetails`<a id="partnabankaccountverifyandreturndetails"></a>

Verifies the bank account and returns the bank account details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyAndReturnDetailsResponse =
  await partna.bankAccount.verifyAndReturnDetails({
    accountNumber: "accountNumber_example",
    bankCode: "bankCode_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountNumber: `string`<a id="accountnumber-string"></a>

The account number.

##### bankCode: `string`<a id="bankcode-string"></a>

The bank code.

#### 🔄 Return<a id="🔄-return"></a>

[BankAccountVerifyAndReturnDetailsResponse](./models/bank-account-verify-and-return-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bank/resolve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.currency.getMinimumAllowed`<a id="partnacurrencygetminimumallowed"></a>

Get minimum amount allowed

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMinimumAllowedResponse = await partna.currency.getMinimumAllowed();
```

#### 🔄 Return<a id="🔄-return"></a>

[CurrencyGetMinimumAllowedResponse](./models/currency-get-minimum-allowed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currency/minimum-allowed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.currency.listSupportedCurrencies`<a id="partnacurrencylistsupportedcurrencies"></a>

Get supported currencies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSupportedCurrenciesResponse =
  await partna.currency.listSupportedCurrencies();
```

#### 🔄 Return<a id="🔄-return"></a>

[CurrencyListSupportedCurrenciesResponse](./models/currency-list-supported-currencies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currency/supported` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.merchants.getRecord`<a id="partnamerchantsgetrecord"></a>

Retrieves merchant record - username, email, callback URL, merchant logo, creditCurrency, API key expiry date-time

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await partna.merchants.getRecord();
```

#### 🔄 Return<a id="🔄-return"></a>

[MerchantsGetRecordResponse](./models/merchants-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/merchants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.merchants.updateRecord`<a id="partnamerchantsupdaterecord"></a>

Updates merchant record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecordResponse = await partna.merchants.updateRecord({
  callbackUrl: "https://www.example.com/webhook/ventogram",
  creditCurrency: "NGN",
  feeBearer: "client",
  logo: "https://www.example.com/favicon",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### callbackUrl: `string`<a id="callbackurl-string"></a>

Merchant callback URL. Webhook will be sent to this URL.

##### creditCurrency: `string`<a id="creditcurrency-string"></a>

Merchants can set this property to their desired currency. Their balance on Ventogram will be credited with this currency when their users redeem voucher created on Ventogram. Conversion between different currencies will be performed at the rate which is obtainable at the time of redeeming the voucher. If this is not set by the merchant,  their balance will be credited with the currency used in creating the voucher.

##### feeBearer: `string`<a id="feebearer-string"></a>

Bearer of the voucher fee

##### logo: `string`<a id="logo-string"></a>

Merchant logo URL

#### 🔄 Return<a id="🔄-return"></a>

[MerchantsUpdateRecordResponse](./models/merchants-update-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/merchants` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.mockPayment.requestSubmission`<a id="partnamockpaymentrequestsubmission"></a>

Sends a mock payment request (only in staging environment)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestSubmissionResponse = await partna.mockPayment.requestSubmission({
  voucherId: "voucherId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### voucherId: `string`<a id="voucherid-string"></a>

ID of the voucher to be paid

##### amount: `number`<a id="amount-number"></a>

Amount to pay. This can be used to simulate overpayment and underpayment in staging environment. If this field is not provided, the expected amount will be paid.

#### 🔄 Return<a id="🔄-return"></a>

[MockPaymentRequestSubmissionResponse](./models/mock-payment-request-submission-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/mock/payment` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.payment.createNewPayment`<a id="partnapaymentcreatenewpayment"></a>

Create a new payment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPaymentResponse = await partna.payment.createNewPayment({
  businessId: "businessId_example",
  customerEmail: "customerEmail_example",
  incomingCurrency: "incomingCurrency_example",
  outgoingCurrency: "outgoingCurrency_example",
  paymentType: "paymentType_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### businessId: `string`<a id="businessid-string"></a>

The business id

##### customerEmail: `string`<a id="customeremail-string"></a>

The rate key

##### incomingCurrency: `string`<a id="incomingcurrency-string"></a>

The incoming currency

##### outgoingCurrency: `string`<a id="outgoingcurrency-string"></a>

The outgoing currency

##### paymentType: `string`<a id="paymenttype-string"></a>

The payment type

##### accountName: `string`<a id="accountname-string"></a>

The account name. Required when paymentType is bank

##### accountNumber: `string`<a id="accountnumber-string"></a>

The account number. Required when paymentType is bank

##### bank: `string`<a id="bank-string"></a>

The bank name. Required when paymentType is bank

##### bankCode: `string`<a id="bankcode-string"></a>

The bank code. Required when paymentType is bank

##### coinprofileUsername: `string`<a id="coinprofileusername-string"></a>

The coinprofile username. Required when paymentType is profile

##### country: `string`<a id="country-string"></a>

The country. Required when paymentType is bank

##### incomingAmount: `number`<a id="incomingamount-number"></a>

The incoming amount

##### outgoingAmount: `number`<a id="outgoingamount-number"></a>

The outgoing amount

##### rateKey: `string`<a id="ratekey-string"></a>

The rate key

##### reference: `string`<a id="reference-string"></a>

The reference

#### 🔄 Return<a id="🔄-return"></a>

[PaymentCreateNewPaymentResponse](./models/payment-create-new-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.payment.getSingle`<a id="partnapaymentgetsingle"></a>

Get a single payment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleResponse = await partna.payment.getSingle({
  paymentId: "paymentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentId: `string`<a id="paymentid-string"></a>

The ID of the created payment

#### 🔄 Return<a id="🔄-return"></a>

[PaymentGetSingleResponse](./models/payment-get-single-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/{paymentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.payment.resolveOverpaidTransaction`<a id="partnapaymentresolveoverpaidtransaction"></a>

Resolve overpaid Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resolveOverpaidTransactionResponse =
  await partna.payment.resolveOverpaidTransaction({
    id: "id_example",
    option: "refundexcess",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the unresolved transaction

##### option: `'refundexcess' | 'payall'`<a id="option-refundexcess--payall"></a>

This is the way you want the transaction to be completed. Either refundExcess or PayAll option

#### 🔄 Return<a id="🔄-return"></a>

[PaymentResolveOverpaidTransactionResponse](./models/payment-resolve-overpaid-transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/resolve` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.rates.getConversionRates`<a id="partnaratesgetconversionrates"></a>

Retrieves conversion rates for all supported currencies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConversionRatesResponse = await partna.rates.getConversionRates();
```

#### 🔄 Return<a id="🔄-return"></a>

[RatesGetConversionRatesResponse](./models/rates-get-conversion-rates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/currency/rates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.rates.getCurrentRates`<a id="partnaratesgetcurrentrates"></a>

Get the current rates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentRatesResponse = await partna.rates.getCurrentRates();
```

#### 🔄 Return<a id="🔄-return"></a>

[RatesGetCurrentRatesResponse](./models/rates-get-current-rates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currency/rate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.transaction.getDetails`<a id="partnatransactiongetdetails"></a>

Get a transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await partna.transaction.getDetails({
  transactionId: "transactionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transactionId: `string`<a id="transactionid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TransactionGetDetailsResponse](./models/transaction-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transaction/{transactionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.transaction.getUserTransactionSummary`<a id="partnatransactiongetusertransactionsummary"></a>

Retrieves all user transactions summary

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTransactionSummaryResponse =
  await partna.transaction.getUserTransactionSummary({
    currency: "NGN",
    type: "deposit",
    duration: "one day",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `'NGN' | 'USD'`<a id="currency-ngn--usd"></a>

Currency for which transactions are to be retrieved. When this is not supplied, transactions will be retrieved for all available currencies.

##### type: `'deposit' | 'withdrawal' | 'sent' | 'transfer' | 'internalTransfer' | 'conversion'`<a id="type-deposit--withdrawal--sent--transfer--internaltransfer--conversion"></a>

Type of transactions to be retrieved. When this is not supplied, transactions will be retrieved for all available types.

##### page: `number`<a id="page-number"></a>

Number of pages to be retrieved.

##### limit: `number`<a id="limit-number"></a>

Number of transaction records to be retrieved per page page.

##### duration: `'one day' | 'one week' | 'one month' | 'one year'`<a id="duration-one-day--one-week--one-month--one-year"></a>

Duration of the transaction to be retrieved per page page.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionGetUserTransactionSummaryResponse](./models/transaction-get-user-transaction-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transaction/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.transaction.getUserTransactions`<a id="partnatransactiongetusertransactions"></a>

Retrieves all user transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTransactionsResponse =
  await partna.transaction.getUserTransactions({
    currency: "NGN",
    type: "deposit",
    duration: "one day",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `'NGN' | 'USD'`<a id="currency-ngn--usd"></a>

Currency for which transactions are to be retrieved. When this is not supplied, transactions will be retrieved for all available currencies.

##### type: `'deposit' | 'withdrawal' | 'sent' | 'transfer' | 'internalTransfer' | 'conversion'`<a id="type-deposit--withdrawal--sent--transfer--internaltransfer--conversion"></a>

Type of transactions to be retrieved. When this is not supplied, transactions will be retrieved for all available types.

##### page: `number`<a id="page-number"></a>

Number of pages to be retrieved.

##### limit: `number`<a id="limit-number"></a>

Number of transaction records to be retrieved per page page.

##### duration: `'one day' | 'one week' | 'one month' | 'one year'`<a id="duration-one-day--one-week--one-month--one-year"></a>

Duration of the transaction to be retrieved per page page.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionGetUserTransactionsResponse](./models/transaction-get-user-transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transaction` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.transactions.getMerchantTransactionSummary`<a id="partnatransactionsgetmerchanttransactionsummary"></a>

Retrieves transaction summary for the selected currency for a merchant

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMerchantTransactionSummaryResponse =
  await partna.transactions.getMerchantTransactionSummary({
    currency: "NGN",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `'NGN' | 'USD'`<a id="currency-ngn--usd"></a>

One of supported currencies

#### 🔄 Return<a id="🔄-return"></a>

[TransactionsGetMerchantTransactionSummaryResponse](./models/transactions-get-merchant-transaction-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/transactions/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucher.createPayment`<a id="partnavouchercreatepayment"></a>

Creates a new voucher payment for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPaymentResponse = await partna.voucher.createPayment({
  amount: 1,
  currency: "NGN",
  email: "email_example",
  fullname: "fullname_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Required voucher amount

##### currency: `string`<a id="currency-string"></a>

Required voucher currency

##### email: `string`<a id="email-string"></a>

User email

##### fullname: `string`<a id="fullname-string"></a>

Fullname of the user creating voucher

##### rateKey: `string`<a id="ratekey-string"></a>

This is a Ventogram-signed rate key. If provided when a voucher is created, the conversion will use the rate signed with this key if it is valid at the time of redeeming a voucher. Conversion will use the current rate if key has expired.

#### 🔄 Return<a id="🔄-return"></a>

[VoucherCreatePaymentResponse](./models/voucher-create-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vouchers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucher.getMultipleRecords`<a id="partnavouchergetmultiplerecords"></a>

Retrieves a collection of voucher records, sorted in descending order by their creation date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMultipleRecordsResponse = await partna.voucher.getMultipleRecords({
  paymentStatus: "paid",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Defaults to 1. This is the current page being requested relative to size of a page

##### pageSize: `number`<a id="pagesize-number"></a>

The number of items to be retured per page

##### paymentStatus: `'paid' | 'unpaid'`<a id="paymentstatus-paid--unpaid"></a>

Voucher payment status

#### 🔄 Return<a id="🔄-return"></a>

[VoucherGetMultipleRecordsResponse](./models/voucher-get-multiple-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/voucher/get-many` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucher.getRecord`<a id="partnavouchergetrecord"></a>

Retrieves an existing voucher record(s). When no query param is provided, all the voucher record for the merchant will be returned. If accountNumber field is provided in the query, all the voucher records associated with the given accountNumber for the merchant will be returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await partna.voucher.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Voucher id

##### memo: `string`<a id="memo-string"></a>

Voucher memo or reference number

##### accountNumber: `string`<a id="accountnumber-string"></a>

The account number used to pay for voucher

#### 🔄 Return<a id="🔄-return"></a>

[VoucherGetRecordResponse](./models/voucher-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vouchers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucher.redeemAndWithdraw`<a id="partnavoucherredeemandwithdraw"></a>

Redeems an existing unused voucher and transfers crypto to the provided wallet address

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redeemAndWithdrawResponse = await partna.voucher.redeemAndWithdraw({
  cryptoAddress: "cryptoAddress_example",
  currency: "USDC",
  email: "email_example",
  network: "network_example",
  voucherCode: "voucherCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cryptoAddress: `string`<a id="cryptoaddress-string"></a>

Must be provided along with newtwork. The crypto wallet address on the provided network, to which crypto equivalent will be sent

##### currency: `string`<a id="currency-string"></a>

Cryptocurrency to send to the provided wallet details

##### email: `string`<a id="email-string"></a>

Email that was used to create the voucher

##### network: `string`<a id="network-string"></a>

Supported crypto network

##### voucherCode: `string`<a id="vouchercode-string"></a>

Voucher code to be redeemed

##### merchantFee: `string`<a id="merchantfee-string"></a>

In USD (optional) with a precision of 2 decimal places (max). Can be supplied if the merchant want to withdraw a portion of the voucher amount into their Ventogram balance. This must be a fraction or all of voucher value (ie received amount - voucher fee)

##### rateKey: `string`<a id="ratekey-string"></a>

This is a Ventogram-signed rate key. This will be returned in response if the signed rate was used for conversion.

#### 🔄 Return<a id="🔄-return"></a>

[VoucherRedeemAndWithdrawResponse](./models/voucher-redeem-and-withdraw-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/voucher` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucher.redeemExistingUnused`<a id="partnavoucherredeemexistingunused"></a>

Redeems an existing unused voucher

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redeemExistingUnusedResponse = await partna.voucher.redeemExistingUnused({
  email: "email_example",
  voucherCode: "voucherCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Email that was used to create the voucher

##### voucherCode: `string`<a id="vouchercode-string"></a>

Voucher code to be redeemed

#### 🔄 Return<a id="🔄-return"></a>

[VoucherRedeemExistingUnusedResponse](./models/voucher-redeem-existing-unused-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vouchers` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucherFee.getFee`<a id="partnavoucherfeegetfee"></a>

Retrieves fee for a given voucher amount and currency.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFeeResponse = await partna.voucherFee.getFee({
  amount: 1,
  currency: "NGN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Voucher amount

##### currency: `'NGN' | 'USD'`<a id="currency-ngn--usd"></a>

Voucher currency

#### 🔄 Return<a id="🔄-return"></a>

[VoucherFeeGetFeeResponse](./models/voucher-fee-get-fee-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/voucher-fee` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.voucherMinMaxAmount.getMinMaxAmount`<a id="partnavoucherminmaxamountgetminmaxamount"></a>

Retrieves minimum and maximum voucher amounts for each currency.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMinMaxAmountResponse =
  await partna.voucherMinMaxAmount.getMinMaxAmount({
    currency: "NGN",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `'NGN' | 'USD'`<a id="currency-ngn--usd"></a>

Voucher currency

#### 🔄 Return<a id="🔄-return"></a>

[VoucherMinmaxAmountGetMinMaxAmountResponse](./models/voucher-minmax-amount-get-min-max-amount-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/voucher-min-max` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.wallet.executeTransfer`<a id="partnawalletexecutetransfer"></a>

Transfer crypto from one wallet address to another

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeTransferResponse = await partna.wallet.executeTransfer({
  address: "address_example",
  amount: 3.14,
  currency: "currency_example",
  network: "network_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### address: `string`<a id="address-string"></a>

Wallet address to transfer crypto

##### amount: `number`<a id="amount-number"></a>

Amount of crypto to be transferred

##### currency: `string`<a id="currency-string"></a>

Currency of the crypto to be transferred

##### network: `string`<a id="network-string"></a>

Network on which crypto is to be transferred

##### memo: `string`<a id="memo-string"></a>

Optional transaction memo

##### walletType: `string`<a id="wallettype-string"></a>

Wallet type

#### 🔄 Return<a id="🔄-return"></a>

[WalletExecuteTransferResponse](./models/wallet-execute-transfer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/wallet/transfer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.wallet.getAddresses`<a id="partnawalletgetaddresses"></a>

get wallet

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAddressesResponse = await partna.wallet.getAddresses({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `string`<a id="currency-string"></a>

The cryptocurrency for which address will be retrieved

##### network: `string`<a id="network-string"></a>

The crypto network of the retrieved wallet address

#### 🔄 Return<a id="🔄-return"></a>

[WalletGetAddressesResponse](./models/wallet-get-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/wallet` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.wallet.getSupportedConfig`<a id="partnawalletgetsupportedconfig"></a>

Get supported cryptocurrencies and networks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSupportedConfigResponse = await partna.wallet.getSupportedConfig();
```

#### 🔄 Return<a id="🔄-return"></a>

[WalletGetSupportedConfigResponse](./models/wallet-get-supported-config-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/wallet/supported/config` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.webhook.getCallbackUrl`<a id="partnawebhookgetcallbackurl"></a>

Retrieve the callback url used as webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCallbackUrlResponse = await partna.webhook.getCallbackUrl();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhookGetCallbackUrlResponse](./models/webhook-get-callback-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/callbackurl` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `partna.webhook.subscribeWebhookCallback`<a id="partnawebhooksubscribewebhookcallback"></a>

Set the callback url that will be used as webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const subscribeWebhookCallbackResponse =
  await partna.webhook.subscribeWebhookCallback({
    callbackUrl: "callbackUrl_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### callbackUrl: `string`<a id="callbackurl-string"></a>

The callback url. e.g. https://www.example.com/callback

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscribeWebhookCallbackResponse](./models/webhook-subscribe-webhook-callback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/callbackurl` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
