import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Navbar = () => (
  <Flex as="nav" justify="space-between" padding="1rem" bg="red.600">
    <Text color="white" fontSize="xl">
      Firefly
    </Text>
    <Link color="white">Follow us on</Link>
  </Flex>
);

export default Navbar;
