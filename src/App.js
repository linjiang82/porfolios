import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Aboutme from './components/aboutme';
import Portfolios from './components/portfolios';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar collapseOnSelect={true}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">HOME</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#aboutme">
                  About Me
                </NavItem>
                <NavItem eventKey={2} href="#portfolios">
                  Portfolios
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Contact Me
                </NavItem>
                <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>Action</MenuItem>
                  <MenuItem eventKey={4.2}>Another action</MenuItem>
                  <MenuItem eventKey={4.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.4}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Aboutme id='aboutme'/>
        <Portfolios id='portfolios'/>
      </div>
    );
  }
}

export default App;
