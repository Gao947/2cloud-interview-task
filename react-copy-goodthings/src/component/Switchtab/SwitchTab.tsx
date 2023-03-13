import { Container, Row } from "react-bootstrap";
import styles from "./SwitchTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useKeenSlider } from 'keen-slider/react' 
import Image from 'react-bootstrap/Image';
import { SwitchItem } from "./Switchitem";
import { productLPData } from "../../data/productsLP";
import { productBSData } from "../../data/productsBS";
import { productEPData } from "../../data/productsEP";
import { productCAData } from "../../data/productsCA";
import { productEFData } from "../../data/productsEF";

function SwitchTabComponent() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 20,
    },
  })

  return (
    <div className={styles['swatch-tab-body']}>
      <Container>
        <Tabs
          defaultActiveKey="lastest"
          className={styles['switch-tab-text']}
          fill
        >
          <Tab eventKey="lastest" title="Latest Products">
            <div ref={sliderRef} className="keen-slider">
              {productLPData.map((data) => {
                return (
                  <SwitchItem
                    imgurl={data.imgurl}
                    name={data.name}
                    price={data.price}
                    quantity={data.quantity}
                  />
                );
             })
              } 
            </div>
          </Tab>

        <Tab eventKey="sellers" title="Best Sellers">
        <div ref={sliderRef} className="keen-slider">
              {productBSData.map((data) => {
                return (
                  <SwitchItem
                    imgurl={data.imgurl}
                    name={data.name}
                    price={data.price}
                    quantity={data.quantity}
                  />
                );
             })
              } 
            </div>
        </Tab>

        <Tab eventKey="express" title="Express Products">
        <div ref={sliderRef} className="keen-slider">
              {productEPData.map((data) => {
                return (
                  <SwitchItem
                    imgurl={data.imgurl}
                    name={data.name}
                    price={data.price}
                    quantity={data.quantity}
                  />
                );
             })
              } 
            </div>
        </Tab>

        <Tab eventKey="clothing" title="Clothing & Apparel">
        <div ref={sliderRef} className="keen-slider">
              {productCAData.map((data) => {
                return (
                  <SwitchItem
                    imgurl={data.imgurl}
                    name={data.name}
                    price={data.price}
                    quantity={data.quantity}
                  />
                );
             })
              } 
            </div>
        </Tab>

        <Tab eventKey="eco" title="Eco Friendly">
        <div ref={sliderRef} className="keen-slider">
              {productEFData.map((data) => {
                return (
                  <SwitchItem
                    imgurl={data.imgurl}
                    name={data.name}
                    price={data.price}
                    quantity={data.quantity}
                  />
                );
             })
              } 
            </div>
        </Tab>
      </Tabs>
    </Container>
    </div>
  )
}

export default SwitchTabComponent;