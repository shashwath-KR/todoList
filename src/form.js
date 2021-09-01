import React, { useState } from 'react';

const Form = ({onSubmit}) => {
  const useInput = initialValue => {
  const [value, setValue] = useState(initialValue); 
    return  { 
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue('')
  }
}

const { resetValue, ...text } = useInput(''); 

    return (
        <form onSubmit= {
          e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
          }
        }>
       <input type= 'text' placeholder= 'e.g toys' {...text} required />
        <button type= 'submit'>Submit</button> 
        </form>
      )
}

export default Form;