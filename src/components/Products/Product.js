import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { isInCart, itemCount, shorten } from "../../helper/functions";
import trash from "../../assets/icons/trash.svg";
import Styles from "./Product.module.css";
import { addItem, removeItem, increaseItem, decreaseItem } from "../Cart/actions";

const Product = ({ productData, cart, addItem, removeItem, increaseItem, decreaseItem }) => {
  const { id, title, price, category, image, rating } = productData;
  const { rate } = rating;
  return (
    <div className={Styles.container}>
      <Link to={`/products/${id}`}>
        <img
          className={Styles.cardImage}
          src={image}
          alt={title}
          style={{ width: "230px" }}
        />
        <h3>{shorten(title)}</h3>
        <p>$ {price}</p>
        <p>Category : {category} </p>
        <Rating name="half-rating" defaultValue={rate} precision={0.5} readOnly />
      </Link>
      <div className={Styles.linkContainer}>
        <div className={Styles.buttonContainer}>
          {itemCount(cart, id) > 1 && (
            <button
              className={Styles.smallButton}
              onClick={() =>
                decreaseItem(productData)
              }>
              -
            </button>
          )}
          {itemCount(cart, id) === 1 && (
            <button
              className={Styles.smallButton}
              onClick={() =>
                removeItem(productData)
              }>
              <img src={trash} alt="icon" style={{ width: "20px" }} />
            </button>
          )}
          {itemCount(cart, id) > 0 && <span className={Styles.counter}> {itemCount(cart, id)}</span>}
          {isInCart(cart, id) ? (
            <button
              className={Styles.smallButton}
              onClick={() =>
                increaseItem(productData)
              }>
              +
            </button>
          ) : (
            <button
              onClick={() =>
                addItem(productData)
              }>
              Add to Cart
            </button>
          )}
        </div>
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
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
