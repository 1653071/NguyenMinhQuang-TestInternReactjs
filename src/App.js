import logo from './logo.svg';
import './App.css';
import { NavBar } from './Navigation Bar/NavBar';
import Carouse from "../src/Carouse/Carouse"
import BProductBanner from './BProductBanner/BestProductBanner';
import GridProduct from './GridProduct/GridProduct';
import  BrandStoryBanner  from './BrandStoryBanner/BrandStoryBanner';
import IssueBanner from './IssueBanner/IssueBanner';
import IntroBanner from './IntroBanner/IntroBanner';
function App() {
  return (
    <div className="App">
       <NavBar />
       <Carouse/>
       <BProductBanner/>
       <GridProduct/>
       <BrandStoryBanner/>
       <IssueBanner/>
       <IntroBanner />
    </div>
  );
}

export default App;
