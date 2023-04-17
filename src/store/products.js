import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./actionsApi";

const initialState = {
    listItems: [],
    loading: true,
    lastFetch: '',
    category: []
}


const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        addQuantity: (state, { payload }) => {
            const product = state.listItems.find((item) => {
                return item.id === payload.id;
            });
            product.quantity = product.quantity + 1;

        },
        minusQuantity: (state, { payload }) => {
            const product = state.listItems.find((item) => {
                return item.id === payload.id;
            });
            product.quantity = product.quantity - 1
        },
        productsRequst: (state) => {
            state.loading = true
        },
        productsRecive: (state, { payload }) => {
            state.listItems = payload.map((item) => {
                return { ...item, quantity: 0 }
            })
            // state.listItems = payload;
            state.loading = false

            const categorizedData = state.listItems.reduce((acc, curr, index) => {
                const { id, category, title, price, quantity, thumbnail } = curr;


                if (!acc[category]) {
                    acc[category] = {
                    };
                }
                acc[category];

                return acc;
            }, {});

            const categories = Object.keys(categorizedData);

            state.category = categories;
        },
        clearProduct: (state) => {
            state.listItems = state.listItems.map((x) => {
                return { ...x, quantity: 0 };
            })
        }
    }
});


export const loadProducts = () => {
    return {
        type: apiCallBegan.type,
        payload: {
            onSuccess: "products/productsRecive",
        }
    }
}

export const {
    minusQuantity,
    addQuantity,
    productsRequst,
    productsRecive, clearProduct } = slice.actions

export default slice.reducer