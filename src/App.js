import React, {useState} from 'react';
import './App.css';
import Form from './form';

const App = () => {
 const[todo, setTodo] = useState([])

 const filterIt = (id) => {
      setTodo(todo.filter((input) => input.id !== id))
     }

  return (
    <section className= 'container'>
      <h1>Grocery Bud</h1>
      <Form todo= {todo} setTodo= {setTodo} />
      <div>
         {
          todo.map((input, index) => {     
          return ( 
              <div className= 'main' key= {index} >
             <h4>{input.text}</h4>
           <div>
           <button onClick= {() => filterIt(input.id)} className= 'del'>Delete</button> 
           </div>
           </div>
          )})
      }
      </div>
      <button onClick= {() => setTodo([])} style= {{backgroundColor: 'ButtonShadow'}} type= 'reset'>Clear</button>
    </section>
  )
}

export default App;