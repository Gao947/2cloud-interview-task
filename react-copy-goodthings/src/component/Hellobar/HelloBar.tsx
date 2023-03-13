import React from "react";
import { Container } from "react-bootstrap";
import styles from "./HelloBar.module.css";

function HelloBar (){
    return (
        <div className={styles['Hellobar']}>
        <Container className={styles['text']}>
          <span>
            Happy summer Australia!☀️ We're back and ready to help you with all your merch needs 😎
          </span>
        </Container>
      </div>
    )
}

export default HelloBar;