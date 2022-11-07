import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpclick = ()=>{
    console.log("uppercase was clicked");
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("changed to upperCase","success");
  }

  const handleLoclick = ()=>{
    console.log("lowercase was clicked");
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert("changed to lowerCase","success");
  }
  const handleSpaces = ()=>{
    console.log("optimse button was clicked");
    let newText =text.replace(/\s+/g,' ').trim();
    setText(newText)
  }
  const handleClear = ()=>{
    console.log("clear button was clicked");
    let newText ="";
    setText(newText)
  }

  const handleonChange =(event)=>{
    console.log("onChange was clicked");
    setText(event.target.value);
  }
  

  const [text, setText] = useState("");
  
  return (
    <>
         <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
             <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#4e79c8':'white',color : props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleonChange} rows="8"></textarea>
            </div>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to LowerCase</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to UppperCase</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>Optimse text</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
          </div>
          <div className="conatiner my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
            <h3>preview</h3>
            <p>{text.length>0?text:"Mothing to preview"}</p>
          </div>
          </>
  ) 
}
