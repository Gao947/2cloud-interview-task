import React, { useState } from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./NavBar.module.css";

function NavBar() {
    const [showAllProductDropdown, setShowAllProductDropdown] = useState(false);
    const [showBagsDropdown, setShowBagsDropdown] = useState(false);
    const [showConfectioneryDropdown, setShowConfectioneryDropdown] = useState(false);
    const [showDrinkBottlesDropdown, setShowDrinkBottlesDropdown] = useState(false);
    const [showClothingAndApparelDropdown, setShowClothingAndApparelDropdown] = useState(false);
    const [showEcoFriendlyDropdown, setShowEcoFriendlyDropdown] = useState(false);
    const [showContactUsDropdown, setShowContactUsDropdown] = useState(false);

    return (
        <div>
            <Navbar
                className={styles['navbar']}
                collapseOnSelect
                expand="lg"
            >
                <Container>
                    <NavDropdown
                        title="All products"
                        onMouseLeave={() => setShowAllProductDropdown(false)}
                        onMouseOver={() => setShowAllProductDropdown(true)}
                        id={styles['navbar-item']}
                        show={showAllProductDropdown}
                        className={styles['mega-menu-dropdown']}
                    >
                        <Container className={styles['menu-col-item']}>
                            <div id={styles['menu-col-item-text']}>
                                <NavDropdown.Item href="#"> 🌟 Best Sellers 🌟 </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Bespoke Products </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Caps & Hats </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Clothing & Apparel </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Conferences & Events </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Customer Mugs </NavDropdown.Item>
                                <NavDropdown.Item href="#"> EcoFriendly </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Gift Sets </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Homeware </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Outdoor </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Personal Care </NavDropdown.Item>
                            </div>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title="bags"
                        onMouseLeave={() => setShowBagsDropdown(false)}
                        onMouseOver={() => setShowBagsDropdown(true)}
                        id={styles['navbar-item']}
                        show={showBagsDropdown}
                        className={styles['mega-menu-dropdown']}
                    >
                        <Container className={styles['menu-col-item']}>
                            <div id={styles['menu-col-item-text']}>
                                <NavDropdown.Item href="#"> Tote Bags </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Wine Bags </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Bag Tags </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Paper Bags </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Cooler Bags </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Backpacks & Backsacks </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Laptop Bags </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Satchels </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Duffle & Sports Bags </NavDropdown.Item>
                            </div>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title="confectionery"
                        onMouseLeave={() => setShowConfectioneryDropdown(false)}
                        onMouseOver={() => setShowConfectioneryDropdown(true)}
                        id={styles['navbar-item']}
                        show={showConfectioneryDropdown}
                    >
                        <Container className={styles['menu-col-item']}>
                            <div id={styles['menu-col-item-text']}>
                                <NavDropdown.Item href="#"> Sklttles </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Promotional Chocolate </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Promotional Jelly Beans </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Promotional Lolly Pops </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Mints </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Mixed Lollies </NavDropdown.Item>
                            </div>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title="drink bottles"
                        onMouseLeave={() => setShowDrinkBottlesDropdown(false)}
                        onMouseOver={() => setShowDrinkBottlesDropdown(true)}
                        id={styles['navbar-item']}
                        show={showDrinkBottlesDropdown}
                    >
                        <Container className={styles['menu-col-item']}>
                            <div id={styles['menu-col-item-text']}>
                                <NavDropdown.Item href="#"> Plastic Drink Bottles </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Metal Drink Bottles </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Double Wall Drink Bottle </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Glass Drink Bottles </NavDropdown.Item>
                            </div>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title="clothing & apparel"
                        onMouseLeave={() => setShowClothingAndApparelDropdown(false)}
                        onMouseOver={() => setShowClothingAndApparelDropdown(true)}
                        id={styles['navbar-item']}
                        show={showClothingAndApparelDropdown}
                    >
                        <Container className={styles['menu-col-item']}>
                            <div id={styles['menu-col-item-text']}>
                                <NavDropdown.Item href="#"> T-shirts - Mens </NavDropdown.Item>
                                <NavDropdown.Item href="#"> T-shirts – Women’s </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Polo Shirts </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Custom Socks </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Singlets & Tanks </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Jackets & Vests </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Kids & Youth </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Corporate Wear </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Ties & Scarves </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Promotional Board Shorts </NavDropdown.Item>
                                <NavDropdown.Item href="#"> Aprons </NavDropdown.Item>
                            </div>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title="eco friendly"
                        onMouseLeave={() => setShowEcoFriendlyDropdown(false)}
                        onMouseOver={() => setShowEcoFriendlyDropdown(true)}
                        id={styles['navbar-item']}
                        show={showEcoFriendlyDropdown}
                    >
                        <NavDropdown.Divider />
                    </NavDropdown>

                    <Dropdown
                        onMouseLeave={() => setShowContactUsDropdown(false)}
                        onMouseOver={() => setShowContactUsDropdown(true)}
                    >
                        <Dropdown.Toggle
                            className="main-style"
                            id={styles['nabar-button']}
                        >
                            Contact us
                        </Dropdown.Toggle>

                        <Dropdown.Menu show={showContactUsDropdown} id={styles['contact-dropdown-menu']}>
                            <Container id={styles['contact-item']}>
                                <Button id={styles['contact-button']}>Email us</Button>
                                <Dropdown.Item href="#/action-1" id={styles['contact-text']}>
                                    <p>Please note most of our <br />
                                        products have a minimum qty of <br />
                                        20+ units. If you'd like to chat <br />
                                        call:
                                    </p>
                                    <a href="#/action-1"> 1800 659 649 </a>
                                    <p>For assistance with your order, <br />
                                        select Option 2.
                                    </p>
                                </Dropdown.Item>
                            </Container>
                        </Dropdown.Menu>
                    </Dropdown>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;