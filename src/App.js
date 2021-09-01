import React, {useState} from 'react';
import './App.css';
import Form from './form';

const App = () => {
 const[todo, setTodo] = useState([])
 const[alert, setAlert] = useState('');
 const[list, setList] = useState('');
 //const[note, setNote] = useState('');



 const Remove = () => {
   setTodo([])
   setList('')
   setAlert('empty list..')
     setTimeout(() => {
      setAlert('')
     }, 2000)
   }

   const filterIt = (id) => {
      setTodo(todo.filter((text) => text.id !== id));
     }

  return (
    <section className= 'container'>
    <h4 style= {{width: '30vw', backgroundColor: 'chocolate', margin: 'auto', 
    fontSize: '15px', fontWeight: '300'}} >{alert}</h4>
      <h1>Grocery Bud</h1>
      <Form onSubmit = {text => {if(text) {setTodo([{text, complete:false}, ...todo]) 
      setAlert('items added')
      setList('Clear List')
      setTimeout(() => {
      setAlert('')
     }, 2000)} else{ text = false }
     }} />
      <div>{
          todo.map(({text}, id) => {     
          return ( 
              <div className= 'main' key= {text}>
             <div style= {{textAlign: 'left', marginTop: '20px', marginLeft: '25px', width: '35vw'
           , backgroundColor: 'ghostwhite', border: '1px solid black', borderRadius: '2px', 
           padding: '5px 0px 5px 25px'}} >{text}</div>
           <button  onClick= {() => filterIt(id)} className= 'del'>Delete</button> 
           </div>
          )})
      }</div>
      <span onClick= {Remove} className= 'btn' >{list}</span>   
    </section>
  )
}

export default App;