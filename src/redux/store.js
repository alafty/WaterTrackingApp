import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {reducer},
    middleware: [thunk]
});