import "./App.css";
import Keyboard from "./folderKeyboard/Keyboard";
import { useState } from "react";
import Colors from "./folderKeyboard/Colors&Size";

const lastActions = [];

function AppKeyboard() {
  const hebrewLetters = [
    "א",
    "ב",
    "ג",
    "ד",
    "ה",
    "ו",
    "ז",
    "ח",
    "ט",
    "י",
    "כ",
    "ך",
    "ל",
    "מ",
    "ם",
    "נ",
    "ן",
    "ס",
    "ע",
    "פ",
    "ף",
    "צ",
    "ץ",
    "ק",
    "ר",
    "ש",
    "ת",
  ];

  const uppercaseEnglishLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowercaseEnglishLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "/",
    "?",
  ];

  const emojis = [
    "😀",
    "😂",
    "😅",
    "😊",
    "😍",
    "😎",
    "😢",
    "😭",
    "😡",
    "😜",
    "👍",
    "👎",
    "🙏",
    "👏",
    "🙌",
    "👀",
    "💪",
    "💔",
    "💖",
    "🎉",
    "🎈",
    "🎁",
    "🎂",
    "🌟",
    "🚀",
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", 0];

  
  const [board, setBoard] = useState(hebrewLetters);
  const [styledText, setStyledText] = useState([]);
  const [applyColorToAll, setApplyColorToAll] = useState(false);
  const [fondColor, setFondColor] = useState("black");
  const [fondSize, setFondSize] = useState(30);
  const [dir, setDir] = useState("rtl");

  function addText(event) {
    lastActions.push({  styledText: [...styledText], color: fondColor, size: fondSize });
    const char = (
      <span style={{ color: fondColor }}>{event.target.textContent}</span>
    );
    setStyledText([...styledText, char]);
    console.log("->", styledText);
  }

  function addSpace() {
    lastActions.push({  styledText: [...styledText], color: fondColor, size: fondSize });
    const space = (
      <span key={styledText.length} style={{ color: fondColor }}>
        &nbsp;
      </span>
    );
    setStyledText([...styledText, space]);
  }

  function changeColorForAll() {
    const updatedText = styledText.map((item, index) => (
      <span key={index} style={{ ...item.props.style, color: fondColor }}>
        {item.props.children}
      </span>
    ));
    setStyledText(updatedText);
  }

  function setLestAction() {
    setStyledText(lastActions[lastActions.length - 1].styledText);
    setFondColor(lastActions[lastActions.length - 1].color);
    setFondSize(lastActions[lastActions.length - 1].size);
    lastActions.pop();
  }

  const renderKeyboardRow = (chars) => {
    return (
      <div className="row">
        {chars.map((char, i) => (
          <Keyboard key={i} char={char} addText={addText} />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="buttons-row">
        <button
          className="butEnglish"
          onClick={() => {
            setBoard(lowercaseEnglishLetters);
            setDir("ltr");
          }}
        >
          English
        </button>
        <button
          className="butHebrew"
          onClick={() => {
            setBoard(hebrewLetters);
            setDir("rtl");
          }}
        >
          Hebrew
        </button>
        <button
          className="butCharacters"
          onClick={() => {
            setBoard(specialCharacters);
          }}
        >
          Chars
        </button>
        <button
          className="butCharacters"
          onClick={() => {
            setBoard(numbers);
          }}
        >
          Numbers
        </button>
        <button
          className="butEmojis"
          onClick={() => {
            setBoard(emojis);
          }}
        >
          Emojis
        </button>
      </div>
      <div className="screen" dir={dir}>
        <p className="text" style={{ color: fondColor, fontSize: fondSize }}>
          {styledText.map((item, index) => (
            <span key={index} style={item.props.style}>
              {item.props.children}
            </span>
          ))}
        </p>
      </div>

      <div className="keyboard">
        {renderKeyboardRow(board.slice(0, 10))}
        {renderKeyboardRow(board.slice(10, 20))}
        {renderKeyboardRow(board.slice(20, 30))}
        <div className="row">
          <button
            className="profit"
            onClick={() => {
              addSpace();
            }}
          >
            Space
          </button>
        </div>
      </div>
      <div className="butCheng">
        <button
          className="delete"
          onClick={() => {
            setStyledText([]);
          }}
        >
          Delete
        </button>
        <button
          className="deleteChar"
          onClick={() => {
            setStyledText(styledText.slice(0, -1));
          }}
        >
          Delete char
        </button>
        <button
          className="lastAction"
          onClick={() => {
            lastActions.length > 0 && setLestAction();
          }}
        >
          Last action
        </button>
        <button
          className="butCapsLock"
          onClick={() => {
            setBoard(uppercaseEnglishLetters);
            setDir("ltr");
          }}
        >
          Caps Lock
        </button>
      </div>
      <div className="">
        <button
          className="lowerCase"
          onClick={() => {
            setStyledText(
              styledText.map((item, index) => (
                <span key={index} style={item.props.style}>
                  {item.props.children.toLowerCase()}
                </span>
              ))
            );
          }}
        >
          Lower case
        </button>
        <button
          className="upperCase"
          onClick={() => {
            setStyledText(
              styledText.map((item, index) => (
                <span key={index} style={item.props.style}>
                  {item.props.children.toUpperCase()}
                </span>
              ))
            );
          }}
        >
          Upper case
        </button>
      </div>

      <Colors
        
        setFondSize={setFondSize}
        setFondColor={setFondColor}
        
        styledText={styledText}
        setStyledText={setStyledText}
        color={fondColor}
        size={fondSize}
        applyColorToAll={applyColorToAll}
        setApplyColorToAll={setApplyColorToAll}
        changeColorForAll={changeColorForAll}
      />
    </div>
  );
}

export { AppKeyboard, lastActions };
