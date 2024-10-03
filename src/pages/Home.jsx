import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import BlogHome from "../components/BlogHome";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();
  function getStarted() {
    navigate("/get-started");
  }
  return (
    <motion.div
    
    >
      <NavBar onGetStarted={getStarted} />
      <Hero onGetStarted={getStarted} />
      <BlogHome />
      <Footer />
    </motion.div>
  );
};

export default Home;
