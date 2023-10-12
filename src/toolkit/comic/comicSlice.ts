import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comicCardType, comicSearchByNameType } from '../../types/comics.types';

interface ComicsState {
  comics: comicCardType[];
  comicsByName: comicSearchByNameType[];
  comicById:any

}

const initialState: ComicsState = {
  comics: [],
  comicsByName:[],
  comicById:{}
};

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setComics: (state, action: PayloadAction<comicCardType[]>) => {
      state.comics.push(...action.payload);
    },
    setComicsByName: (state, action: PayloadAction<comicCardType[]>) => {
      state.comicsByName = action.payload;
    },
    cleanComicsByName: (state) => {
      state.comicsByName = []
    },
    setComicById:(state, action: PayloadAction<any>) => {
      state.comicById = action.payload
    },
    cleanComicById: (state) => {
        state.comicById = {}
      },
}
});

export const { setComics, setComicsByName, cleanComicsByName, setComicById, cleanComicById } = comicsSlice.actions;

export default comicsSlice.reducer;


