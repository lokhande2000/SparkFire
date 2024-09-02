// src/pages/Home.js
import { Box, VStack } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navabar";
import AboutSection from "../components/AboutSection";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import HeadingName from "../components/HeadingName";

const Home = () => (
  <VStack spacing={5} w="full">
    <Box w="full">
      <Navbar />
      <HeroSection />
    </Box>
    <HeadingName title="About" />
    <AboutSection />
    <HeadingName title="Our products" />
    <ProductCard />
    <Footer />
  </VStack>
);

export default Home;
