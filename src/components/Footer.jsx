import { Box, HStack, Text } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => (
  <Box w="full" bg="green.600" color="white" py="4" textAlign="center" borderY='8px solid #ece14c'>
    <Text>Follow us on:</Text>
    {/* Add icons/links here */}
    <HStack spacing={5} w='full' justifyContent='center' mt={2} >
      <FaYoutube />
      <FaSquareInstagram />
      <FaSquareTwitter />
      <ImFacebook2 />
      <FaLinkedin />
    </HStack>
  </Box>
);

export default Footer;
