import "./css/Word.css"
import {useDrag} from "react-dnd";


export function Word(props: { word: string }) {
    const [{isDragging}, dragRef] = useDrag({
        type: "word",
        item: {props},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className="word" draggable ref={dragRef}>
            <p>{props.word}</p>
        </div>
    )
}