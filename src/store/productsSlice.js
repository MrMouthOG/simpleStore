import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function () {
        const response = await fetch('https://6332d9b9a54a0e83d25a173e.mockapi.io/products');

        const data = await response.json();

        return data;
    }
);

export const fetchBrands = createAsyncThunk(
    'products/fetchBrands',
    async function () {
        const response = await fetch('https://6332d9b9a54a0e83d25a173e.mockapi.io/brands');

        const data = await response.json();

        return data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        busket: [],
        brands: [],
    },
    reducers: {
        addToBusket(state, action) {
            const check = state.busket.find(item => item.id === action.payload.id);

            if (check) {
                check.quantity += 1;
            } else {
                state.busket.push(action.payload);
            }
        },
        removeIntoBusket(state, action) {
            state.busket = state.busket.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
        },
        [fetchBrands.fulfilled]: (state, action) => {
            state.brands = action.payload;
        }
    },
});

export const { addToBusket, removeIntoBusket } = productsSlice.actions;
export default productsSlice.reducer;