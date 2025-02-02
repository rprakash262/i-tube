import { AppLayout } from "./components/appLayout/AppLayout";
import { NetflixSlider } from "./components/netflixSlider/NetflixSlider";

function App() {
  console.log(window.innerWidth);
  return (
    <AppLayout>
      <p>Hello</p>
      <NetflixSlider width={window.innerWidth - 250} />
    </AppLayout>
  );
}

export default App;
