import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import img from "./images/pathka.png";
import { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = () => {
  const products = useSelector((state) => state.products.products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productsItem = [
    {
      id: 1,
      name: "Raju RassiBomb",
      img: "/path-to-image.jpg",
      mrp: "Raju's Dreams/-",
      description:
        "This packed product was crafted with Raju's sweat and dreams.",
      content: "150 handpicked pieces of rassi bombs, 50 with green patak.",
      shippingTime: "Before Raju understands that his dreams do not exist.",
    },
    // Add more products if needed
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      w="70%"
      m="auto"
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap="6"
    >
      {products.map((product) => (
        <Box
          w="full"
          key={product.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image w="97%" pt={2} m="auto" src={img} alt={product.name} />
          <Flex
            alignItems="center"
            w="full"
            justifyContent="space-between"
            px={3}
            py={2}
          >
            <Text fontWeight="bold" fontSize="xl">
              {product.name}
            </Text>
            <Button mt="4" colorScheme="red" onClick={handleOpenModal}>
              Quick View
            </Button>
          </Flex>
        </Box>
      ))}

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={productsItem}
      />
    </Box>
  );
};

export default ProductCard;
