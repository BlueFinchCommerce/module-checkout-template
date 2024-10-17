import loadFromCheckout from '../helpers/loadFromCheckout';

export default async () => {
  const cartStore = await loadFromCheckout('stores.useCartStore');
  await cartStore.getCart();
  
  console.log('New callback')
};
