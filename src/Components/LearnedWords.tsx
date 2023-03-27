import {Fragment, useState} from "react";
import "./css/LearnedWords.css"
import {WordCard} from "./WordCard";
import {Col, Row} from "react-bootstrap";
import {ScrollContainer} from "./ScrollContainer";

export function LearnedWords() {
    return (
        <Fragment>
            <div className="dictionary">
                <ScrollContainer title={"to-learn"}/>
                <ScrollContainer title={"learned"}/>
            </div>
        </Fragment>
    )
}