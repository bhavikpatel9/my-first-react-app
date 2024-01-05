import React,{useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        const newValue = text.toUpperCase();
        setText(newValue);
    }
    const handleLowClick = ()=>{
        const newValue = text.toLowerCase();
        setText(newValue);
    }
    const handleClear = ()=>{
       
        setText("");
    }



    const handleCopy = ()=>{
        
        const copyText = document.getElementById("textAreaId");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
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
    }

  return (
    <div className='container my-2'>
      
            <h1>{props.heading}</h1>
            <div class="mb-3">
              <textarea class="form-control" value={text} id="textAreaId" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <div>
                <button className='mx-2 btn btn-primary'  type="button" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='mx-2 btn btn-primary'  type="button" onClick={handleLowClick} >Convert to Lowercase</button>
                <button className='mx-2 btn btn-primary'  type="button" onClick={handleCapClick} >Capitalize text</button>
                <button className='mx-2 btn btn-primary'  type="button" onClick={handleCopy} >Copy text</button>
                <button className='mx-2 btn btn-primary'  type="button" onClick={handleClear} >Clear text</button>
            </div>
    </div>
  )
}
