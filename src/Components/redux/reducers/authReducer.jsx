import { AuthServices } from "../Actions/authAction";
import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    userDetails : null,
    error : null,
    loading : null,

}

export const LoginUserReq = createAsyncThunk('authReducer/LoginUserReq' ,async (payload ,thunkAPI)=>{
        try{
            const response = await AuthServices.LoginUserRequest(payload , thunkAPI)
            return response
        }catch(error){
            console.log('error---->' ,error )
        }  
})

const authReducer = createSlice({
   initialState: initialState,
    name : 'auht' , 
    reducers : {

    },
    extraReducers : (builder)=>{
        builder.addCase(LoginUserReq.fulfilled, (state,action)=>{
            return{
                ...state,
            userDetails : action.payload.data,
            }
        })
    }
})


export default authReducer.reducer