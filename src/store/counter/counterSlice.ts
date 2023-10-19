import { createSlice } from '@reduxjs/toolkit'

interface ICounterState {
    count: number;
}

const initialState: ICounterState = {
    count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  }
});

export const {} = counterSlice.actions

export default counterSlice.reducer