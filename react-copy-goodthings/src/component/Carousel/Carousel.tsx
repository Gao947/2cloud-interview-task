import { Button, Container } from "react-bootstrap";
import styles from "./Carousel.module.css";
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../img/slider-yellow-chair.webp";
import carousel2 from "../../img/slider-portfolio.webp";
import carousel3 from "../../img/slider-sock-selector.webp";
import carousel4 from "../../img/slider-appawinner.webp";



function CarouselComponent() {
  return (
    <div>
        <Carousel>
          <Carousel.Item id={styles['first-slide']} className={styles['wide-screen-slide']}>
          <Container>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
            />
            <Carousel.Caption id={styles['first-slice-caption']}> 
              <p>Australis's Favourite</p>
              <p>Brandable Products</p>
            </Carousel.Caption>
            </Container>
          </Carousel.Item>

          <Carousel.Item id={styles['second-slide']} className={styles['wide-screen-slide']}>
          <Container>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
            />
            <Carousel.Caption id={styles['second-slice-caption']}>
              <p>Browse our</p>
              <p>Custom Products</p>
              <Button id={styles['second-slice-button']}>View our portfolio</Button>
            </Carousel.Caption>
            </Container>
          </Carousel.Item>

          <Carousel.Item id={styles['third-slide']} className={styles['wide-screen-slide']}>
          <Container>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
            />

            <Carousel.Caption id={styles['third-slice-caption']}>
              <p>
                Create your perfect pair
              </p>
              <Button id={styles['third-slice-button']}>Try our sook selector</Button>
            </Carousel.Caption>
            </Container>
          </Carousel.Item>

          <Carousel.Item id={styles['fourth-slide']} className={styles['wide-screen-slide']} >
            <Container>
            <img
              className="d-block w-100"
              src={carousel4}
              alt="Fourth slide"
            />
            </Container>
          </Carousel.Item>

        </Carousel>
      
    </div>
  )
}

export default CarouselComponent;