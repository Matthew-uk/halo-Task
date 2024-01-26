import { create } from "zustand";

interface UserState {
  userId: string;
  username: string;
  email: string;
  tasks: [];
  notes: [];
  refresh: number;
  setRefresh: () => void;
  setUserId: (username: string | null) => void;
  setUserName: (username: string | null) => void;
  setUserEmail: (email: string | null) => void;
  setTasks: (task: any | null) => void;
  setNotes: (notes: any | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  userId: "",
  username: "",
  email: "",
  tasks: [],
  notes: [],
  refresh: 0,
  setUserId: (userId: any) => set({ userId }),
  setUserName: (username: any) => set({ username }),
  setUserEmail: (email: any) => set({ email }),
  setTasks: (tasks: any) => set({ tasks }),
  setNotes: (notes: any) => set({ notes }),
  setRefresh: () => set((state) => ({ refresh: state.refresh + 1 })),
}));

export default useUserStore;
