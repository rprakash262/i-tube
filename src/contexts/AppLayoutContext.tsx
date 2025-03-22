import { createContext, ReactNode, useContext, useState } from "react";

type AppLayoutContextType = {
  sidebarWidth: number;
  toggleSidebar: () => void;
};

const AppLayoutContext = createContext<AppLayoutContextType | undefined>(
  undefined
);

export const AppLayoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(240);

  const toggleSidebar = () => {
    setSidebarWidth((prevWidth) => (prevWidth === 0 ? 240 : 0));
  };

  return (
    <AppLayoutContext.Provider value={{ sidebarWidth, toggleSidebar }}>
      {children}
    </AppLayoutContext.Provider>
  );
};

export const useAppLayout = () => {
  const context = useContext(AppLayoutContext);

  if (context === undefined) {
    throw new Error("useAppLayout must be used inside AppLayoutProvider");
  }

  return context;
};
