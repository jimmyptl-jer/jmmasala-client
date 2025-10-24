import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutMePage';
import ContactUsPage from './pages/ContactPage';
import Home from './pages/HomePage';
import JMMasalaProducts from './pages/ProductPage';
import QuotePage from './pages/QuotePage';

//Admin Imports

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<JMMasalaProducts />} />
          <Route path="/process" element={<Home />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/get-quote" element={<QuotePage />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
