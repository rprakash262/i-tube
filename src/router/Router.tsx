import { BrowserRouter, Route, Routes } from "react-router";

import { AppLayout } from "../components/appLayout/AppLayout";
import { Home } from "../routes/home/Home";
import { Explore } from "../routes/explore/Explore";
import { Library } from "../routes/library/Library";
import { adminNavItems, mainNavItems } from "../data/sidebarNavItem";
import { Audios } from "../routes/adminRoutes/audios/Audios";
import { Videos } from "../routes/adminRoutes/videos/Videos";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout sideNavItems={mainNavItems} />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Route>
      <Route path="/admin" element={<AppLayout sideNavItems={adminNavItems} />}>
        <Route path="/admin/audios" element={<Audios />} />
        <Route path="/admin/videos" element={<Videos />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
