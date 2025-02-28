<template>
  <p class="new-component">New Component - Payment Method</p>
</template>

<script>
export default {
  name: 'Payment Method',
  data() {
    return {
      key: 'examplePaymentMethod',
    };
  },
  async created() {
    const [
      cartStore,
      paymentStore,
    ] = await window.bluefinchCheckout.helpers.loadFromCheckout([
      'stores.useCartStore',
      'stores.usePaymentStore',
    ]);

    paymentStore.addExpressMethod(this.key);

    await cartStore.getCart();

    console.log(cartStore.cart);
  },
};
</script>
