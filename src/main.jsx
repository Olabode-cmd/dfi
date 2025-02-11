import { React } from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx';



import CustomCursor from './components/custom-cursor.jsx';
import Preloader from './components/preloader.jsx';

const Root = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <CustomCursor />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Root />);
