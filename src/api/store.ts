import { configureStore } from "@reduxjs/toolkit";
import { beerSlice } from "./reducer/beerSlice";

const store = configureStore({
  reducer: {
    allBeers: beerSlice.reducer,
    isLoading: beerSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
