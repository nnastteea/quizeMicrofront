import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  userName: string;
  setUserName: (name: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider = ({ children }: UserContextProps) => {
  const [userName, setUserName] = useState(() => {
    try {
      const storedUserName = localStorage.getItem("userName");
      return storedUserName || "";
    } catch (error) {
      console.error("Error with localhost", error);
      return "";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("userName", userName);
    } catch (error) {
      console.error("Error with localhost", error);
    }
  }, [userName]);

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
