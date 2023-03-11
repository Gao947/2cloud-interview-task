import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./NavBar.module.css";

function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div>
            <Navbar className={styles['navbar']}>
                <Container>
                            <NavDropdown
                                title="All products"
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                id={styles['navbar-button']}
                                show={showDropdown}
                            >
                                <NavDropdown.Item href="#action/3.1"> 🌟 Best Sellers 🌟 </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Something </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="bags"
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                id={styles['navbar-button']}
                                show={showDropdown}
                            >
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="confectionery"
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                id={styles['navbar-button']}
                                show={showDropdown}
                            >
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="drink bottles"
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                id={styles['navbar-button']}
                                show={showDropdown}
                            >
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="clothing & apparel"
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                id={styles['navbar-button']}
                                show={showDropdown}
                            >
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="eco friendly"
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                id={styles['navbar-button']}
                                show={showDropdown}
                            >
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Dropdown
      onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
      style={{ width: '166px' }}
    >
      <Dropdown.Toggle
        className="main-style"
        id="dropdown-basic"
      >
        Contact us
      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown}>
        <Dropdown.Item href="#/action-1">
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Another action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          Something else
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;