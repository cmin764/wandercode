import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Layout } from "@/components/layout/Layout";
import Index from "@/pages/Index";

// Every non-home route is lazy; Contact also keeps the Cal.com SDK out of the entry bundle.
const Services = lazy(() => import("@/pages/Services"));
const Consulting = lazy(() => import("@/pages/services/Consulting"));
const Development = lazy(() => import("@/pages/services/Development"));
const Workshops = lazy(() => import("@/pages/services/Workshops"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const TenForTen = lazy(() => import("@/pages/TenForTen"));
const BackgroundIp = lazy(() => import("@/pages/BackgroundIp"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const App = () => (
  <>
    <Analytics />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Layout><div className="min-h-[60vh]" /></Layout>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/workshops" element={<Workshops />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/10for10" element={<TenForTen />} />
          <Route path="/ip" element={<BackgroundIp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
