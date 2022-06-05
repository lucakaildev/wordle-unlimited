import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import BrFlag from "./flag icons/brflag.png"
import UkFlag from "./flag icons/ukflag.png"
import SpFlag from "./flag icons/spainflag.png"
import StatsIcon from "./flag icons/graph.png"
import Logo from "./flag icons/logo.png"

export default function Nav() {

    const [board, setBoard, currentTry, setCurrentTry, wordState, setWordState, onBackspace, onEnter, onLetterPress, onEscape, firstRowArray, secondRowArray, thirdRowArray, language, changeLocation, changeLanguage, statsModal, changeStatsModal] = useContext(AppContext);

    const daily = language === "english" ? "DAILY" : "DIARIO"
    const uL = language === "english" ? "UNLIMITED" : language === "portuguese" ? "SEM LIMITES" : "SIN LIMITES"

    return (
        <>
            <div className="logo-container">
                <a href={window.location.pathname}><img src={Logo} alt="Wordle Unlimited" ></img></a>
            </div>
            <div className="select-container">
                <select className="select-mode" defaultValue={window.location.pathname} onChange={(e) => changeLocation(e)}>
                    <option className="mode-option" value="/">{daily}</option>
                    <option className="mode-option" value="/unlimited">{uL}</option>
                </select>
            </div>
            <div className="auth-container">
                <div><img style={{ height: "25px", width: "24px" }} src={StatsIcon} alt="statistics" onClick={(e) => changeStatsModal(e)}></img></div>
                <div className="language-selection">
                    <button id={language === "english" ? "portuguese" : "english"} className="login-button" onClick={(e) => changeLanguage(e)}>{language === "english" ? <img id="portuguese" src={BrFlag} alt="portuguese"></img> : <img id="english" alt="english" src={UkFlag}></img>}</button>
                    <button className="register-button" id={language === "spanish" ? "portuguese" : "spanish"} onClick={(e) => changeLanguage(e)}>{language === "spanish" ? <img id="portuguese" src={BrFlag} alt="portuguese"></img> : <img id="spanish" src={SpFlag} alt="spanish"></img>}</button>
                </div>
            </div>
        </>
    )
}