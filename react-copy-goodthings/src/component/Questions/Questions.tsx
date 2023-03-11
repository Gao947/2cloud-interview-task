import { Container, Row, Col } from "react-bootstrap";
import styles from "./Questions.module.css";
import Accordion from 'react-bootstrap/Accordion';
import { QuestionItem } from "./Questionitem";
import { questionData } from "../../data/questions";

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

                        <Accordion defaultActiveKey="0">

                            {questionData.slice(0, 7).map((data) => {
                                return (
                                    <QuestionItem
                                        eventKey={data.eventKey}
                                        question={data.question}
                                        answer={data.answer}
                                    />
                                );
                            })
                            }

                        </Accordion>
                    </Col>

                    <Col>
                        <Accordion defaultActiveKey="1">

                            {questionData.slice(7).map((data) => {
                                return (
                                    <QuestionItem
                                        eventKey={data.eventKey}
                                        question={data.question}
                                        answer={data.answer}
                                    />
                                );
                            })
                            }
                        </Accordion>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default QuestionComponent;