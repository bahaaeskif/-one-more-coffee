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
            state.loading = false

            const products = [];
            console.log(payload
            );
            payload.forEach((x) => {
                x.products.map((y) => {
                    products.push({ ...y, category: x.id })
                })
            })
            state.listItems = products.map((item) => {
                return { ...item, quantity: 0 }
            });

            let categoryNames = payload.map((x) => {
                return {
                    id: x.id,
                    name: x.name,
                    products: x.products
                }
            })
            categoryNames = categoryNames.filter((x) => {
                return x.products.length > 0;
            })
            console.log(categoryNames)
            state.category = categoryNames;

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