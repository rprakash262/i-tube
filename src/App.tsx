// import { AppLayout } from "./components/appLayout/AppLayout";
// import { NetflixSlider } from "./components/netflixSlider/NetflixSlider";
import { AppLayoutContextProvider } from "./contexts/AppLayoutContext";
import { Router } from "./router/Router";

function App() {
  return (
    <AppLayoutContextProvider>
      <Router />
    </AppLayoutContextProvider>
    // <AppLayout>
    //   <p>Hello</p>
    //   <NetflixSlider width={window.innerWidth - 250} />
    // </AppLayout>
  );
}

export default App;
