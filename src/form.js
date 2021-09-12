import React, { useState } from 'react';

const Form = ({todo, setTodo}) => {
  const[input, setInput] = useState('');
  const useInput = (e) => {
    e.preventDefault();
    const user = {
      id: new Date().getTime(),
      text: input,
      completed: false
    }
      setTodo([...todo].concat(user))
      setInput('');
  }

  /*text => {if(text)  {
    setAlert('items added')
    setList('Clear List')
    setTimeout(() => {
    setAlert('')
   }, 2000)} else{ text = false }
   }} */

    return (
        <form onSubmit= {useInput}>
       <input type= 'text' value= {input} onChange= {(e) => setInput(e.target.value)} placeholder= 'e.g toys' required />
        <button type= 'submit'>Submit</button> 
        </form>
      )
}

export default Form;