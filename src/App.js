// import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Instagram from './Components/Instagram/Instagram';
import Newsletter from './Components/Newsletter/Newsletter';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Instagram></Instagram>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;