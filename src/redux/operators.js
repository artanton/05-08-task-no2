import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://recursive-todo-api.onrender.com';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ text, date, parentId, subLevel }, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', { text, date, parentId, subLevel });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${Id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',

  async ({ taskId, text }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
