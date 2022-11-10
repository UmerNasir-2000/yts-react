import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  page: 1,
  error: {
    message: "",
    hasError: false,
  },
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMovies: (state) => {
      state.movies = [];
      state.page = 1;
    },
    setPageNumber: (state, action) => void (state.page = action.payload),
    incrementPage: (state) => void (state.page = state.page + 1),
    decrementPage: (state) => void (state.page -= 1),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.movies = action.payload.data.movies;
      state.loading = state.error.hasError = false;
    }),
      builder.addCase(fetchTrending.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(fetchTrending.rejected, (state, action) => {
        state.error.hasError = true;
        state.error.message = action.payload.message;
      }),
      builder.addCase(fetchLatest.fulfilled, (state, action) => {
        state.movies = action.payload.data.movies;
        state.loading = state.error.hasError = false;
      }),
      builder.addCase(fetchLatest.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(fetchLatest.rejected, (state, action) => {
        state.loading = false;
        state.error.hasError = true;
        state.error.message = action.payload.message;
      })
  },
});

export const { incrementPage, decrementPage } = movieSlice.actions

export const fetchLatest = createAsyncThunk(
  "movies/fetchLatest",
  async (_, thunkAPI) => {
    const currentPage = thunkAPI.getState().movie.page
    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?page=${currentPage}&limit=25&sort_by=year`
      );
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(response.message);
    }
  }
);

export const fetchTrending = createAsyncThunk(
  "movies/fetchTrending",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?page=1&limit=24"
      );
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(response.message);
    }
  }
);

export default movieSlice.reducer;
