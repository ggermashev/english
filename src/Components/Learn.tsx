import {WordCard} from "./WordCard";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import "./css/Learn.css"
import {CardsRow} from "./CardsRow";
import {WordsField} from "./WordsField";
import {useState} from "react";
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


export function Learn() {
    const [words, setWords] =
        useState(["car", "machine", "engine", "computer", "table", "desk", "board", "platen", "building", "house", "structure", "construction"].sort())
    return (
            <Container className="card-container">
                <h1>Перетаскивай слова! :)</h1>
                <Row className="refresh-row">
                    <Col xs={12} sm={12}>
                        <Image src={require("./images/refresh.png")}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={6} md={12}>
                        <CardsRow/>
                    </Col>
                    <Col style={{display: "flex", alignItems: "center"}} xs={6} sm={6} md={12}>
                        <WordsField words={words}/>
                    </Col>
                </Row>
            </Container>
    )
}