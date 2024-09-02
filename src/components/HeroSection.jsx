// src/components/HeroSection.js
import { Box, Text, Button, Image } from '@chakra-ui/react';
import img from './images/pathka.png'

const HeroSection = () => (
  <Box w='full' position="relative" textAlign="center" color="white">
    <Image src={img} alt="Hero" w="100%" h="400px" objectFit="cover" />
    <Box position="absolute" top="50%" left="10%" display='flex' flexDirection='column' alignItems='flex-start'>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight='bold'>The choice is yours.</Text>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight='bold'>Because they don't have one.</Text>

      <Button colorScheme="red" mt="4">Quick View</Button>
    </Box>
  </Box>
);

export default HeroSection;
