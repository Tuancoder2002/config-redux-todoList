// src/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [], // Danh sách công việc ban đầu là mảng rỗng
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); // Thêm công việc vào mảng
    },
    deleteTodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload); // Xóa công việc dựa vào chỉ số
    },
  },
});

// Export actions
export const { addTodo, deleteTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;