import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comicCardType } from '../../types/comics.types';

interface ComicsState {
  comics: comicCardType[];
}

const initialState: ComicsState = {
  comics: [],
};

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setComics: (state, action: PayloadAction<comicCardType[]>) => {
      state.comics = action.payload;
    },
  },
});

export const { setComics } = comicsSlice.actions;

export default comicsSlice.reducer;


