import BannerPre from './component/Bannerpre/BannerPre';
import CarouselComponent from './component/Carousel/Carousel';
import { CustomerReview } from './component/Customerreview';
import FooterComponent from './component/Footer/Footer';
import HeaderBar from './component/Headerbar/HeaderBar';
import HelloBar from './component/Hellobar/HelloBar';
import NavBar from './component/Navbar/NavBar';
import ProductSwatchComponent from './component/Productswatch/ProductSwatch';
import QuestionComponent from './component/Questions/Questions';
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
        <CustomerReview />
        <ProductSwatchComponent />
        <QuestionComponent />
      </div>
      <div>
      <FooterComponent />
      </div>
    </div>
  );
}

export default App;
