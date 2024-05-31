import "./App.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroContent from "./components/HeroContent/HeroContent";
import StatsContent from "./components/StatsContent/StatsContent";
import BuildStore from "./components/BuildStore/BuildStore";
import SalesChannel from "./components/SalesChannel/SalesChannel";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroContent />
      <StatsContent />
      <BuildStore />
      <SalesChannel />
      <Footer />
    </div>
  );
}

export default App;
