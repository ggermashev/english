import {WordCard} from "./WordCard";
import "./css/ScrollContainer.css"

export function ScrollContainer(props: {title: string}) {
    return (
        <div className="scroll-container">
            <h1 className="scroll-title">{props.title}</h1>
            <div className="scrollable">
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
    )
}