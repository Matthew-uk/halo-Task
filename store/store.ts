import { create } from "zustand";

interface UserState {
  username: string;
  email: string;
  setUserName: (username: string | null) => void;
  setUserEmail: (email: string | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  username: "",
  email: "",
  setUserName: (username: any) => set({ username }),
  setUserEmail: (email: any) => set({ email }),
}));

export default useUserStore;
