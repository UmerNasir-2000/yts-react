import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  page: 1,
  error: false,
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMovies: (state) => (state.movies = []),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      console.log(`🚀 ~ action`, action);
      state.movies.push(action.payload);
      state.loading = state.error = false;
    }),
      builder.addCase(fetchTrending.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(fetchTrending.rejected, (state, action) => {
        state.error = true;
      });
  },
});

const fetchTrending = createAsyncThunk(
  "movies/fetchTrending",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?page=1"
      );
      thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);
