import { BrowserRouter, Route, Routes } from "react-router";

import { AppLayout } from "../components/appLayout/AppLayout";
import { Home } from "../routes/home/Home";
import { Explore } from "../routes/explore/Explore";
import { Library } from "../routes/library/Library";
import { adminNavItems, mainNavItems } from "../data/sidebarNavItem";
// import { Audios } from "../routes/adminRoutes/audios/Audios";
import { Videos } from "../routes/adminRoutes/videos/Videos";
import { Industries } from "../routes/adminRoutes/industries/Industries";
import { Singers } from "../routes/adminRoutes/singers/Singers";
import { Genre } from "../routes/adminRoutes/genre/Genre";
// import { Playlists } from "../routes/adminRoutes/playlists/Playlists";
import { AddNewPlaylist } from "../routes/adminRoutes/playlists/AddPlaylist";
import { AllPlaylists } from "../routes/adminRoutes/playlists/AllPlaylists";
import { EditPlaylist } from "../routes/adminRoutes/playlists/EditPlaylist";
import { AllAudios } from "../routes/adminRoutes/audios/AllAudios";
import { AddAudio } from "../routes/adminRoutes/audios/AddAudio";
import { EditAudio } from "../routes/adminRoutes/audios/EditAudio";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout sideNavItems={mainNavItems} />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Route>
      <Route path="/admin" element={<AppLayout sideNavItems={adminNavItems} />}>
        <Route index element={<Industries />} />
        <Route path="/admin/industries" element={<Industries />} />
        <Route path="/admin/genre" element={<Genre />} />
        <Route path="/admin/singers" element={<Singers />} />
        <Route path="/admin/audios" element={<AllAudios />} />
        <Route path="/admin/audios/new" element={<AddAudio />} />
        <Route path="/admin/audios/edit/:audioId" element={<EditAudio />} />
        <Route path="/admin/videos" element={<Videos />} />
        <Route path="/admin/playlists" element={<AllPlaylists />} />
        <Route path="/admin/playlists/new" element={<AddNewPlaylist />} />
        <Route
          path="/admin/playlists/edit/:playlistId"
          element={<EditPlaylist />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
