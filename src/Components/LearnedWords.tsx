import {Fragment, useState} from "react";
import "./css/LearnedWords.css"
import {WordCard} from "./WordCard";
import {Col, Row} from "react-bootstrap";

export function LearnedWords() {
    const [left1, setLeft1] = useState(0)
    const [left2, setLeft2] = useState(0)
    const [touchX, setTouchX] = useState(0)
    return (
        <Fragment>
            <div className="dictionary">
                <div className="scroll-container">
                    <h1 className="scroll-title">Нужно выучить</h1>
                    <div className="scrollable" style={{left: left1}}>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card" id="to-learn-last">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                    </div>
                </div>
                <div className="scroll-container">
                    <h1 className="scroll-title">Пройдено</h1>
                    <div className="scrollable" id="learned" style={{left: left2}}>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                        <div className="scrollable-card" id="learned-last">
                            <WordCard word={"машина"} translations={["1", "2", "3", "4"]} img={"car.jpg"}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}