import { Card, Col } from "react-bootstrap";
import styles from "./ReviewItem.module.css";
import Image from 'react-bootstrap/Image';
import googlelogo from "../../../img/google-g-color.svg";

interface PropsType {
    name: string;
    stars: string;
    time: string;
    review: string
}

export const ReviewItem: React.FC<PropsType> = ({
    name,
    stars,
    time,
    review,
}) => {
    return (
        <Col xl="2" md="4" xs="6">
            <Card className={styles['review-body']}>
                <Card.Body>
                    <Image className={styles['card-google-logo']} src={googlelogo} />
                    <Card.Title className={styles['review-card-title']}>{name}</Card.Title>
                    <Card.Subtitle className={styles['review-card-subtitle-star']}>{stars}</Card.Subtitle>
                    <p className={styles['review-card-subtitle-time']}>{time}</p>
                    <Card.Text className={styles['review-card-text']}>
                        {review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}