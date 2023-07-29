import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {foodApi} from '../api/FoodApiService';

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }).concat(foodApi.middleware),
});

setupListeners(store.dispatch);
