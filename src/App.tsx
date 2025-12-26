import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Doctor from "./pages/Doctor";
import ProstheticSolutions from "./pages/solutions/ProstheticSolutions";
import OrthoticSolutions from "./pages/solutions/OrthoticSolutions";
import PediatricSolutions from "./pages/solutions/PediatricSolutions";
import DiabeticFootcare from "./pages/solutions/DiabeticFootcare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/prosthetics" element={<ProstheticSolutions />} />
          <Route path="/solutions/orthotics" element={<OrthoticSolutions />} />
          <Route path="/solutions/pediatric" element={<PediatricSolutions />} />
          <Route path="/solutions/diabetic-footcare" element={<DiabeticFootcare />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
