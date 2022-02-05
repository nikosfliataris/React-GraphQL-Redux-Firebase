export const addItemToCart = (cartItem, cartItemToAdd) => {
  const existItem = cartItem.find((item) => item.id === cartItemToAdd.id);
  if (existItem) {
    return cartItem.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  }
  return [...cartItem, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaceitem = (cartItem, remove) => {
  const exist = cartItem.find((item) => item.id === remove.id);
  if (exist.quantity === 1) {
    return cartItem.filter((item) => item.id !== remove.id);
  }
  return cartItem.map((item) =>
    item.id === remove.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
