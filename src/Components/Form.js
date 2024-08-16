import React,{useState} from 'react'

export default function Form(props) {
    const[Text,setText] = useState('')

    const convertToUppercase = ()=>{
        let newText = Text.toUpperCase()
        setText(newText)
        props.showAlert("Converted into uppercase","Success")
    }
    const convertToLowercase = ()=>{
        let newText = Text.toLowerCase()
        setText(newText)
        props.showAlert("Converted into lowercase","Success")
    }
    const clearText = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Clear the text","Success")
    }
    const copyText = ()=>{
        var text = document.getElementById("form");
        text.select() 
       navigator.clipboard.writeText(text.value);
       
       props.showAlert("Copy the text","Success")
    }
    const removeExtraSpace = ()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
       
        props.showAlert("Remove the spaces","Success")
    }
    const handleToClick = (event)=>{
        setText(event.target.value)
    }
  return (
    <div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="form" className="form-label"></label>
            <textarea className="form-control" id="form" rows="7"value={Text} onChange={handleToClick}style={{backgroundColor: props.mode==='dark'?'#216375':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={convertToUppercase}>To uppercase</button>
            <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={convertToLowercase}>To Lowercase</button>
            <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Text counter here</h2>
            <p>{Text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} words and {Text.length} characters</p>
            <p>Reading time is {0.008*Text.split(" ").filter((a1)=>{return a1.length!==0}).length} in minutes</p>
            <h3>Preview of text</h3>
            <p>{Text.length>0?Text:"Write something in textbox"}</p>
        </div>
    </div>
  )
}
