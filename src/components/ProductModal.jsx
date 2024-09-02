import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Grid,
  VStack,
} from "@chakra-ui/react";
import DemoCarousel from "./DemoCarousel";

const ProductModal = ({ isOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateColumns="2fr 1.5fr"
            gap={2}
            w="full"
            direction={{ base: "column", md: "row" }}
          >
            <DemoCarousel w="full" h="full" />
            {/* <Image src={product.img} alt={product.name} boxSize="300px" objectFit="cover" /> */}
            <VStack
              alignItems="flex-start"
              //   ml={{ md: '4' }} mt={{ base: '4', md: '0' }}
            >
              <Text fontWeight="bold">Raju Rassibomb</Text>
              <Box borderBottom="2px dashed red" py={2}>
                <Text fontWeight={500} fontSize="lg">
                  MRP:{" "}
                </Text>
                <Text fontWeight="bold" fontSize="xl">
                  Raju's Dreams/-
                </Text>
              </Box>

              <Box borderBottom="2px dashed red" py={2}>
                <Text mt="2" fontWeight="bold">
                  Product Description:{" "}
                </Text>
                <Text fontSize="sm">
                  This packed product was crafted with Raju\'s sweat and dreams.
                </Text>
              </Box>
              <Box borderBottom="2px dashed red" py={2}>
                <Text mt="2" fontWeight="bold">
                  Product Content:{" "}
                </Text>
                <Text fontSize="sm">
                  ⭐ 150 handpicked pieces of rassi bombs
                </Text>
                <Text fontSize="sm">⭐ 50 with green patak.</Text>
              </Box>

              <Box borderBottom="2px dashed red" py={2}>
                <Text mt="2" fontWeight="bold">
                  Shipping Time:{" "}
                </Text>
                <Text fontSize="sm">
                  Before Raju understands that his dreams do not exist.
                </Text>
              </Box>
            </VStack>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Choose Now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
