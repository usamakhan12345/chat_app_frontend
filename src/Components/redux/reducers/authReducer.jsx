import { AuthServices } from "../Actions/authAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userDetails: null,
  error: null,
  loading: null,
};

export const LoginUserReq = createAsyncThunk(
  "authReducer/LoginUserReq",
  async (payload, thunkAPI) => {
    try {
      const response = await AuthServices.LoginUserRequest(payload, thunkAPI);
      return response;
    } catch (error) {
      console.log("error---->", error);
    }
  }
);

const Authslice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    addStudentsDetails: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      return {
        ...state,
        userDetails: action.payload.data.existUser,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUserReq.fulfilled, (state, action) => {
      return {
        ...state,
        userDetails: action.payload.data,
      };
    });
  },
});

export const { addStudentsDetails } = Authslice.actions;

export default Authslice.reducer;
