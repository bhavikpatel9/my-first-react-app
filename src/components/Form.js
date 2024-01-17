import React,{useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        const newValue = text.toUpperCase();
        setText(newValue);
        if(text.length > 0){
        props.showAlert('success','text is converted to uppercase');
        }
        else{
            props.showAlert('danger','please first enter some text')
        }
    }
    const handleLowClick = ()=>{
        const newValue = text.toLowerCase();
        setText(newValue);
        if(text.length > 0){
            props.showAlert('success','text is converted to lowercase');
            }
        else{
                props.showAlert('danger','please first enter some text')
        }
    }
    const handleClear = ()=>{
       
        setText("");
        if(text.length > 0){
            props.showAlert('success','text is cleared');
            }
        else{
                props.showAlert('danger','please first enter some text')
        }
    }



    const handleCopy = ()=>{
        
        const copyText = document.getElementById("textAreaId");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if(text.length > 0){
            props.showAlert('success','text is copied');
            }
        else{
                props.showAlert('danger','please first enter some text')
        }
    }



    const handleCapClick = ()=>{
        const words = text.split(" ");
        const capitalWords = words.map(abc);
        function abc(word){
            if(word.length>0){
               return word[0].toUpperCase() + word.slice(1);
            }
            return "";
        }
        const newValue = capitalWords.join(" ");
        setText(newValue);
        if(text.length > 0){
            props.showAlert('success','text is capitalized');
            }
        else{
                props.showAlert('danger','please first enter some text')
        }
    }

    function checkSpace(word){
        if(word!==" "){
            return word;
        }
    }

  return (
    <>
        <div className={`container my-2 border border-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`}>
        
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className={`form-control bg-${props.mode==='light'?'light':'secondary'} text-${props.mode==='light'?'dark':'light'}`}  value={text} id="textAreaId" onChange={handleOnChange} rows="8" placeholder='Enter your text here'></textarea>
                </div>
                <div>
                    <button className={`mx-2 my-2 btn btn-${props.mode==='light'?'primary':'secondary'} `}  type="button" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className={`mx-2 my-2 btn btn-${props.mode==='light'?'primary':'secondary'} `}  type="button" onClick={handleLowClick} >Convert to Lowercase</button>
                    <button className={`mx-2 my-2 btn btn-${props.mode==='light'?'primary':'secondary'} `}  type="button" onClick={handleCapClick} >Capitalize text</button>
                    <button className={`mx-2 my-2 btn btn-${props.mode==='light'?'primary':'secondary'} `}  type="button" onClick={handleCopy} >Copy text</button>
                    <button className={`mx-2 my-2 btn btn-${props.mode==='light'?'primary':'secondary'} `}  type="button" onClick={handleClear} >Clear text</button>
                </div>
        </div>
        <div className={`container border border-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(checkSpace).length} word and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length===0?'Enter something in above textbox to preview':text}</p>
        </div>
    </>
  )
}
