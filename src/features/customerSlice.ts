import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CustomerState = {
    value: Customer[]
}

type Customer = {
    id: string
    name: string
    food: string[]
}


const initialState: CustomerState = { 
    value: []
}


export const customerSlice = createSlice({
    name: 'customers',
    initialState, 
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        }
    }
})

export const { addCustomer } = customerSlice.actions

export default customerSlice.reducer;