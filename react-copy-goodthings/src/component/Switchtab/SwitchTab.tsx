import { Container } from "react-bootstrap";
import styles from "./SwitchTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useKeenSlider } from 'keen-slider/react' 
import Image from 'react-bootstrap/Image';

import lp1 from "../../img/LP1.webp";
import lp2 from "../../img/LP2.webp";
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
      <Image id={styles['switch-img-container']} src={lp1} />
      <span id={styles['switch-img-tag']}>New arrival</span>
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide2">
      <Image id={styles['switch-img-container']} src={lp2} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide3">
      <Image id={styles['switch-img-container']} src={lp3} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide4">
      <Image id={styles['switch-img-container']} src={lp4} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide5">
      <Image id={styles['switch-img-container']} src={lp5} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide6">
      <Image id={styles['switch-img-container']} src={lp6} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide6">
      <Image id={styles['switch-img-container']} src={lp7} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
      </div>
      <div className="keen-slider__slide number-slide6">
      <Image id={styles['switch-img-container']} src={lp8} />
      <span>NSW Touch Football Bilk Shorts</span>
      <span>from$31.8</span> <span>Min Qty: 1</span>
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