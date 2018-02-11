import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Navbar className="header" color="faded" light expand="md">
          <NavbarBrand href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="onHover" href="#">Start a Fundraiser</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="onHover" href="#">How it works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="onHover" href="#">Browse Fundraiser</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem>
                    Signup
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Currency
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    ₹ INR
                  </DropdownItem>
                  <DropdownItem>
                   $ USD
                  </DropdownItem>
                   <DropdownItem>
                   £ GBP
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header;
