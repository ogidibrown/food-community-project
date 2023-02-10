import Food from "./component/Food";
import HeadlineCards from "./component/HeadlineCards";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Category from './component/Category'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
