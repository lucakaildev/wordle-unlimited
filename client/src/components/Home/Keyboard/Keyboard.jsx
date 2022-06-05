import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./keyboardStyles.css";

export default function Keyboard() {

    const [board, setBoard, currentTry, setCurrentTry, wordState, setWordState, onBackspace, onEnter, onLetterPress, onEscape, firstRowArray, secondRowArray, thirdRowArray, language, changeLocation, changeLanguage, statsModal, changeStatsModal, refreshBoard] = useContext(AppContext);

    const handleKey = (e) => {
        e.preventDefault();

        if (e.target.id === "↺") {
            e.target.id = window.location.pathname;
            if (window.location.pathname === "/unlimited") {
                currentTry.gameOver !== true ? alert("You'll lose progress") :
                    refreshBoard(e)
            }
        }

        if (e.target.id === "⌫") {
            onBackspace(e);
        }
        if (e.target.id === "ENTER") {
            onEnter(e);
        }
        else {
            e.preventDefault();
            if (e.target.id !== "⌫" && e.target.id !== "ENTER" && e.target.id !== "/" && e.target.id !== "/unlimited" && e.target.id !== "↺") {
                onLetterPress(e);
            }
        }
    }

    const keyboardOne = firstRowArray.map((val, i, e) => { return (<button key={i} id={val} className={val === "↺" ? "reload-button" : currentTry.incorrect.includes(val) ? "keyboard-letter-disabled" : "keyboard-letter"} onClick={(e) => { handleKey(e) }}>{val}</button>) });
    const keyboardTwo = secondRowArray.map((val, i, e) => { return (<button key={i} id={val} className={currentTry.incorrect.includes(val) ? "keyboard-letter-2-disabled" : "keyboard-letter-2"} onClick={(e) => { handleKey(e) }}>{val}</button>) });
    const keyboardThree = thirdRowArray.map((val, i, e) => { return (<button key={i} id={val} className={val === "ENTER" ? "keyboard-letter-big" : currentTry.incorrect.includes(val) ? "keyboard-letter-3-disabled" : "keyboard-letter-3"} onClick={(e) => { handleKey(e) }}>{val}</button>) });

    const keyboardArray = [keyboardOne, keyboardTwo, keyboardThree];

    const keyboardLayout = [...keyboardArray].map((val, i, e) => { return (<div className={val === keyboardOne ? "keyboard-one" : "keyboard-row"} key={i}>{val}</div>) })


    return (
        <div className="keyboard">
            {keyboardLayout}
        </div>
    )
}