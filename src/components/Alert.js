import React from 'react'

export default function Alert(props) {
    function capitalFirstLetter(word){
        let firstLetter = word.charAt(0);
        let capWord = firstLetter.toUpperCase() + word.slice(1);
        return capWord;
    }
  return (
    
      <div style={{height : '65px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalFirstLetter(props.alert.type)} :</strong> {props.alert.message}
                </div>}
      </div>
    
  )
}
