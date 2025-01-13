import Header from "./layouts/Header";
import AnimeSlider from "./components/slider/AnimeSlider";
import Pages from "./layouts/Pages";
import Footer from "./layouts/Footer";

const App = () => {
   return (
      <>
         <Header />
         <AnimeSlider />
         <Pages />
         <Footer />
      </>
   );
};

export default App;
