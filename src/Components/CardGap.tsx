import {Fragment, useEffect, useState} from "react";
import {useDrop} from "react-dnd";


export function CardGap(props: {
    translations: string[],
    wordsUsed:string[],
    setWordsUsed: (wordsUsed: string[])=>void,
    isCorrect: boolean[],
    setIsCorrect: (isCorrect: boolean[]) => void,
    words: string[],
    setWords: (words: string[]) => void
    index: number }) {
    // const [word, setWord] = useState("--")
    const [{isOver}, dropRef] = useDrop({
        accept: "word",
        drop: (item: { props: { word: string } }) => {
            if (!props.wordsUsed.includes(item.props.word)) {
                let copyWords = [...props.words]
                copyWords[props.index] = item.props.word
                props.setWords(copyWords)
                // setWord(item.props.word)
                let copyWordsUsed = [...props.wordsUsed]
                copyWordsUsed[props.index]=item.props.word
                console.log(copyWordsUsed)
                props.setWordsUsed(copyWordsUsed)
                if (props.translations.includes(item.props.word)) {
                    let copyIsCorrect = [...props.isCorrect]
                    copyIsCorrect[props.index] = true
                    props.setIsCorrect(copyIsCorrect)
                }
                else {
                    let copyIsCorrect = [...props.isCorrect]
                    copyIsCorrect[props.index] = false
                    props.setIsCorrect(copyIsCorrect)
                }
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })

    })
    return (
        <p ref={dropRef}>{props.words[props.index]}</p>
    )
}