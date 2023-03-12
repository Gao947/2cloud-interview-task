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
import { SwatchItemLarge } from "./SwatchitemLarge";
import { SwatchItemSmall } from "./SwatchitemSmall";


function ProductSwatchComponent() {
    return (
        <div>
            <Container className={styles['swatch-body']}>
                <Row>
                    <h2 className={styles['swatch-title']}>
                        Our Brandable Products
                    </h2>
                </Row>
                <Row>
                    <Row>
                        <SwatchItemLarge
                            imageurl={productswatch1}
                            hyperlink="https://goodthings.com.au/product-category/stationery/"
                            originaltext="good notepads"
                            hovertext="Great for conferences and events" />

                        <Col xl="6">
                            <Row>
                                <SwatchItemLarge
                                    imageurl={productswatch21}
                                    hyperlink="https://goodthings.com.au/product-category/promotional-bags/"
                                    originaltext="good bags"
                                    hovertext="Eco-friendly, cost effective and stylish, we've got it all in the bag." />

                                <SwatchItemLarge
                                    imageurl={productswatch22}
                                    hyperlink="https://goodthings.com.au/product-category/clothing-apparel/"
                                    originaltext="good t-shirts"
                                    hovertext="Wear your brand on your sleeve for all your promotional and event needs." />
                            </Row>
                            <Row>
                                <SwatchItemLarge
                                    imageurl={productswatch23}
                                    hyperlink="https://goodthings.com.au/product-category/drink-water-bottles/"
                                    originaltext="good bottles"
                                    hovertext="Your audience won't forget your brand, or to hydrate." />
                                <SwatchItemLarge
                                    imageurl={productswatch24}
                                    hyperlink="https://goodthings.com.au/product-category/promotional-pens/"
                                    originaltext="good pens"
                                    hovertext="Our personalised pens are something to write home about." />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="6">
                            <Row>
                                <SwatchItemLarge
                                    imageurl={productswatch31}
                                    hyperlink="https://goodthings.com.au/product-category/clothing-apparel/"
                                    originaltext="good apparels"
                                    hovertext="When looking good matters" />
                                <SwatchItemLarge
                                    imageurl={productswatch32}
                                    hyperlink="https://goodthings.com.au/product-category/clothing-apparel/custom-socks/"
                                    originaltext="good socks"
                                    hovertext="Slip into our soft cotton (or wool) socks" />
                            </Row>
                            <Row>
                                <SwatchItemLarge
                                    imageurl={productswatch33}
                                    hyperlink="https://goodthings.com.au/product-category/technology/"
                                    originaltext="good tech"
                                    hovertext="Functional and useful technology" />
                                <SwatchItemLarge
                                    imageurl={productswatch34}
                                    hyperlink="https://goodthings.com.au/product-category/branded-umbrellas/"
                                    originaltext="good umbrellas"
                                    hovertext="Always be ready for a rainy day" />
                            </Row>
                        </Col>
                        <SwatchItemLarge
                            imageurl={productswatch4}
                            hyperlink="https://goodthings.com.au/product-category/caps-hats-clothing-apparel/"
                            originaltext="good hats"
                            hovertext="Promotional hats will cap-tivate your audience." />
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