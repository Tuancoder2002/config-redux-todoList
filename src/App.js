// src/App.js
import React from 'react';

import { Provider } from 'react-redux';
import store from './Redux/store';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';

function App() {
  return (
    <Provider store={store}> {/* Kết nối Redux Store */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;