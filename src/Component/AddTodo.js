// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';

function AddTodo() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch(); // Sử dụng dispatch để gửi action

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task)); // Gửi action addTodo với task là payload
      setTask(''); // Xóa nội dung input sau khi thêm
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={handleAddTodo}>Thêm công việc</button>
    </div>
  );
}

export default AddTodo;