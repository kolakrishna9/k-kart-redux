export const shorten = (title) => {
  const splittedTitle = title.split(" ");
  if (splittedTitle[1] === "-") {
    return `${splittedTitle[0]} ${splittedTitle[2]}`;
  } else {
    return `${splittedTitle[0]} ${splittedTitle[1]}`;
  }
};

export const isInCart = (state, id) => {
  const result = !!state.cartItems.find((item) => item.id === id);
  return result;
};

export const itemCount = (cart, id) => {
  const index = cart.cartItems.findIndex((item) => item.id === id);
  if(index ===-1){
    return false
  }else{
    return cart.cartItems[index].quantity
  }
};
