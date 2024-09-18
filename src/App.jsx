import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
       <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;

