import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import KrevoPilot from './pages/KrevoPilot.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Technology from './pages/Technology.jsx';
import EngagementModels from './pages/EngagementModels.jsx';
import Contact from './pages/Contact.jsx';
import InfoPage from './pages/InfoPage.jsx';

function NotFound() {
  return (
    <InfoPage
      eyebrow="404 — PAGE NOT FOUND"
      title="This page isn't available."
      description="The page may have moved, or the address may be incorrect."
    />
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:slug" element={<ProjectDetails />} />
        <Route path="krevopilot" element={<KrevoPilot />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="technology" element={<Technology />} />
        <Route path="engagement-models" element={<EngagementModels />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}