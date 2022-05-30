import React, { useContext, useEffect, useState } from "react";
import "./boardStyles.css";
import { AppContext } from "../../Context/AppContext";

export default function Letter(props) {

    const [board, setBoard, currentTry, setCurrentTry, wordState, setWordState, onBackspace, onEnter, counter, setCounter] = useContext(AppContext);
    const index = props.index;
    const rowIndex = props.rowIndex;
    // const repeated = [];

    const rightLetter = wordState.correctWord[index];
    const currentLetter = board[rowIndex][index].toString().toLowerCase();
    // const guess = board[rowIndex];

    // const getRepeated = ()=> {
    //     for (let i = 0; i < index; i++) {
    //         if (guess[i] === guess[index]) {
    //             repeated.push(guess[i])
    //             repeated.push(i)
    //             return
    //         }
    //     }
    // }
    // getRepeated()

    // if (repeated.length !== 0) {
    //     console.log(repeated);
    // }
    
    const isCorrect = rightLetter === currentLetter;
    const isPresent = !isCorrect && currentLetter !== "" && wordState.correctWord.includes(currentLetter)
    // const isRepeated = repeated.length !== 0

    // const isRepetead = 
    // console.log(isRepeated)

    // console.log(index)

    // const getRepeated = ()=> {
    //     for (let i = 0; i < index; i++) {
    //         if (guess[i] === wordState.correctWord[index]) {
    //             correctRepeated.push(wordState.correctWord[i])
    //             return
    //         }
    //     }
    // }

    // getRepeated();
    // console.log(correctRepeated);
    // console.log(getRepeated())
    // const getOccurrences = () => {
    //     for (let i = 0; i < index; i++) {
    //         if (wordState.correctWord[i] === wordState.correctWord[index]) {
    //             repeatedBefore.push(currentLetter)
    //         }
    //     }
    //     for (let i = index+1; i < wordState.correctWord.length; i++) {
    //         if (wordState.correctWord[i] === currentLetter) {
    //             repeatedArray.push(currentLetter)
    //         }
    //     }
    // }

    // if () {
        // getOccurrences();
        // console.log(repeatedArray);
    // }



    // const word = Array.from(wordState.correctWord)
    // console.log(repeatedArray);
    // if (currentTry.currentRow === rowIndex) {console.log(guess)}

    // const guessRepeated = isPresent && (guess.filter((val)=> val === currentLetter).length > 1)
    // const correctRepeated = isPresent && (word.filter((val)=> val === currentLetter).length > 1)


    // cuando ya se marcó como correcta, cuando está presente pero ya se marcó como presente


    // const notRepeated = !isCorrect && isPresent && repeatedArray.length === 1
    // const isRepeated = isPresent && !correctRepeated.includes(currentLetter);

    const letterClass = (currentTry.currentRow === 7 && rowIndex === 5) ? (isCorrect ? "correctPos" : isPresent ? "otherPos" : "notPresent") : currentTry.currentRow > rowIndex ? (isCorrect ? "correctPos" : isPresent ? "otherPos" : "notPresent") : "letter";

    return (<div className={letterClass} key={index} id={index.toString()}>
        {board[rowIndex][index]}
    </div>)

}