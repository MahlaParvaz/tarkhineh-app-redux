import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './Layout/Layout';
import MenuPage from './pages/MenuPage';
import { Toaster } from 'react-hot-toast';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
