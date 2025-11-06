import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import History from "./pages/History";
import Culture from "./pages/Culture";
import Heritage from "./pages/Heritage";
import QRDisplay from "./components/QRDisplay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QRDisplay url="https://mysore-gilt.vercel.app/home" />} />
          <Route path="/home" element={<Index />} />
          <Route path="/home/history" element={<History />} />
          <Route path="/home/culture" element={<Culture />} />
          <Route path="/home/heritage" element={<Heritage />} />
          <Route path="/qr-scan" element={<QRDisplay url="https://mysore-gilt.vercel.app/home" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
