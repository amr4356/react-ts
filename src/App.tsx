import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos,setTodos]=useState<Todo[]>([]);

  const addTodoHandler= (todoText : string) => {
    const newTodo=new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  };

  const reomveTodoHandler= (todoId : string) => {
    setTodos( (prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}  />
      <Todos items={todos} onDeleteTodo={reomveTodoHandler} />
    </div>
  );
}

export default App;
