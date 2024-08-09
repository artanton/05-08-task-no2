import { createSlice } from '@reduxjs/toolkit';

import { fetchTasks, deleteTask, addTask, updateTask } from './operators';


const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      // fetch

      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // add Task

      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // update Task

      .addCase(updateTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id, text } = action.payload;

        if (text) {
          const taskToUpdate = state.tasks.find(task => {
            return task._id === _id;
          });

          if (taskToUpdate) {
            taskToUpdate.text = text;
          }
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // delete tasks

      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        const index = state.tasks.findIndex(
          tasks => tasks._id === action.payload.id
        );
        state.tasks.splice(index, 1);
      })
      
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const taskReducer = taskSlice.reducer;
