import ApiResource from "../AxiosInstance/index"
import { chatConstants } from "../../constants"



async function LoginUserRequest  (payload , thunkAPI){
    const {userData} = payload
    try{
        const response = await ApiResource.post(chatConstants.baseUrl, userData)

    }catch(error) {
        console.log('error----->' , error)
        return thunkAPI.rejectWithValue(error)
    }

}




export const AuthServices = {
    LoginUserRequest
}