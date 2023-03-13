import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Footer.module.css";
import Image from 'react-bootstrap/Image';
import brandlogo from "../../img/logo-white.svg";

function FooterComponent() {
    return (
        <div className={styles['footer-body']}>
            <Container className={styles['footer-container']}>
                <Row>
                    <a href="https://goodthings.com.au/">
                        <Image className={styles['brand-logo']} id='' src={brandlogo} />
                    </a>
                </Row>
                <Row>
                    <Col lg="8">
                        <Row>
                            <Col lg="8"><span id={styles['subtitle']}>Good things</span></Col>
                            <Col><span id={styles['subtitle']}>Help and Support</span></Col>

                        </Row>
                        <Row className={styles['href-text']}>
                            <Col>
                                <Row ><a href="/about-us/">About Us</a></Row>
                                <Row><a href="/our-media/">In The Media</a></Row>
                                <Row><a href="/blog/">Our Blog</a></Row>
                                <Row><a href="/our-process/">Process</a></Row>
                                <Row><a href="/your-merch-store/">Your Merch Store</a></Row>
                            </Col>
                            <Col>

                                <Row><a href="/privacy/">Privacy Policy</a></Row>
                                <Row><a href="/terms/">Terms &amp; Conditions</a></Row>
                                <Row><a href="/product-guides/">Product Guides</a></Row>
                                <Row><a href="/testimonials/">Testimonials</a></Row>
                                <Row><a href="/our-customer-reviews/">Reviews</a></Row>
                            </Col>
                            <Col>
                                <Row><a href="/account/orders/">My Account</a></Row>
                                <Row><a href="/faqs/">FAQs</a></Row>
                                <Row><a href="/pms-colour-chart/">PMS Chart</a></Row>
                                <Row><a href="/contact/">Contact</a></Row>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <Row><span id={styles['subtitle']}>Contact us</span></Row>
                        <Row>
                            <Form>
                            <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Your name" />
                                </Form.Group>                       

                                <Form.Group className="mb-3">
                                    <Row>
                                        <Col>
                                    <Form.Control type="email" placeholder="Email address" />
                                    </Col>
                                    <Col>
                                    <Form.Control type="phone" placeholder="Phone number" /> 
                                    </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control as="textarea" type="message" placeholder="Message" />
                                </Form.Group>
                                <Button className={styles['button']} type="submit">
                                    SEND
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default FooterComponent;