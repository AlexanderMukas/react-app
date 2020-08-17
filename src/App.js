import React from 'react';
// import the new component
import TodoList from './Todo/TodoList'

//main App
function App() {

  // some list for TodoItems
  const todos = [
    { id: 1, completed: false, title: 'Buy some bread'},
    { id: 2, completed: false, title: 'Create the first ReactJS app'},
    { id: 3, completed: false, title: 'Feed my dog'},
    { id: 4, completed: false, title: 'Push all commits in GitHub'}
  ]


  return (
    <div className="wrapper">
      <h1>React tutorial - TodoList</h1>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
