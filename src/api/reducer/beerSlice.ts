import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
// Define a type for the slice state
interface beerState {
  allBeers: [
    {
      id: number;
      name: string;
      tagline?: string;
      abv?: number;
      tips?: string;
      description?: string;
      image_url?: string;
      first_brewed?: string;
      brewers_tips?: string;
    }
  ];
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: beerState = {
  allBeers: [
    {
      id: 0,
      name: "name",
      tagline: "tagline",
      abv: 0,
      tips: "tips",
      description: "description",
      image_url: "",
      first_brewed: "",
      brewers_tips: "",
    },
  ],
  isLoading: false
};

export const beerSlice = createSlice({
  name: "iceColdBeers",
  initialState,
  reducers: {
    allBeers: (state, action: PayloadAction<any>) => {
      state.allBeers = action.payload;
    },
    isLoading: (state, action: PayloadAction<any>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { allBeers, isLoading } = beerSlice.actions;

export function fetchBeers() {
  return (dispatch: Dispatch) => {
    dispatch(isLoading(true));
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then(function (response) {
        dispatch(allBeers(response.data));
        dispatch(isLoading(false));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(isLoading(false));
      });
  };
}

export const beerSelector = (state: RootState) => state.allBeers;
export const loadingSelector = (state: RootState) => state.isLoading;
export default beerSlice.reducer;
