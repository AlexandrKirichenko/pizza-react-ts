import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

import { SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>( //<Возвращаемый тип, аргрументы>
	'pizza/fetchPizzasStatus',
	async (params) => {
		const { category, sortBy, order, search, currentPage } = params;
		const { data } = await axios.get<Pizza[]>(
			`https://6299d16c6f8c03a9784a67c2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
		);
		return data;
	},
);

type Pizza = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
};

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface PizzaSliceState {
	items: Pizza[];
	status: Status;
}

const initialState: PizzaSliceState = {
	items: [],
	status: Status.LOADING,
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<Pizza[]>) {
			state.items = action.payload;
			state.items = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state, action) => {
			state.status = Status.LOADING;
		});
		
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = Status.SUCCESS;
		});
		
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.items = [];
		});
	},
});



export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
