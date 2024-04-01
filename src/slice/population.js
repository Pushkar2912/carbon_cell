import { createSlice } from "@reduxjs/toolkit"

const populationSlice = createSlice({
    name: "population",
    initialState: {
        population: []
    },
    reducers:{
        setPopulation: (state, action) =>{
            state.population = action.payload
        }
    }
})

const { setPopulation } = populationSlice.actions
const populationReducer = populationSlice.reducer

export{
    populationReducer,
    setPopulation
}