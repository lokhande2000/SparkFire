// src/pages/Home.js
import { Box, VStack } from "@chakra-ui/react";
import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navabar";
import AboutSection from "../src/components/AboutSection";
import ProductCard from "../src/components/ProductCard";
import Footer from "../src/components/Footer";
import HeadingName from "../src/components/HeadingName";

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
