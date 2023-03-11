import styles from "./QuestionItem.module.css";
import Accordion from 'react-bootstrap/Accordion';

interface PropsType {
    eventKey: string;
    question: string;
    answer: string;
}

export const QuestionItem: React.FC<PropsType> = ({
    eventKey,
    question,
    answer,
}) => {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                <span className={styles['question-content-title']}>
                    {question}
                </span>
            </Accordion.Header>
            <Accordion.Body>
                {answer}
            </Accordion.Body>
        </Accordion.Item>
    )
}

