import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./ProductSwatch.module.css";
import Image from 'react-bootstrap/Image';
import { MDBRipple } from 'mdb-react-ui-kit';

import productswatch1 from "../../img/good-notepads-1.webp";
import productswatch21 from "../../img/good-bags.webp";
import productswatch22 from "../../img/good-tshirts.webp";
import productswatch23 from "../../img/good-bottles.webp";
import productswatch24 from "../../img/good-pens.webp";
import productswatch31 from "../../img/good-apparel-1.webp";
import productswatch32 from "../../img/good-socks-2.webp";
import productswatch33 from "../../img/good-tech-1.webp";
import productswatch34 from "../../img/good-umbrellas-1.webp";
import productswatch4 from "../../img/good-hats.webp";


function ProductSwatchComponent() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className={styles['swatch-title']}>
                        Our Brandable Products
                    </h2>   
                </Row>

                <Row>
                    <Row>
                        <Col xl="6">
                            <div className={styles['container']}>
                                <Image className={styles['image']} src={productswatch1} />
                                <div className={styles['original-text-container']}>
                                    <div className={styles['original-text']}>original-text</div>
                                </div>
                                <div className={styles['middle']}>
                                    <div className={styles['hover-show-text']} >John Doe</div>
                                </div>
                            </div>
                        </Col> 

                            {/* <a href="https://goodthings.com.au/product-category/stationery/">
                                <Image id={styles['swatch-product-book']} src={productswatch1} />
                            </a>
                            <div className="middle">
                                <div className="text">John Doe</div>
                            </div> */}
                        
                        <Col xl="6">
                            <Row>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image alt="bag" className={styles['swatch-product-s-left']} src={productswatch21} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image alt="cloth" className={styles['swatch-product-s-right']} src={productswatch22} />
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image alt="bottle" className={styles['swatch-product-s-left']} src={productswatch23} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image className={styles['swatch-product-s-right']} src={productswatch24} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="6">
                            <Row>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image className={styles['swatch-product-s-left']} src={productswatch31} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image className={styles['swatch-product-s-right']} src={productswatch32} />
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image className={styles['swatch-product-s-left']} src={productswatch33} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                        <Image className={styles['swatch-product-s-right']} src={productswatch34} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="6" className={styles['swatch-product-col']}>
                            <a href="https://goodthings.com.au/product-category/promotional-bags/">
                                <Image id={styles['swatch-product-hat']} src={productswatch4} />
                            </a>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col>
                        <Button id={styles['swatch-button-left']} variant="primary">Browse all products</Button>
                    </Col>
                    <Col>
                        <Button id={styles['swatch-button-right']} variant="primary">View portfolio</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductSwatchComponent;