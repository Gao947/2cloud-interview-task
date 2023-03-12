import { Container } from "react-bootstrap";
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
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
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

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
            </Container>
          </Carousel.Item>

        </Carousel>
      
    </div>
  )
}

export default CarouselComponent;