import {Dropdown} from "react-bootstrap";
import {ScrollContainer} from "./ScrollContainer";
import "./css/ProgressBar.css"
import {render} from "react-dom";

export function ProgressBar(props: {date: string}) {
    return (
        <Dropdown>
            <Dropdown.Toggle className="drop-btn" id="dropdown-basic">
                {props.date}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.ItemText className="scroll-menu"><ScrollContainer title={props.date}/></Dropdown.ItemText>
            </Dropdown.Menu>
        </Dropdown>
    )
}