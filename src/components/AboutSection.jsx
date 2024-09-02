import { Box, Text, Divider } from "@chakra-ui/react";

const AboutSection = () => (
  <Box textAlign="center" py="4">
    {/* <Text fontSize="2xl" fontWeight="bold">About</Text> */}
    {/* <Divider /> */}
    <Text mt="4" w="60%" mx="auto">
      Our products are crafted exclusively from the dreams and screams of young
      kids who wanted to show their mastery in their chosen fields, but were
      directed towards a factory for daily wages. Each cracker bursts
      brightethan their lost smiles, and can be heard louder than their cries
      for miles. Buy them, burst them, brag about them.
    </Text>
    <Text fontSize="lg" fontWeight="bold">
      The choice is yours. Because they don't have one.
    </Text>
  </Box>
);

export default AboutSection;
