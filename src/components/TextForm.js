import React,{useState} from "react";


export default function TextForm(props) {
  const handelUpClick=()=> {
    setText(text.toUpperCase())
  }

  const handelLowClick=()=> {
    setText(text.toLowerCase())
  }

  const handelClearClick=()=> {
    setText("")
  }


  const handelEmailClick=()=> {
    let wordArr = text.split(" ")
    console.log(wordArr)
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let sp  = []
    wordArr.forEach((e)=>{
      if(e.match(pattern)){
          // setEmail(e)
          console.log(e)
          sp.push(e)
      }
      console.log(sp);

      setEmail(sp.join(" "))
    })
  }

  
  const handleOnChange = (event)=>{
    console.log("On change")
    setText(event.target.value)
    // setEmail(event.target.value)
  }

  const handleOnChange1 = (event)=>{
    console.log("On change")
    setEmail(event.target.value)
  }
  const [text,setText] = useState("Enter text here")
  const [email,setEmail] = useState("email")
  let words = text.split(" ").filter((e)=>{return e.length !== 0}).length

  
  return (
    <>
    <div className="container">
      <h1 className={`text-${props.mode === "light"?"dark":"light"}`}>{props.heading}</h1>
      
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary ml-2 mb-3" onClick={handelUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary ml-2 mb-3" onClick={handelLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary ml-2 mb-3" onClick={handelEmailClick}>Email Checker</button>
        <button className="btn btn-primary ml-2 mb-3" onClick={handelClearClick}>Clear</button>
    </div>

    <div className="container2 my-2">
      <h1 className={`text-${props.mode === "light"?"dark":"light"}`}>Your text summary</h1>
      <p className={`text-${props.mode === "light"?"dark":"light"}`}><b>{words}</b> words and <b>{text.length}</b> character</p>
      <p className={`text-${props.mode === "light"?"dark":"light"}`}><b>{0.08* words}</b> miniutes to read</p>

      <h2 className={`text-${props.mode === "light"?"dark":"light"}`}>Preview</h2>
      <p name="hex" id="mp"  className="form-control"
            
            onChange={handleOnChange1}>{email}</p>
      
    </div>

    </>
  );
}
