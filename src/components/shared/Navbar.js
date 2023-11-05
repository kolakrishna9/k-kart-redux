import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import shopIcon from "../../assets/icons/shop.svg";
import Styles from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = ({cart}) => {

  return (
    <AppBar position="static" style={{ backgroundColor: "#191c26" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}>
              <Link className={Styles.productLink} to="/products">
                K-Kart
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link className={Styles.iconContainer} to="/cart">
              <div className={Styles.iconContainer}>
                <img src={shopIcon} alt="shop" />
                <span>{cart.itemsCounter}</span>
              </div>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
