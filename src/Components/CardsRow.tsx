import {Col, Row} from "react-bootstrap";
import {WordCard} from "./WordCard";
import "./css/CardsRow.css"

export function CardsRow() {
    return (
        <Row className="card-row">
            <Col sm={12} xs={12} md={4} style={{justifyContent: "center", display: "flex"}}>
                <WordCard img="car.jpg" word="машина" translations={["car", "machine", "engine", "computer"]}/>
            </Col>
            <Col sm={12} xs={12} md={4} style={{justifyContent: "center", display: "flex"}}>
                <WordCard img="table.jpg" word="стол" translations={["table", "desk", "board", "platen"]}/>
            </Col>
            <Col sm={12} xs={12} md={4} style={{justifyContent: "center", display: "flex"}}>
                <WordCard img="house.jpg" word="здание" translations={["building", "house", "structure", "construction"]}/>
            </Col>
        </Row>
    )
}