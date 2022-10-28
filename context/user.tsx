"use client";
import { createContext, useContext, useState } from "react";

let context: {
  user?: string;
  setUser: (user: string) => void;
} = undefined!;
export const UserContext = createContext(context);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string>();
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
