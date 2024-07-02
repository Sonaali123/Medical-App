import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
    Button
} from "reactstrap";

//Import  Logo Images
import logolight from "/Users/sunnyp/medapp2/src/assets/images/logo-png.png";
import logodark from "/Users/sunnyp/medapp2/src/assets/images/logo-png.png";


class NavbarContainer extends Component {
  state = {
      isOpenMenu: false,
  };

  toggle = () =>{
      this.setState({isOpenMenu: !this.state.isOpenMenu})
};

  render() {
      return (
        <>
          <Navbar
            expand="lg"
            fixed="top"
            className={
              "navbar-custom sticky sticky sticky-dark " + this.props.navClass
            }
          >
            <Container>
              <NavbarBrand className="logo text-uppercase" href="/">
                {this.props.imglight === true ? (
                  <img
                    src={logolight}
                    alt=""
                    className="logo-light"
                    height="45"
                  />
                ) : (
                  <img
                    src={logodark}
                    alt=""
                    className="logo-dark"
                    height="45"
                  />
                )}
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle}>
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>
              <Collapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
                <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                  <NavItem>
                    <NavLink href="/login" to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                
                      <Button href="/signup"
                        color="success"
                        className="btn-rounded navbar-btn"
                      >
                        Sign Up
                      </Button>

                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </>
      );
  }
}

export default NavbarContainer;
