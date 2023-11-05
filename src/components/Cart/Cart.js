import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import loading from "../../assets/icons/loading.svg";
import CartItem from "./CartItem";
import { clearCart, checkoutCart } from "./actions";

import Styles from "./Cart.module.css";

const Cart = ({cart, clearCart, checkoutCart}) => {

  return (
    <div className={Styles.container}>
      <div className={Styles.cartContainer}>
        {cart.cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>

      {cart.itemsCounter > 0 && (
        <div className={Styles.payments}>
          <p>
            <span>Total Items : </span>
            {cart.itemsCounter}
          </p>
          <p>
            <span>Total payments : </span>
            {cart.total} $
          </p>
          <div className={Styles.buttonContainer}>
            <button
              className={Styles.checkout}
              onClick={checkoutCart}>
              Check Out
            </button>
            <button
              className={Styles.clear}
              onClick={clearCart}>
              Clear
            </button>
          </div>
        </div>
      )}
      {cart.checkout && (
        <div className={Styles.complete}>
          <img src={loading} alt="tt" style={{ width: "100%" }} />
          <h3> Checked Out Successful </h3>
          <Link to="/products"> Buy More</Link>
        </div>
      )}
      {!cart.checkout && cart.itemsCounter === 0 && (
        <div className={Styles.complete}>
          <h2>Cart is empty</h2>
          <h3> Back to Shop </h3>
          <Link to="/products"> Shop</Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  clearCart,
  checkoutCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
