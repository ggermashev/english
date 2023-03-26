import {Fragment, useState} from "react";
import "./css/LearnedWords.css"
import {WordCard} from "./WordCard";

export function LearnedWords() {
    const [left1, setLeft1] = useState(0)
    const [left2, setLeft2] = useState(0)
    const [touchX, setTouchX] = useState(0)
    return (
        <Fragment>
            <div className="dictionary">
                <div className="scroll-container"
                     onTouchMove={e => {
                         if (touchX != 0) {
                             setLeft1(left1 - (touchX - e.touches[0].clientX))
                         }
                         setTouchX(e.touches[0].clientX)
                     }}
                     onTouchEnd={e => {
                         setTouchX(0)
                     }}
                     onWheel={e => {
                         if (e.deltaY > 0) {
                             if ( (document.getElementById("to-learn-last")?.getBoundingClientRect().x || 300) > 0) {
                                 setLeft1(left1 - 100)
                             }
                         } else if (left1 < window.innerWidth - 260) {
                             setLeft1(left1 + 100)
                         }
                     }}>
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
                <div className="scroll-container"
                     onTouchMove={e => {
                         if (touchX != 0) {
                             setLeft2(left2 - (touchX - e.touches[0].clientX))
                         }
                         setTouchX(e.touches[0].clientX)
                     }}
                     onTouchEnd={e => {
                         setTouchX(0)
                     }}
                     onWheel={e => {
                         if (e.deltaY > 0) {
                             if ( (document.getElementById("learned-last")?.getBoundingClientRect().x || 300) > 0) {
                                 setLeft2(left2 - 100)
                             }
                         } else if (left2 < window.innerWidth - 260){
                             setLeft2(left2 + 100)
                         }
                     }}>
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