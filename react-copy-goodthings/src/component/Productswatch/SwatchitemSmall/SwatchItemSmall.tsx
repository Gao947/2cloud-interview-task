import { Col } from "react-bootstrap";
import styles from "./SwatchItemSmall.module.css";
import Image from 'react-bootstrap/Image';

interface PropsType {
    imageurl: string;
    hyperlink: string;
    originaltext: string;
    hovertext: string;
}

export const SwatchItemSmall: React.FC<PropsType> = ({
    imageurl,
    hyperlink,
    originaltext,
    hovertext,
}) => {
    return (
        <Col>
            <div className={styles['container']}>
                <a href={hyperlink}>
                    <Image className={styles['image']} src={imageurl} />
                    <div className={styles['original-text-container']}>
                        <div className={styles['originaltext']}>{originaltext}</div>
                    </div>
                    <div className={styles['middle']}>
                        <div className={styles['hover-show-text']} >{hovertext}</div>
                    </div>
                </a>
            </div>
        </Col>
    )
}