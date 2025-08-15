import React, { createContext, ReactNode, useContext, useState } from "react";

interface User {
  userName: string;
  setUserName: (name: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider = ({ children }: UserContextProps) => {
  const [userName, setUserName] = useState("");
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
