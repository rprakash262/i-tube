import { Header } from "./header/Header";
import { MainSection } from "./mainSection/MainSection";
import { Sidebar } from "./sidebar/Sidebar";

export const AppLayout = () => {
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
};
