import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Boost from './components/Boost';

function App() {
  return (
    <div className="bg-white h-screen w-full flex flex-col">
      <Header></Header>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <Boost></Boost>
      <Footer></Footer>
    </div>
  );
}

export default App;
