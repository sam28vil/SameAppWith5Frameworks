import { useEffect, useRef, useState } from 'react';
import './App.css';
//REPRESENTA UM COMPONENTE DA INTERFACE DO USUARIO E EU AMO A SIMPLICIDADE DISSO
function App() {
  const [todos,setTodos] = useState([]);

  //binding
  const todoText = useRef();

   // Side Effects / Lifecycle
   useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  //events
  function addTodo(event){
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next))
  }
  return (
    <div className="App">
    <ul>
      {todos.map(todo => ( <li key={todo}>{todo}</li>))}
    </ul>
    <form onSubmit={addTodo}>
      <input ref={todoText}></input>
      <input type="submit" value="Add Todo"></input>
    </form>
    </div>
  );
}

export default App;
