import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import MediaKitPage from './pages/MediaKitPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/bldc-power-tools" element={<CaseStudyDetailPage />} />
        <Route path="/insights-blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/media-kit" element={<MediaKitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
