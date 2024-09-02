import { Box, Grid, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const HeadingName = ({ title }) => {
  return (
    <>
      <Grid
        w="70%"
        mx="auto"
        templateColumns="2fr 1fr 2fr"
        mt={5}
        alignItems="center"
        mb={3}
        gap={6}
      >
        <Box h={2} w="full" bg="#f2792b"></Box>
        <HStack justifyContent="center">
          <Heading color="#f2792b" as="h2" size="lg">
            {title}
          </Heading>
        </HStack>
        <Box h={2} w="full" bg="#f2792b"></Box>
      </Grid>
    </>
  );
};

export default HeadingName;
