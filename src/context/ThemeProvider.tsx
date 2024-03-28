import React, { createContext } from "react";

interface ThemeContextType {
  isMenuOpen: boolean | null;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(null);
  const initialsValues: ThemeContextType = {
    isMenuOpen,
    setIsMenuOpen,
  };
  return (
    <ThemeContext.Provider value={initialsValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
