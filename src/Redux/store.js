// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Redux/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer, // Kết nối slice todos vào store
  },
});

export default store;