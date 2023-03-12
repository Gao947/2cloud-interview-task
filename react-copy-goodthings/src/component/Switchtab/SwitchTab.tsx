import { Container } from "react-bootstrap";
import styles from "./SwitchTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useKeenSlider } from 'keen-slider/react' 
import Image from 'react-bootstrap/Image';

import lp12 from "../../img/LP12.webp";
import lp3 from "../../img/LP3.webp";
import lp4 from "../../img/LP4.webp";
import lp5 from "../../img/LP5.webp";
import lp6 from "../../img/LP6.webp";
import lp7 from "../../img/LP7.webp";
import lp8 from "../../img/LP8.webp";


function SwitchTabComponent() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 8,
    },
  })

  return (
    <div className={styles['swatch-tab-body']}>
    <Container>
      <Tabs
        defaultActiveKey="profile"
        className={styles['switch-tab-text']}
      >
        <Tab eventKey="lastest" title="Latest Products">
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
      <Image id={styles['switch-img-container']} src={lp12} />
      </div>
      <div className="keen-slider__slide number-slide2">
      <Image id={styles['switch-img-container']} src={lp12} />
      </div>
      <div className="keen-slider__slide number-slide3">
      <Image id={styles['switch-img-container']} src={lp3} />
      </div>
      <div className="keen-slider__slide number-slide4">
      <Image id={styles['switch-img-container']} src={lp4} />
      </div>
      <div className="keen-slider__slide number-slide5">
      <Image id={styles['switch-img-container']} src={lp5} />
      </div>
      <div className="keen-slider__slide number-slide6">
      <Image id={styles['switch-img-container']} src={lp6} />
      </div>
      <div className="keen-slider__slide number-slide6">
      <Image id={styles['switch-img-container']} src={lp7} />
      </div>
      <div className="keen-slider__slide number-slide6">
      <Image id={styles['switch-img-container']} src={lp8} />
      </div>
    </div>
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
    </div>
  )
}

export default SwitchTabComponent;