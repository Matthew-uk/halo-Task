import { create } from "zustand";

interface UserState {
  userId: string;
  username: string;
  email: string;
  tasks: [];
  setUserId: (username: string | null) => void;
  setUserName: (username: string | null) => void;
  setUserEmail: (email: string | null) => void;
  setTasks: (task: string | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  userId: "",
  username: "",
  email: "",
  tasks: [],
  setUserId: (userId: any) => set({ userId }),
  setUserName: (username: any) => set({ username }),
  setUserEmail: (email: any) => set({ email }),
  setTasks: (tasks: any) => set({ tasks }),
}));

export default useUserStore;
