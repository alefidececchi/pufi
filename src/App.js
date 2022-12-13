import './App.css';
import Footer from './Components/Footer/Footer';
import Instagram from './Components/Instagram/Instagram';
import Navbar from './Components/Navbar/Navbar';
import Newsletter from './Components/Newsletter/Newsletter';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      <Instagram></Instagram>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;