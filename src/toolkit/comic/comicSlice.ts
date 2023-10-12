import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comicCardType, comicSearchByNameType } from '../../types/comics.types';

interface ComicsState {
  comics: comicCardType[];
  comicsByName: comicSearchByNameType[]

}

const initialState: ComicsState = {
  comics: [],
  comicsByName:[]
};

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setComics: (state, action: PayloadAction<comicCardType[]>) => {
      state.comics = action.payload;
    },
    setComicsByName: (state, action: PayloadAction<comicCardType[]>) => {
      state.comicsByName = action.payload;
    },
    cleanComicsByName: (state) => {
      state.comicsByName = []
    }
}
});

export const { setComics, setComicsByName, cleanComicsByName } = comicsSlice.actions;

export default comicsSlice.reducer;


