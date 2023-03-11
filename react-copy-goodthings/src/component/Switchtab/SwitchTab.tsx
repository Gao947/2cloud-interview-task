import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SwitchTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SwitchTabComponent (){
    return (
        <Container>
        <Tabs
      defaultActiveKey="profile"
      id={styles['switch-tab-text']}
      className="mb-3"
      fill
    >
      <Tab eventKey="lastest" title="Latest Products"> 
      Latest Products 
      </Tab>

      <Tab eventKey="sellers" title="Best Sellers">
      Best Sellers
      </Tab>

      <Tab eventKey="express" title="Express Products">
      Express Products
      </Tab>

      <Tab eventKey="clothing" title="Clothing & Apparel">
      Clothing & Apparel
      </Tab>

      <Tab eventKey="eco" title="Eco Friendly">
      Eco Friendly Products
      </Tab>
    </Tabs>
      </Container>
    )
}

export default SwitchTabComponent;