import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./CustomerReview.module.css";

export const CustomerReview: React.FC = () => {
    return (
        <div className={styles['customer-review-body']}>
        <Container>
            <h1 className={styles['question-content-title']}>
                What our clients say ⭐️⭐️⭐️⭐️⭐️
            </h1>
            <Row>
                <Col xl="1">
                </Col>
                <Col xl="2">
                    <Card className={styles['question-body']}>
                        <Card.Body>
                            <Card.Title className={styles['question-card-title']}>Hane Y.</Card.Title>
                            <Card.Subtitle className={styles['question-card-subtitle-star']}>★★★★★</Card.Subtitle>
                            <p className={styles['question-card-subtitle-time']}>a day ago</p>
                            <Card.Text className={styles['question-card-text']}>
                                Great communication and service from the start! Love the product we got. Thanks very much!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl="2">
                    <p>Hane Y.</p>
                    <p>FIVE SATRS</p>
                    <p>a day ago</p>
                    <p>Great communication and service from the start! Love the product we got. Thanks very much!</p>
                </Col>
                <Col xl="2">
                    <p>Hane Y.</p>
                    <p>FIVE SATRS</p>
                    <p>a day ago</p>
                    <p>Great communication and service from the start! Love the product we got. Thanks very much!</p>
                </Col>
                <Col xl="2">
                    <p>Hane Y.</p>
                    <p>FIVE SATRS</p>
                    <p>a day ago</p>
                    <p>Great communication and service from the start! Love the product we got. Thanks very much!</p>
                </Col>
                <Col xl="2">
                    <p>Hane Y.</p>
                    <p>FIVE SATRS</p>
                    <p>a day ago</p>
                    <p>Great communication and service from the start! Love the product we got. Thanks very much!</p>
                </Col>
                <Col xl="1">
                </Col>
            </Row>
        </Container>
        </div>
    )
}