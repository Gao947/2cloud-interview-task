import { Col, Container, Row } from "react-bootstrap";
import styles from "./BannerPre.module.css";
import { GlobeAsiaAustralia, Amd, Rocket, Lightbulb, Telephone } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import tracelogo from "../../img/trace-climate-positive.webp";

function BannerPre() {
    return (
        <div className={styles["bannerpre"]}>
            <Container>
                <Row className={styles["banner-text"]}>
                    <Col className={styles["banner-item"]}>
                        <GlobeAsiaAustralia className={styles["banner-icon"]} />
                        Australian owned
                    </Col>
                    <Col className={styles["banner-item"]}>
                        <Amd className={styles["banner-icon"]} />
                        Free artwork
                    </Col>
                    <Col className={styles["banner-item"]}>
                        <Lightbulb className={styles["banner-icon"]} />
                        Our protfolio
                    </Col>
                    <Col className={styles["banner-item"]}>
                        <Telephone className={styles["banner-icon"]} />
                        1800 659 649
                    </Col>
                    <Col className={styles["banner-item"]}>
                        <Rocket className={styles["banner-icon"]} />
                        About us
                    </Col>
                    <Col className={styles["banner-item"]}>
                        <Image className={styles['trace-logo']} src={tracelogo} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerPre;