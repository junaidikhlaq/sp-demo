import Navbar from './components/navbar';
import HeroBanner from './components/hero';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroBanner/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
