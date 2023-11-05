import { Rating } from "@mui/material";
import { connect } from 'react-redux';
import React from "react";
import { Link, useParams } from "react-router-dom";
import { isInCart, itemCount } from "../../helper/functions";
import trash from "../../assets/icons/trash.svg";
import Styles from "./ProductDetails.module.css";
import { addItem, removeItem, increaseItem, decreaseItem } from "../Cart/actions";


const ProductDetails = ({products, cart, addItem, removeItem, increaseItem, decreaseItem}) => {
  const params = useParams();
  const id = params.id;
  const product = products[id-1];
  // const product = products.find((p) => p.id === id);
  const { title, price, category, description, image, rating } = product;
  const { rate } = rating;

  return (
    <div className={Styles.container}>
      <img className={Styles.image} src={image} alt={title} />
      <div className={Styles.textContainer}>
        <h3>{title}</h3>
        <p className={Styles.description}>{description}</p>
        <p className={Styles.category}>Category : {category}</p>
        <Rating
          name="half-rating"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />

        <div className={Styles.buttonContainer}>
          <span className={Styles.price}> {price} $ </span>

          <div className={Styles.buttonContainer}>
            {itemCount(cart, product.id) > 1 && (
              <button
              className={Styles.smallButton}

                onClick={() =>
                  decreaseItem(product)
                }>
                -
              </button>
            )}
            {itemCount(cart, product.id) === 1 && (
              <button
              className={Styles.smallButton}

                onClick={() =>
                  removeItem(product)
                }>
                <img src={trash} alt="icon" style={{ width: "20px" }} />
              </button>
            )}

            {itemCount(cart, product.id) > 0 && (
              <span className={Styles.counter}> {itemCount(cart, product.id)}</span>
            )}

            {isInCart(cart, product.id) ? (
              <button
              className={Styles.smallButton}

                onClick={() =>
                  increaseItem(product)
                }>
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  addItem(product)
                }>
                Add to Cart
              </button>
            )}
          </div>
        </div>
        <div className={Styles.buttonContainer}>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
