import React from "react";
import { connect } from 'react-redux';
import Styles from "./CartItem.module.css";
import { shorten } from "../../helper/functions";
import trash from "../../assets/icons/trash.svg";
import { removeItem, increaseItem, decreaseItem } from "./actions";


const CartItem = ({ data, removeItem, increaseItem, decreaseItem }) => {
  const { title, price, quantity, image } = data;
  return (
    <div className={Styles.container}>
      <img className={Styles.productImage} src={image} alt={title} />
      <div className={Styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={Styles.quantity}>{quantity}</span>
      </div>
      <div className={Styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => decreaseItem(data)}>
            -
          </button>
        ) : (
          <button
            onClick={() => removeItem(data)}>
            <img src={trash} alt={title} style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={() => increaseItem(data)}>
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeItem,
  increaseItem,
  decreaseItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
