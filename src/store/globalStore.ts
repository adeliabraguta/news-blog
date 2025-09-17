import { create } from "zustand";

interface GlobalState {
	user: string;
	setUser: (user: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
	user: "",
	setUser: (user) => set({ user }),
}));
