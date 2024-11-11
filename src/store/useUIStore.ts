import { create } from "zustand";

import { UIState } from "types";

const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}));

export default useUIStore;
