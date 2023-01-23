import React, {useState} from "react";


export default function About(props) {

    // setState for styling 
    // const [var,setVar]=useState(initialState)

    // const[myStyle,setMyStyle]=useState({
    //         color:'black',
    //         backgroundColor:'white',
           
        // })

    // set State for Button
    // const[btnText,setBtnText]=useState("Enable Dark Mode")


    // Function for Button to change the color 
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         });
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setBtnText("Enable Dark Mode")
    //     }

    // }


    // STYLING CSS - object ke roop me styling krte hain aur properties me Hyphon nahi hota hai balki camelCase me hota hai. 
    // let myStyle={
    //     color:'white',
    //     backgroundColor:'black',
    // }








    let myStyle={
      color:props.mode ==='dark'?'white':'#042743',
      backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',
    }



  return (
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives a way to analyze your text quickly and efficietly.Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant chracter count & word count statistics for a given text.TextUtils reports
              the number of words and characters.Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to count characters in
            facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div> */}

    </div>
  );
}
