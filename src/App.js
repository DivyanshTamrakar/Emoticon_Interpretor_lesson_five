import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐼": "Panda",
  "🐨": "Koala",
  "🐅": "Tiger",
  "🦇": "Bat",
  "🐀": "Rat",
  "🐪": "Camel",
  "🐗": "Hamster",
  "🐮": "Cow",
  "🐐": "Goat"
};

var emoji_we_know = Object.keys(emojiDictionary);
console.log(emoji_we_know);
export default function App() {
  const [currentState, setState] = useState("");
  function inputChangeHandler(event) {
    var means = emojiDictionary[event.target.value];

    if (means === undefined) {
      means = "Not in our database";
      setState(means);
    } else {
      setState(means);
    }
  }

  function clickHandler(item) {
    var meaning = emojiDictionary[item];

    setState(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Emoticon Interpreter </h1>
      <input placeholder={"Enter Emoji"} onChange={inputChangeHandler}></input>
      <div
        className="Output"
        style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "2rem" }}
      >
        {currentState}
      </div>

      <div
        className="Head"
        style={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}
      >
        {" "}
        Emojis We Know{" "}
      </div>

      {emoji_we_know.map(function (item, index) {
        return (
          <span
            onClick={() => clickHandler(item)}
            style={{ fontSize: "3rem", marginTop: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

// things to noice
// class --> className
// style --> takes an object instead of ""
