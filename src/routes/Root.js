import Header from "../components/header";
import RestaurantList from "../components/restaurantList";
import Footer from "../components/footer";
import { GlobalCSS } from "../globalCss";





const Root = () => {
  return (
    <div>
      <GlobalCSS />
      <Header />
      <RestaurantList />
      <Footer />
    </div>
  );
};

export default Root;
