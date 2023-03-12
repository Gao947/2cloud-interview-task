import { Container } from "react-bootstrap";
import styles from "./SwitchTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SwitchTabComponent() {
  return (
    <Container className={styles['swatch-tab-body']}>
      <Tabs
        defaultActiveKey="profile"
        className={styles['switch-tab-text']}
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