import styles from "./SwitchItem.module.css";
import Image from 'react-bootstrap/Image';
import { Row } from "react-bootstrap";
import { useKeenSlider } from 'keen-slider/react' 

interface PropsType {
    imgurl: string;
    name: string;
    price: string;
    quantity: string;
}

export const SwitchItem: React.FC<PropsType> =({
    imgurl,
    name,
    price,
    quantity,
}) => {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 4,
          spacing: 20,
        },
      })
      return (
    <div className="keen-slider__slide">
<Image id={styles['switch-img-container']} src={imgurl} />
<span id={styles['switch-img-tag']}>New arrival</span>
<Row>
<span id={styles['switch-product-name']}>{name}</span>
</Row>
<Row>
<span id={styles['switch-product-pricerange']}>from</span> 
<span id={styles['switch-product-price']}>${price}</span> 
<span id={styles['switch-product-quantity']}>Min Qty: {quantity}</span>
</Row>
</div>
      )
}