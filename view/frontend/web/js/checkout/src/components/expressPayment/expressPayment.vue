<template>
  <p class="new-component">New Component - Express Payment</p>
</template>

<script>
export default {
  name: 'Express Payment',
  data() {
    return {
      key: 'exampleExpressMethod',
    };
  },
  async created() {
    const [
      cartStore,
      paymentStore,
    ] = await window.bluefinchCheckout.helpers.loadFromCheckout([
      'stores.useCartStore',
      'stores.useConfigStore',
      'stores.usePaymentStore',
    ]);

    paymentStore.addExpressMethod(this.key);

    await cartStore.getCart();

    console.log(cartStore.cart);
  },
};
</script>
