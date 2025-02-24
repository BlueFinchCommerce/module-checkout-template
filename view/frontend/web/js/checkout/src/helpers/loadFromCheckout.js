export default async (components) => {
  const mappings = typeof components === 'string'
    ? [components]
    : components;

  const { default: checkout } = await import(window.bluefinchCheckout.main);

  const importedComponents = mappings.map((mapping) => {
    const [type, component] = mapping.split('.');

    return type === 'stores'
      ? checkout[type][component]()
      : checkout[type][component];
  });

  return importedComponents;
};
