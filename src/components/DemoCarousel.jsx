import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img2 from "./images/productImg.png";
import { Box } from "@chakra-ui/react";

const DemoCarousel = () => {
  return (
    <>
      <Carousel>
        <Box>
          <img src={img2} />
          {/* <p className="legend">Legend 1</p> */}
        </Box>
        <Box h={"80%"}>
          <img src={img2} />
          {/* <p className="legend">Legend 2</p> */}
        </Box>
        <Box h={"80%"}>
          <img src={img2} />
          {/* <p className="legend">Legend 3</p> */}
        </Box>
      </Carousel>
    </>
  );
};

export default DemoCarousel;
