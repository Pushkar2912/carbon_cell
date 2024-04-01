import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
    name: "crypto",
    initialState: {
        crypto: []
    },
    reducers:{
        setCrypto: (state, action) => {
            state.crypto = action.payload;
        }
    }
})

const { setCrypto } = cryptoSlice.actions
const cryptoReducer = cryptoSlice.reducer

export{
    cryptoReducer,
    setCrypto
}