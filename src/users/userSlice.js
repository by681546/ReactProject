import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUser = createAsyncThunk(
    'userInSlice/getAlluser', async (thunkAPI) => {
        const response = await axios.get("http://localhost:4000/user");
        return response.data;
    })

export const postUser = createAsyncThunk('signin', async (user,thunkA) => {
    const req = await axios.post("http://localhost:4000/user",user);
   
    return user;
})

const initialState={
    currentUser:null,
    userArr:[]
}
const userSlice = createSlice({
    name: "users", initialState,
    reducers:
    {
        //  logout: (state, action) => {
          
        //     state.currentUser=null;
        // },
        addUser: {
        reducer: (state, action) => {
           
            state.userArr.push(action.payload);
        },
        prepare: (tz, name, telphone) => {
            //כאן אפשר להגדיר מה יהיה הpayload וכדו
            return { payload: { tz, name, telphone } }
        }
    }
    
    },
    //  extraReducers: (builder) => {
    //     builder.addCase(fetchUser.fulfilled, (state, action) => {
    //        state.currentUser=action.payload;
    //        console.log("add cace fulfiled");
    //     //    alert('ברוך שובך'+state.currentUser.firstName);
    //     }).addCase(fetchUser.pending, (state, action) => {
    //     }).addCase(fetchUser.rejected, (state, action) => {
    //        // alert("שם או סיסמא לא נכונים");
    //        console.log("add cace rejected");
    //        console.log(fetchUser.rejected);
    //     })
    // }
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.userArr = action.payload
        }).addCase(fetchUser.rejected, (state, action) => {
           console.log("not succed")
        })
    }
});

    export const {addUser} = userSlice.actions;
export default userSlice.reducer;