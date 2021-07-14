import { createContext } from "react";

export const MyContext = createContext({});

export function MyContextProvider({ children, ...props }) {
  return (
    <MyContext.Provider value={}>
      {children}
    </MyContext.Provider>
  );
}