import React, { useState } from "react";
import {
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

/*************************| Main Content Page|*******************************/
const SectionHero = () => {
  // defining the breaking point for mobile viewport
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedSlide, setSelectedSlide] = useState(0);
  const navigate = useNavigate();

  //Defined all the content in section hero in array of object to control them better (add, delete, update)
  const slides = [
    {
      title: "Hi, I am Hassan",
      content:
        "I'm a member of the computer club at Olympic College. My passion lies in continually learning new technologies and developing applications that are not only functional but also user-friendly. I'm always eager to collaborate and explore new ideas. Let's build something amazing together!",
      url: "src/components/images/hassan.png",
      alt: "Hassan Sherafatmand",
      buttonText: "Get Started",
    },
    {
      title: "Join Our Community",
      content:
        "Become a part of our growing community and collaborate with others who share your passion for [topic of your community]. Together, we can share ideas, learn from one another, and push the boundaries of what's possible.",
      url: "src/components/images/oc2c.svg",
      alt: "Hema",
      buttonText: "Join Us",
    },
  ];

  //Used a click event handler for the button that if the VuttonText is "Get Started" navigate diffrently than if it is "Join Us".
  const handleClick = (buttonText) => {
    if (buttonText === "Get Started") {
      navigate("/IntroProjects");
    } else if (buttonText === "Join Us") {
      window.open("https://discord.gg/QrsGqjve", "_blank");
    }
  };

  return (
    // Used the Flex Box to make the page responsive
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      {/* Iterated the Slide array to evoke the data and used them in some components  */}
      <Box maxWidth="lg">
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flexWrap: isSmallScreen ? "wrap" : "nowrap",
              display: selectedSlide === index ? "flex" : "none",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: isSmallScreen ? "16px" : "32px",
              boxSizing: "border-box",
              marginBottom: "40px",
            }}
          >
            <Box
              component="img"
              src={slide.url}
              alt={slide.alt}
              sx={{
                width: isSmallScreen ? "40vw" : "32%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: isSmallScreen ? "24px" : "0",
              }}
            />
            <Box
              sx={{
                flex: 1,
                textAlign: isSmallScreen ? "center" : "left",
                padding: isSmallScreen ? "0 16px" : "0 32px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant={isSmallScreen ? "h4" : "h3"}
                component="h1"
                gutterBottom
                fontWeight="bold"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                  lineHeight: "2.5rem",
                  fontSize: "1.1rem",
                }}
              >
                {slide.content}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size={isSmallScreen ? "medium" : "large"}
                fullWidth={isSmallScreen}
                // Call handleClick on button click
                onClick={() => handleClick(slide.buttonText)}
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* I created two Radio button to change the slide in section hero */}
      <Box display="flex" justifyContent="center" mt={2} width="100%">
        <RadioGroup
          value={selectedSlide}
          onChange={(e) => setSelectedSlide(parseInt(e.target.value, 10))}
          row
        >
          {slides.map((_, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio color="primary" />}
              label=""
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default SectionHero;
