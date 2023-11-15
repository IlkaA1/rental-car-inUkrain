
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://6551045c7d203ab6626e71d9.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",


  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=12`);
    
      
      return response.data;
    } catch (e) {
    
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const fetchAllcars = createAsyncThunk(
  "cars/fetchAllcars",
async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts`);
  
    
    return response.data;
  } catch (e) {
  
    return thunkAPI.rejectWithValue(e.message);
  }
}
);



