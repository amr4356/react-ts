import { useState } from 'react';
import NewTodo from './components/newTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const []=useState();

  const addTodoHandler= (todoText : string) => {

  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}  />
      <Todos items={} />
    </div>
  );
}

export default App;
