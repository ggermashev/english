import {Card, Col, Container, Image, Row} from "react-bootstrap";
import "./css/WordCard.css"
import {CardGap} from "./CardGap";
import {Fragment, useEffect, useState} from "react";

function StyledCard(props: {
    style: {},
    done: boolean,
    setDone: (done: boolean) => void,
    isCorrect: boolean[],
    setIsCorrect: (c: boolean[]) => void,
    wordsUsed: string[],
    setWordsUsed: (s: string[]) => void,
    words: string[],
    setWords: (s: string[]) => void,
    word: string,
    translations: string[],
    img: string,
}) {
    useEffect(() => {
        let flag = true
        for (let i of props.isCorrect) {
            if (!i) {
                flag = false
            }
        }
        if (flag) {
            props.setDone(true)
            console.log("correct")
        } else {
            props.setDone(false)
        }
    }, [props.isCorrect])
    return (
        <Card style={props.style}>
            {/*<Image className="add-img" src={require("./images/plus.png")}/>*/}
            <Card.Img style={{height: "200px"}} variant="top" src={require("./images/" + props.img)}/>
            <Card.Body>
                <Card.Title>{props.word}</Card.Title>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6}>
                                <div className="word-gap">
                                    <CardGap
                                        translations={props.translations}
                                        wordsUsed={props.wordsUsed}
                                        setWordsUsed={props.setWordsUsed}
                                        words={props.words}
                                        setWords={props.setWords}
                                        isCorrect={props.isCorrect}
                                        setIsCorrect={props.setIsCorrect}
                                        index={0}/>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="word-gap">
                                    <CardGap
                                        translations={props.translations}
                                        wordsUsed={props.wordsUsed}
                                        setWordsUsed={props.setWordsUsed}
                                        words={props.words}
                                        setWords={props.setWords}
                                        isCorrect={props.isCorrect}
                                        setIsCorrect={props.setIsCorrect}
                                        index={1}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6}>
                                <div className="word-gap">
                                    <CardGap
                                        translations={props.translations}
                                        wordsUsed={props.wordsUsed}
                                        setWordsUsed={props.setWordsUsed}
                                        words={props.words}
                                        setWords={props.setWords}
                                        isCorrect={props.isCorrect}
                                        setIsCorrect={props.setIsCorrect}
                                        index={2}/>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="word-gap">
                                    <CardGap
                                        translations={props.translations}
                                        wordsUsed={props.wordsUsed}
                                        setWordsUsed={props.setWordsUsed}
                                        words={props.words}
                                        setWords={props.setWords}
                                        isCorrect={props.isCorrect}
                                        setIsCorrect={props.setIsCorrect}
                                        index={3}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export function WordCard(props: { word: string, translations: string[], img: string }) {
    const [done, setDone] = useState(false)
    const [isCorrect, setIsCorrect] = useState([false, false, false, false])
    const [wordsUsed, setWordsUsed] = useState<string[]>(["", "", "", ""])
    const [words, setWords] = useState(["--", "--", "--", "--"])
    return (
        <Fragment>
            {done && <StyledCard
                style={{"border": "5px solid green", "borderRadius": 11}}
                done={done}
                setDone={setDone}
                isCorrect={isCorrect}
                setIsCorrect={setIsCorrect}
                words={words}
                wordsUsed={wordsUsed}
                setWords={setWords}
                setWordsUsed={setWordsUsed}
                word={props.word}
                translations={props.translations}
                img={props.img}/>}
            {!done && <StyledCard
                style={{}}
                done={done}
                setDone={setDone}
                isCorrect={isCorrect}
                setIsCorrect={setIsCorrect}
                words={words}
                wordsUsed={wordsUsed}
                setWords={setWords}
                setWordsUsed={setWordsUsed}
                word={props.word}
                translations={props.translations}
                img={props.img}/>}
        </Fragment>
    )
}