import { Col } from "react-bootstrap";
import styles from "./SwatchItemLarge.module.css";
import Image from 'react-bootstrap/Image';

interface PropsType {
    imageurl: string;
    hyperlink: string;
    originaltext: string;
    hovertext: string;
}

export const SwatchItemLarge: React.FC<PropsType> = ({
    imageurl,
    hyperlink,
    originaltext,
    hovertext,
}) => {
    return (
        <Col xl="6">
            <div className={styles['container']}>
                <a href={hyperlink}>
                    <Image className={styles['image']} src={imageurl} />
                    <div className={styles['original-text-container']}>
                        <div className={styles['original-text']}>{originaltext}</div>
                    </div>
                    <div className={styles['middle']}>
                        <div className={styles['hover-show-text']} >{hovertext}</div>
                    </div>
                </a>
            </div>
        </Col>
    )
}