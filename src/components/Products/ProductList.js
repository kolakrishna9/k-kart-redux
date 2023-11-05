import React, { useState, useEffect } from "react";
import Styles from "./ProductList.module.css";
import Product from "./Product";
import loadingImg from "../../assets/icons/loading.svg";
import { connect } from 'react-redux';
import { getProducts } from "./actions";

const ProductList = ({products, loading, getProducts}) => {
  const options = ["men's clothing", "women's clothing", "jewelery", "electronics"];
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleFilterChange = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const getProductsList = () => {
    return products.filter((item) => selectedFilters.length === 0 || selectedFilters.includes(item.category));
  };

  return (
    <>
      <div className={Styles.filters}>
        <h3>Filter</h3>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(option)}
              onChange={() => handleFilterChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div className={Styles.container}>
        {loading &&
        <img src={loadingImg} alt="tt" style={{ width: "100%" }} />
        }
        {!loading && getProductsList().map((item) => (
          <Product key={item.id} productData={item} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    loading: state.products.loading,
  };
};

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
