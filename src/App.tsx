import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Connections from "@/components/Connections";
import Projects from "@/components/Projects";
import ProjectDetail from "@/components/ProjectDetail";
import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import MouseParticleTrail from "@/components/MouseParticleTrail";
import Chatbot from "@/components/Chatbot";
import ErrorBoundary from "@/components/ErrorBoundary";
import React, { Suspense } from "react";
import CustomCursor from "./components/ui/Cursor";
import ReactLenis from "lenis/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Work from "@/components/Work";

const Footer = React.lazy(() => import("./components/Footer"));

const HomePage = () => (
  <>
    <Hero />
    <MouseParticleTrail />
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Footer />
    </Suspense>
  </>
);



const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <ReactLenis root>
            <CustomCursor />
            <main className="relative">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/work" element={<Work />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
              <Chatbot />
            </main>
          </ReactLenis>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
