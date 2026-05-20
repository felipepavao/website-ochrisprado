import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Index from "@/pages/Index";
import Sobre from "@/pages/Sobre";
import Trabalhos from "@/pages/Trabalhos";
import Blog from "@/pages/Blog";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";
import HomeAlterada from "@/pages/HomeAlterada";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Sales letter pages get no Navbar/Footer — pure reading experience
const SALES_ROUTES = ["/", "/home-alterada"];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isSalesPage = SALES_ROUTES.includes(pathname);

  if (isSalesPage) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/home-alterada" element={<HomeAlterada />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
