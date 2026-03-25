import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import CalFloatingButton from "@/components/CalFloatingButton";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Consulting from "./pages/services/Consulting";
import Development from "./pages/services/Development";
import Workshops from "./pages/services/Workshops";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { CAL_LINK_DISCOVERY } from "@/lib/constants";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Analytics />
    <BrowserRouter>
      <ScrollToTop />
      <CalFloatingButton calLink={CAL_LINK_DISCOVERY} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/workshops" element={<Workshops />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
