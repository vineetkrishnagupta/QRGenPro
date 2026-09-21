import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (name: string, email: string) => set({ user: { name, email } }),
  logout: () => set({ user: null }),
}));
