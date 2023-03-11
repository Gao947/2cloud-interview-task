import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Questions.module.css";
import Accordion from 'react-bootstrap/Accordion';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function QuestionComponent() {
    return (
        <div className={styles['question-body']}>
            <Container>
                <Row>
                    <h2 className={styles['question-title']}>We’ve answered your Good FAQs.</h2>
                </Row>
                <Row>
                    <span className={styles['question-text']}>
                        Since 2011 Good Things has been dedicated to making your branded promotional products stand out — with 100% accuracy and quality. We’ve worked
                        with only the best, most reliable and highest-quality suppliers of promotional products over the last 10 years. We have competitive prices and we will
                        beat any competitor's price! Learn why our legendary service earns the trust and confidence of the biggest companies, universities and schools in
                        Australia.
                    </span>
                </Row>
                <Row>
                    <Col>

                    

    <DropdownButton className={styles['question-content-title']} title="What services does Good Things provide?">
      <Dropdown.ItemText>
      We have a fully-fledged team that can help you choose promotional products. We have a range of promotional product & marketing services including finding eco-friendly products, unique product ideas, artwork graphic design, custom packaging and delivery of your products. Our design accounts team will provide mock-ups and final proofs for you to approve before getting a branded sample made and sent your way.
        </Dropdown.ItemText>
    </DropdownButton>



                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className={styles['question-content-title']}>What services does Good Things provide?</span></Accordion.Header>
                                <Accordion.Body>
                                    Text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Why should I use promotional products?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What are your most popular promotional products?</Accordion.Header>
                                <Accordion.Body>
                                    Currently, our custom corduroy caps and custom designed socks are very popular promotional product items. If you want something more subtle then we recommend you go with branded bottles of water, custom bags, custom t-shirts, pens or even personal care items such as branded hand sanitiser and masks, sports towels and sunscreen. If you’re looking for something more work-related then we highly recommend promotional products and corporate gifts, including corporate stationary and Work from Home or care package.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Are your products Australian made?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, some of our promotional products are made in Australia! We’re proud to be working with both on-shore Australian-wide suppliers as well as off-shore international suppliers. If you’re looking for Australian-made promotional merchandise only, then get in contact with our team and we can help you look for them.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How long does it take to get a quote?</Accordion.Header>
                                <Accordion.Body>
                                    We understand that your order enquiry is top priority. One of our key values is “Back in a flash”, our Sales team usually responds to your enquiry within 1 business day.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What format should I supply my artwork in?</Accordion.Header>
                                <Accordion.Body>
                                    You can supply your artwork in a wide range of formats. We highly recommend supplying your digital artwork in either AI (Adobe Illustrator), jpeg, png or PDF formats.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>What is a vector file?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>

                    <Col>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Can you create custom packaging for a gift pack or product order?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can I track my order from production right through to delivery?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How long does delivery take?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Do you ship worldwide?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What if I receive more or less units than my order?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>I’m unsatisfied with my order, can I get a refund?</Accordion.Header>
                                <Accordion.Body>
                                    text
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default QuestionComponent;