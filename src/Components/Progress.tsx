import {Fragment} from "react";
import {ProgressBar} from "./ProgressBar";


export function Progress() {
    return(
        <Fragment>
            <h1>progress</h1>
            <ProgressBar date={"sunday"}/>
            <ProgressBar date={"sunday"}/>
            <ProgressBar date={"sunday"}/>
            <ProgressBar date={"sunday"}/>
        </Fragment>

    )
}