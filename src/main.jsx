// PACKAGES
import { React } from 'react';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// CONTEXTS
import { AuthProvider } from './context/AuthContext.jsx';

// LAYOUTS
import HomeLayout from './layouts/home.jsx';
import DashboardLayout from './layouts/dashboard.jsx';

// PAGES
import App from './App.jsx'
import About from './pages/about.jsx';
import Courses from './pages/courses.jsx';
import Login from './pages/auth/login.jsx';
import Apply from './pages/auth/apply.jsx';
import Enquiry from './pages/enquiry.jsx';
import VerifyCertificates from './pages/verify-certificates.jsx';
import BookList from './pages/book-list.jsx';
import PrivacyPolicy from './pages/privacy-policy.jsx';
import TermsOfService from './pages/terms.jsx';

import Dashboard from './pages/dashboard/index.jsx';


// COMPONENTS
import CustomCursor from './components/custom-cursor.jsx';
import Preloader from './components/preloader.jsx';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/protectedroute.jsx';


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
      <AuthProvider>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        {!loading && (
          <>
            <CustomCursor />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="courses" element={<Courses />} />
                <Route path="enquiry" element={<Enquiry />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route
                  path="verify-certificates"
                  element={<VerifyCertificates />}
                />
                <Route path="digital-school-books" element={<BookList />} />
              </Route>

              {/* <Route path="/dashboard" element={<DashboardLayout />}>
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                
              </Route> */}

              <Route
                element={<ProtectedRoute />}
              >
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                  {/* <Route path="projects" element={<Projects />} />{" "} */}
                  {/* <Route path="classes" element={<Classes />} />{" "} */}
                </Route>
              </Route>

              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/apply" element={<Apply />} />
            </Routes>
          </>
        )}
      </AuthProvider>
    </BrowserRouter>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Root />);