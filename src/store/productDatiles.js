import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productDatile: { quantity: 0, }
}

const slice = createSlice({
    name: "productDatiles",
    initialState: initialState,
    reducers: {
        addToProductDatile: (state, { payload }) => {
            state.productDatile = payload;
        },
        addQuantityDatile: (state) => {
            state.productDatile = { ...state.productDatile, quantity: state.productDatile.quantity + 1 }
        },
        minusQuantityDatile: (state) => {
            state.productDatile = { ...state.productDatile, quantity: state.productDatile.quantity - 1 }
        },

    }
});

export const { addToProductDatile, addQuantityDatile, minusQuantityDatile } = slice.actions
export default slice.reducer