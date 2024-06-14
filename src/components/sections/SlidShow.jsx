import React, { useRef, useState } from "react";
import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import useFetch from "../useFetch";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { keyframes } from "@mui/system";
import { useTheme } from "@mui/material/styles";

/******************| Arrow Button Component|*************************/
// I used these arrow to slide the pictures to left and right, also I customized them here.
const ArrowButton = ({ onClick, icon }) => (
  <IconButton
    onClick={onClick}
    sx={{
      border: "none",
      zIndex: 1,
      "& svg": {
        color: "primary.main",
        width: "48px",
        height: "48px",
      },
      margin: "0rem",
      "&:hover": {
        border: "none",
        backgroundColor: "transparent",
        "& svg": {
          color: "secondary.main",
          width: "48px",
          height: "48px",
        },
      },
    }}
  >
    {icon}
  </IconButton>
);
/*************************| Slid Show Page|*******************************/
const SlideShow = () => {
  // defining the breaking point for mobile viewport
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Fetching the date in an object from useFetch component that I made to evoke the data.
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Event handler to slide the show based on the index of the page.
  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  const getPrevIndex = (currentIndex, length) => {
    if (currentIndex === 0) {
      return length - 1;
    } else if (currentIndex === 1) {
      return length - 2;
    } else {
      return currentIndex - 2;
    }
  };

  const getNextIndex = (currentIndex, length) => {
    if (currentIndex === length - 1) {
      return 0;
    } else if (currentIndex === length - 2) {
      return 1;
    } else {
      return currentIndex + 2;
    }
  };

  //Error handling whether it is an error or data is pending
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box marginTop="128px">
      {/* I used 3 <img> to be displayed in the screen */}
      <Box display="flex" justifyContent="cneter" gap="1%">
        <img
          src={
            projects[getPrevIndex(currentSlideIndex, projects.length)].imageUrl
          }
          alt={projects[getPrevIndex(currentSlideIndex, projects.length)].title}
          style={{
            width: isSmallScreen ? "80%" : "64%",
            borderRadius: "24px",
          }}
        />
        <img
          src={projects[currentSlideIndex].imageUrl}
          alt={projects[currentSlideIndex].title}
          style={{ width: "64%", borderRadius: "24px" }}
        />
        <img
          src={
            projects[getNextIndex(currentSlideIndex, projects.length)].imageUrl
          }
          alt={projects[getNextIndex(currentSlideIndex, projects.length)].title}
          style={{ width: "64%", borderRadius: "24px" }}
        />
      </Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup sx={{ margin: "40px" }}>
          <ArrowButton
            onClick={handlePrevSlide}
            icon={<ArrowCircleLeftIcon />}
          />
          <ArrowButton
            width="3rem"
            height="3rem"
            onClick={handleNextSlide}
            icon={<ArrowCircleRightIcon />}
          />
        </ButtonGroup>
      </Container>
    </Box>
  );
};
export default SlideShow;
