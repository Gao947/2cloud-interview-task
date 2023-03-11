import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Questions.module.css";
import Accordion from 'react-bootstrap/Accordion';


function QuestionComponent() {
    return (
        <div className=''>
            <Container>
                <Row>
                    <h2>We’ve answered your Good FAQs.</h2>
                </Row>
                <Row>
                    <h5>
                        Since 2011 Good Things has been dedicated to making your branded promotional products stand out — with 100% accuracy and quality. We’ve worked
                        with only the best, most reliable and highest-quality suppliers of promotional products over the last 10 years. We have competitive prices and we will
                        beat any competitor's price! Learn why our legendary service earns the trust and confidence of the biggest companies, universities and schools in
                        Australia.
                    </h5>
                </Row>
                <Row>
                    <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What services does Good Things provide?</Accordion.Header>
                            <Accordion.Body>
                            We have a fully-fledged team that can help you choose 
                            promotional products. We have a range of promotional product & 
                            marketing services including finding eco-friendly products, unique 
                            product ideas, artwork graphic design, custom packaging and 
                            delivery of your products. Our design accounts team will provide 
                            mock-ups and final proofs for you to approve before getting a 
                            branded sample made and sent your way.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Why should I use promotional products?</Accordion.Header>
                            <Accordion.Body>
                            Promotional products are functional and usable pieces of 
                            advertising in the possession of your customers. Almost every 
                            household will have a branded tote bag or branded drink bottles 
                            that they regularly use. Whether it’s branded plastic pens, branded 
                            tote bags, branded notebooks or something more premium like custom golf umbrellas, high-quality branded portable chargers and branded reusable coffee cups — there is something for everyone when it comes to promotional gift ideas. If you want something that’s better for the environment, then look at our eco-friendly promotional products — better for you, better for your business and better for Earth.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What are your most popular promotional products?</Accordion.Header>
                            <Accordion.Body>
                            Currently, our custom corduroy caps and custom designed socks are very popular promotional product items. If you want something more subtle then we recommend you go with branded bottles of water, custom bags, custom t-shirts, pens or even personal care items such as branded hand sanitiser and masks, sports towels and sunscreen. If you’re looking for something more work-related then we highly recommend promotional products and corporate gifts, including corporate stationary and Work from Home or care package.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Are your products Australian made?</Accordion.Header>
                            <Accordion.Body>
                            Yes, some of our promotional products are made in Australia! We’re proud to be working with both on-shore Australian-wide suppliers as well as off-shore international suppliers. If you’re looking for Australian-made promotional merchandise only, then get in contact with our team and we can help you look for them.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How long does it take to get a quote?</Accordion.Header>
                            <Accordion.Body>
                            We understand that your order enquiry is top priority. One of our key values is “Back in a flash”, our Sales team usually responds to your enquiry within 1 business day.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What format should I supply my artwork in?</Accordion.Header>
                            <Accordion.Body>
                            You can supply your artwork in a wide range of formats. We highly recommend supplying your digital artwork in either AI (Adobe Illustrator), jpeg, png or PDF formats.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is a vector file?</Accordion.Header>
                            <Accordion.Body>
                                text
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    </Col>

                    <Col>
                                       <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What services does Good Things provide?</Accordion.Header>
                            <Accordion.Body>
                                text
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                text
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                text
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                text
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                text
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
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