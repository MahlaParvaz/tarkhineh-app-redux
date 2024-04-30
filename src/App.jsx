import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './Layout/Layout';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
