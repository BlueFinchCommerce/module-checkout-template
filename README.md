[![CircleCI](https://dl.circleci.com/status-badge/img/gh/BlueFinchCommerce/module-checkout-template/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/BlueFinchCommerce/module-checkout-template/tree/main)

![Checkout Powered by BlueFinch](./assets/logo.svg)

# BlueFinch Checkout Module - Example Extension

This module serves as an example of how to create a custom extension for the BlueFinch Checkout module.

## Requirements

- Magento 2.4.6 or higher
- Node 16 or higher (for development purposes only)
- Latest version of BlueFinch Checkout

## Installation

Ensure you have installed the latest version of BlueFinch Checkout, which can be found here, [BlueFinch Checkout](https://github.com/bluefinchcommerce/module-checkout).

For information about a module installation in Adobe Commerce, see [Enable or disable modules](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/tutorials/manage-modules).

Remember to clear any appropriate caches.

## Getting Started
Please refer to the [BlueFinch Checkout Modules docs](https://github.com/BlueFinchCommerce/module-checkout), specifically the [Custom extension guide](https://github.com/BlueFinchCommerce/module-checkout/blob/main/docs/Extensions.md) and the [how to create a checkout extension module](https://github.com/BlueFinchCommerce/module-checkout/blob/main/docs/how-to-create-a-checkout-extension-module.md) document.

## Local frontend development workflow

Please refer to the local frontend development workflow section of the [BlueFinch Checkout contributing guidelines](https://github.com/BlueFinchCommerce/module-checkout/blob/main/.github/CONTRIBUTING.md), that applies to all BlueFinch Checkout extension modules, such as this one.

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
