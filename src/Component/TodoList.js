// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../Redux/todoSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos); // Lấy danh sách công việc từ Redux store
  const dispatch = useDispatch(); // Sử dụng dispatch để gửi action

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index)); // Gửi action deleteTodo với index là payload
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map((todo, index) => (
        <li key={index} style={{ margin: '10px 0' }}>
          {todo}{' '}
          <button onClick={() => handleDeleteTodo(index)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;