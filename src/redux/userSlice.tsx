import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: {
    id: 0,
    username: "Hello1",
    email: "",
    role: "admin",
  },

  isLoading: false,
  error: null,
  isAuthenticated: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
