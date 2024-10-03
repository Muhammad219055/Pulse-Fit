import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GetStarted from "./pages/Personalized";
import BMIProvider from "./context/BMIContext";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, delay:0.7 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/get-started"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, delay:0.7 }}
            >
              <GetStarted />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BMIProvider>
      <AnimatedRoutes />
    </BMIProvider>
  );
}

export default App;
