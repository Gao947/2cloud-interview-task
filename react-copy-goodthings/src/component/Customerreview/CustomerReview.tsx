import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./CustomerReview.module.css";
import { ReviewItem } from "./Reviewitem";
import { reviewData } from "../../data/reviews";

export const CustomerReview: React.FC = () => {
    return (
        <div className={styles['customer-review-body']}>
            <Container>
                <h1 className={styles['review-content-title']}>
                    What our clients say ⭐️⭐️⭐️⭐️⭐️
                </h1>
                <Row>
                    <Col xl="1">
                    </Col>
                    {reviewData.map((data) => {
                        return (
                            <ReviewItem
                                name={data.name}
                                stars={data.stars}
                                time={data.time}
                                review={data.review}

                            />
                        );
                    })
                    }
                    <Col xl="1">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}