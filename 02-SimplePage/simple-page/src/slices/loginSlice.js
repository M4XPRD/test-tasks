import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginData',
  initialState: {
    login: 'developer21',
    password: '123456',
  },
});

export default loginSlice.reducer;
