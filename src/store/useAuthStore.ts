import { create } from "zustand";

import { AuthState } from "types";

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  login: (token) => set({ isAuthenticated: true, token }),
  logout: () => set({ isAuthenticated: false, token: null })
}));

export default useAuthStore;
