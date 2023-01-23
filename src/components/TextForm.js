import React, { useState } from "react";

export default function TextForm(props) {

  
//****** Create Function for Events *******

// Function For UpperCase
  const handleUpClick = () => {
    // console.log('Uppercase was clicked',text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  };

//   Function For LowerCase
  const handleLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  }

// Function For Clear The Text
const handleClearText=()=>{
    // let newWord='';
    // let newText=text.replace(text,newWord);
    // setText(newText);

    let newText='';
    setText(newText);
    props.showAlert("Text Cleared!", "success")
}

//   Function for change the text
  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  };

  // Function for copy the text
  const handleCopyText=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");
  }

  // Function for extra spaces
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");
  }




  //useState - Hooks- (var,UpdateVar)=useState('default)
//   const [text, setText] = useState("Enter Text Here");
    const [text, setText] = useState('');

  // text="new Text"  // Wrong way to change the state
  // setText("new Text")   //Correct way to change the state

  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>


        {/* Button For UpperCase And LoweCase */}
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
      </div>



      {/* Logic for Textreviews */}
      <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        {/* <p>{text .length>0?text:'Enter something in the text box above to preview it here'}</p> */}
        <p>{text .length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  );
}
