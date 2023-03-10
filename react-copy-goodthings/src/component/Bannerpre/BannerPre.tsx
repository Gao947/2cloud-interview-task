import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./BannerPre.module.css";
import { GlobeAsiaAustralia, Amd, Rocket, Lightbulb, Telephone } from 'react-bootstrap-icons';

function BannerPre() {
    return (
        <div className={styles.bannerpre}>
            <Container>
                <div className={styles["banner-text"]}>
                    <span className={styles["banner-item"]}>
                        <GlobeAsiaAustralia className={styles["banner-icon"]} />
                        Australian owned
                    </span>
                    <span className={styles["banner-item"]}>
                        <Amd className={styles["banner-icon"]} />
                        Free artwork
                    </span>
                    <span className={styles["banner-item"]}>
                        <Lightbulb className={styles["banner-icon"]} />
                        Our protfolio
                    </span>
                    <span className={styles["banner-item"]}>
                        <Telephone className={styles["banner-icon"]} />
                        1800 659 649
                    </span>
                    <span className={styles["banner-item"]}>
                        <Rocket className={styles["banner-icon"]} />
                        About us
                    </span>
                    <span className={styles["banner-item"]}>Logo placeholder</span>
                </div>
            </Container>
        </div>
    )
}

export default BannerPre;