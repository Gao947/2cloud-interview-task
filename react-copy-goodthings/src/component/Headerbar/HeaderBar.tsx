import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import styles from "./HeaderBar.module.css";
import Image from 'react-bootstrap/Image';

import brandlogo from "../../img/logo-white.svg";
import googlelogo from "../../img/google-g-color.svg";


function HeaderBar() {
    return (
        <div className={styles['header-bar']}>
            <Container>
                <Row>
                    <Col>
                        <a href="https://goodthings.com.au/">
                            <Image id={styles['brand-logo']} src={brandlogo} />
                        </a>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <a href="https://search.google.com/local/reviews?placeid=ChIJ-5dsFmoU1moR9Sk7rGU8ZAo">
                                    <Image id={styles['google-logo']} src={googlelogo} />
                                </a>
                            </Col>
                            <Col>
                                <Row>
                                    <span id={styles['stars']}>★★★★★</span>
                                </Row>
                                <Row>
                                    <span id={styles['review-count']}>250+ Reviews</span>
                                </Row>
                            </Col>
                            <Col>
                                <InputGroup id={styles['search-bar']}>
                                    <Form.Control
                                        placeholder="Search promotional products"
                                        aria-label="Search promotional products"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id={styles['searchbar-button']}>
                                        Search
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderBar;