import React from 'react';
// import the new component
import TodoList from './Todo/TodoList'

//main App
function App() {
  return (
    <div className="wrapper">
      <h1>React tutorial - TodoList</h1>

      <TodoList />
    </div>
  );
}

export default App;
