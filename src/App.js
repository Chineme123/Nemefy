import "./App.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroContent from "./components/HeroContent/HeroContent";
import StatsContent from "./components/StatsContent/StatsContent";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroContent />
      <StatsContent />
      <Footer />
    </div>
  );
}

export default App;
