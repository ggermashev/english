import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from "./Components/Navigation";
import {Learn} from "./Components/Learn";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LearnedWords} from "./Components/LearnedWords";
import {Progress} from "./Components/Progress";
import {HTML5Backend} from "react-dnd-html5-backend";
// import {DndProvider} from "react-dnd";
import { DndProvider } from 'react-dnd-multi-backend'
import {Footer} from "./Components/Footer";
import { HTML5toTouch } from 'rdndmb-html5-to-touch'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Learn/>,
    },
    {
        path: "/words",
        element: <LearnedWords/>
    },
    {
        path: "/progress",
        element: <Progress/>
    }
]);

function App() {
    return (
        <Fragment>
            <header>
                <Navigation/>
            </header>
            <main>
                <DndProvider options={HTML5toTouch}>
                    <RouterProvider router={router}/>
                </DndProvider>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Fragment>
    );
}

export default App;
