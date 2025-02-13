// PACKAGES
import { React } from 'react';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// LAYOUTS
import HomeLayout from './layouts/home.jsx';

// PAGES
import App from './App.jsx'
import About from './pages/about.jsx';
import Courses from './pages/courses.jsx';


// COMPONENTS
import CustomCursor from './components/custom-cursor.jsx';
import Preloader from './components/preloader.jsx';


// ROOT APP
const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <CustomCursor />
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<App />} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
            </Route>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Root />);