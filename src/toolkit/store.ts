import { configureStore } from '@reduxjs/toolkit'
import comicsReducer from './comic/comicSlice'
import { comicApi } from './services/comicApi'

export const store = configureStore({
    reducer: {
        [comicApi.reducerPath]: comicApi.reducer,
        comics: comicsReducer,
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(comicApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch