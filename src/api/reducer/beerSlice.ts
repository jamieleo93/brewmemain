import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import axios from 'axios';
// Define a type for the slice state
interface beerState {
  allBeers: [ 
    {
      id: number;
      name: string;
      tagline?: string;
      alcohol?: number;
      tips?: string;
      description?: string;
      image_url?: string;
    } 
  ]
}

// Define the initial state using that type
const initialState: beerState = {
  allBeers: [{
      id: 0,
      name: "name",
      tagline: "tagline",
      alcohol: 0,
      tips: "tips",
      description: "description",
      image_url: ""
  }]
}

export const beerSlice = createSlice({
  name: 'iceColdBeers',
  initialState,
  reducers: {
    allBeers: (state, action: PayloadAction<any>) => {
      state.allBeers = action.payload
    }
  },
})

export const { allBeers } = beerSlice.actions

export function fetchBeers() {
  return (dispatch: Dispatch) => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then(function (response) {
        dispatch(allBeers(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}

export const beerSelector = (state: RootState) => state.allBeers
export default beerSlice.reducer;