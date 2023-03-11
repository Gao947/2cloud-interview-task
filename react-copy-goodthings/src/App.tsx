import BannerPre from './component/Bannerpre/BannerPre';
import CarouselComponent from './component/Carousel/Carousel';
import HeaderBar from './component/Headerbar/HeaderBar';
import HelloBar from './component/Hellobar/HelloBar';
import NavBar from './component/Navbar/NavBar';
import SwitchTabComponent from './component/Switchtab/SwitchTab';

function App() {
  return (
    <div>
      <div>
        <HelloBar />
        <BannerPre />
        <HeaderBar />
        <NavBar />
      </div>
      <div>
        <CarouselComponent />
        <SwitchTabComponent/>
      </div>
    </div>
  );
}

export default App;
