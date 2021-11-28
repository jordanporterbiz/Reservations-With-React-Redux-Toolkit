import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ReservationState = {
    value: string[]
}


const initialState = { 
    value: []
}


export const reservationSlice = createSlice({
    name: 'reservations',
    initialState, 
    reducers: {
        addReservation: (state: ReservationState, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
    }
})

export const { addReservation } = reservationSlice.actions

export default reservationSlice.reducer;