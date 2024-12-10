[![CircleCI](https://dl.circleci.com/status-badge/img/gh/genecommerce/better-checkout-new-module-template/tree/main.svg?style=svg&circle-token=CCIPRJ_MyaGqRZPJU9B3scfCpNUet_ba0218df02ddad960a21e0b7f421435d4e364ebe)](https://dl.circleci.com/status-badge/redirect/gh/genecommerce/better-checkout-new-module-template/tree/main)


![Better Checkout Powered by GENE](./assets/logo.svg)

# Gene Better Checkout Module - Example Extension

This module serves as an example of how to create a custom extension for the Gene Better Checkout module.

## Getting Started
To use this functionality, follow these steps:

1. PHTML Integration
In your .phtml file, include the path to your custom functionality files, which could include new components, callback functions, and styles.

2. Layout File Update
Your .phtml file should already be added to the checkout layout. You just need to modify the name of the .phtml file to match your new component.

3. Create New Components or Callbacks
After setting up your .phtml file, navigate to the view/frontend/js/checkout/src directory. Here, you can create new callbacks or components with custom names.

4. Register the Component or Callback
To use your custom component or callback, you need to register it as a functionExtension or componentExtension in the Gene Better Checkout module.

## Available Extension Points
Below is a list of existing extension points where you can plug in your custom components or callbacks.

1. additionalPaymentMethod
2. additionalPaymentMethodsPrimary
3. additionalVaultedMethod
4. ageCheckerExtension
5. footerPaymentIcon
6. belowShippingMethodsExtension
7. additionalShippingMethod
8. shippingMethodAdditionalContainer
9. paymentIcon
10. orderSummaryMessagesContainer
11. expressPaymentMethod
12. clickAndCollectComponent

Callback Extension Points:
1. onLogin
2. onSetShippingStep
3. onHandleCartData
4. onBraintreeExpressInit
5. onUserProceed
6. onSubmitShippingOptionAgeCheck
7. onEditAddress
8. onDeliveryTabEvent
9. getCrossSellsHeader
10. getAppliedCoupons
11. onShippingMethodMounted
12. getRewardPoints
13. getPrices
14. getItems
15. getPaymentMethods
16. getIsVirtual
17. getShippingAddresses
18. getGiftWrapping
19. getGiftCards
20. getFullCart
21. getBillingAddress
22. getStoreCredit
23. onStepCreated
24. belowEmailFieldExtension
25. onCreate
26. onPaymentDataChanged
27. getShippingMethods

Once you have completed the setup, follow these steps to build your code:

1. Navigate to the view/frontend/js/checkout directory:
cd view/frontend/js/checkout
2. Install necessary dependencies:
npm install
3. Build the project:
npm run build

## CircleCi

CircleCi is a tool for us to use to allow for tested to be run on our modules before they are deployed.

This template comes with EsLint and PHPStan.

You can add more tests to this if you need to.


### Testing your module locally

You can test CircleCi before you push your code.

To do this you need to install circleci locally.

``` brew install circleci```

Then once this has been installed in the main directory of your package then.

```circleci local execute```