import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  // text="new text"; wrong way
  //   setText("new text");
  const handleUpCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }
  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }
  const handleClearText = () => {
    setText("");
    props.showAlert("Text has been cleared","success");
  }
  const handleCopyText=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied","success");
  }
  const handleExtraSpaces=()=>{
    let newText= text.split(/[ `]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed","success");

  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="mb-3" style={{color:props.myMode==='dark'?'white':'black'}}>
        {" "}
        {/* mb class belongs to bootstrap which means margin at bootom */}
        <h3 className="mb-3">Try TextUtils - Word counter, Charecter counter, Remove extra spaces </h3>
        <textarea
          className="form-control"
          value={text}
          id="TextArea"
          rows="8"
          placeholder="Write text"
          onChange={handleOnChange}
          style={{backgroundColor:props.myMode==='light'?'white':'#343a40',color:props.myMode==='dark'?'white':'black'}}
        ></textarea>
      </div>
       {/*btn and btn primary is the classes in bootstrap*/}  
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to uppercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert to lowercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text Box</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text Box</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <div className="container my-3"style={{color:props.myMode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
          
          <p>{.008*text.length} minutes to read this</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
    </>
  );
}
