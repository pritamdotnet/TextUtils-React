import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log(" uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = () => {
        // console.log(" uppercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick = () => {
        // console.log(" uppercase was clicked:" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleCopy = () => {
        // var text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copyed","success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Text Extra space Removed","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#070f63' }}>

                <h2 className='my-4'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#2e39a2' : 'white', color: props.mode === 'dark' ? 'white' : '#070f63' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Space</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#070f63' }}>
                <h2> Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} ward and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}minute read</p>
                <h2>Preview</h2>
                <p>{text.lenth > 0 ? text : "Nothing to Preview"}</p>

            </div>
        </>
    )
}
