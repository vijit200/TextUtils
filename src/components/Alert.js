import React from "react";

export default function Alert(props) {
  const Upper = (word)=>{
    let words = word.toLowerCase()
    return words.charAt(0).toUpperCase() + words.slice(1)
  }
  return (
    <div style={{height:'50px',marginTop:"15px"}}>
    {props.alert &&<div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Upper(props.alert.type)}</strong>:{props.alert.msg}
        {/* <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
    </div>}
    </div>
  );
}
