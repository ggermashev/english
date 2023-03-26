import {Col, Container, Row} from "react-bootstrap";
import {Word} from "./Word";
import "./css/WordsField.css"

export function WordsField(props: { words: string[] }) {
    return (
        <Container className="words-row">
            <Row>
                {props.words.map(w => {
                    return (
                        <Col sm={12} xs={12} md={2}><Word word={w}/></Col>
                    )
                })}
            </Row>
        </Container>
    )
}