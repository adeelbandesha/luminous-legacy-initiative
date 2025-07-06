import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Daheg from "./pages/Daheg";
import Education from "./pages/Education";
import Welfare from "./pages/Welfare";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Health from "./pages/Health";
import History from "./pages/History";
import DahejBlog from "./pages/DahejBlog";
import EducationBlog from "./pages/EducationBlog";
import HealthBlog from "./pages/HealthBlog";
import WelfareBlog from "./pages/WelfareBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dahej" element={<Daheg />} />
          <Route path="/health" element={<Health />} />
          <Route path="/education" element={<Education />} />
          <Route path="/welfare" element={<Welfare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/dahej/:id" element={<DahejBlog />} />
          <Route path="/blog/education/:id" element={<EducationBlog />} />
          <Route path="/blog/health/:id" element={<HealthBlog />} />
          <Route path="/blog/welfare/:id" element={<WelfareBlog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
