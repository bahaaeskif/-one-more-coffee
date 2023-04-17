import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
}


const slice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const exist = state.cartItems.find((x) => {
                return x.id === payload.id;
            })
            if (exist) {
                state.cartItems = state.cartItems.map((x) => {
                    return exist.id === x.id ? { ...x, quantity: x.quantity + 1 } : x;
                })
            } else {
                state.cartItems.push({ ...payload, quantity: payload.quantity + 1 })
                state.amount = state.amount + 1
            }

            state.total = state.cartItems.reduce((acc, curr) => {
                return acc = +acc + +(curr.price * curr.quantity);
            }, 0)

        },

        removeItem: (state, { payload }) => {
            const exist = state.cartItems.find((x) => {
                return x.id === payload.id;
            })
            if (exist.quantity > 1) {
                state.cartItems = state.cartItems.map((x) => {
                    return exist.id === x.id ? { ...x, quantity: x.quantity - 1 } : x;
                })
            } else {
                state.cartItems = state.cartItems.filter((item) => item.id !== exist.id)
                state.amount = state.amount - 1
            }

            state.total = state.cartItems.reduce((acc, curr) => {
                return acc = +acc + +(curr.price * curr.quantity);
            }, 0)
        },
        clearItems: (state) => {
            state.cartItems = [];
            state.amount = 0;
        }
    }
});




export default slice.reducer

export const { addToCart, removeItem, clearItems } = slice.actions