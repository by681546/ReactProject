import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchAllProduct = createAsyncThunk(
    'productInSlice/getAllProduct', async (thunkAPI) => {
        //const response = await userAPI.fetchById(userId)
        const response = await axios.get("http://localhost:4000/product");
        return response.data;
    }
)
const initialState = {
    status: 'idle',
    message:undefined,
     productArr:[],
     salKniyot:[],
     sum:0
  
}
const productSlice = createSlice({
    name: "productNameInSlice",
    initialState,
    reducers: {
        addProduc: {
            reducer: (state, action) => {
                action.payload.id = state.productArr[state.productArr.length - 1].id + 1;
                state.productArr.push(action.payload);
            },
            prepare: (id, name, price) => {
                //כאן אפשר להגדיר מה יהיה הpayload וכדו
                return { payload: { id, name, price } }
            }
        },
        addProducToSal: {
            
            reducer: (state, action) => {
              console.log(action.payload);
                state.salKniyot.push({...action.payload,...action.num});

            }
        },
        deleteProduc: (state, action) => {
            let index = state.productArr.findIndex(item => item.id === action.payload.id);
            state.productArr.splice(index, 1);
        },
        deleteProducFromSal: (state, action) => {
            let index = state.salKniyot.findIndex(item => item.id === action.payload.id);
            state.salKniyot.splice(index, 1);
        }


    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
            // Add user to the state array
            state.productArr = action.payload
            state.status="fulfilled"
        }).addCase(fetchAllProduct.rejected, (state, action) => {
            state.status="error";
            state.message=action.payload.message;


        })
        // .addCase(fetchAllProduct.ending, (state, action) => {
        //     state.status="pending"

        // })

    }

 });

export const { addProduc, deleteProduc,addProducToSal,deleteProducFromSal } = productSlice.actions;

export default productSlice.reducer;