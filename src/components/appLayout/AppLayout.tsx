import { Outlet, useLocation } from "react-router";

import { Header } from "./header/Header";
import { MainSection } from "./mainSection/MainSection";
import { Sidebar } from "./sidebar/Sidebar";
import { useAppLayout } from "../../contexts/AppLayoutContext";
import { AudioPlayer } from "../audioPlayer/AudioPlayer";
import { SideNavItemType } from "../../interfaces/sidebarNavItems";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const AppLayout = ({
  sideNavItems,
}: {
  sideNavItems: SideNavItemType[];
}) => {
  const selectedAudio = useSelector(
    (state: RootState) => state.main.selectedAudio
  );
  const { sidebarWidth, toggleSidebar } = useAppLayout();
  const { pathname } = useLocation();

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Header toggleSidebar={toggleSidebar} />
      <div style={{ display: "flex", flex: 1, position: "relative" }}>
        <Sidebar sidebarWidth={sidebarWidth} sideNavItems={sideNavItems} />
        <MainSection>
          <Outlet />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          >
            {selectedAudio && !pathname.includes("/admin") && (
              <AudioPlayer
                audioId={selectedAudio.id}
                audio={selectedAudio.url}
                title={selectedAudio.title}
                singer={selectedAudio.singer}
                visits={selectedAudio.visits}
              />
            )}
          </div>
        </MainSection>
      </div>
    </div>
  );
};
