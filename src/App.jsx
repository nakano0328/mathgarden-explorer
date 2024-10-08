import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router>
        <Routes>
          {navItems.map(({ to, page: Page }) => (
            <Route key={to} path={to} element={<Page />} />
          ))}
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;