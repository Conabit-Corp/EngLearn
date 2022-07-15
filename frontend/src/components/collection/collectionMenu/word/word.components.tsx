import React from "react";
import "./word.components.scss";
import { WordInfo } from "./wordInfo/wordInfo.components";
import { EditWord } from "./editWord/editWord.components";

export const Word = () => {
  return (
    <div className="wordContainer">
      <WordInfo />
      <EditWord />
    </div>
  )
}
