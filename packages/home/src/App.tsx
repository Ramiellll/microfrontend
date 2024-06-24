import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Sunglasses from "sunglasses/Sunglasses";
import Eyeglasses from "eyeglasses/Eyeglasses";
import Lenses from "lenses/Lenses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.scss";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <div className="text-3xl mx-auto h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/sunglasses" />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="/eyeglasses" element={<Eyeglasses />} />
          <Route path="/lenses" element={<Lenses />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  </BrowserRouter>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
