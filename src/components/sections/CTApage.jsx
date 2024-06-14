import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

/*************************| Call to Action Page|*******************************/
const CTApage = () => {
  // defining the breaking point for mobile viewport
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  //cta object contains all the text content
  const cta = {
    title: "Let's Build Something Great Together",
    body: "I'm passionate about creating user-centric apps and websites that deliver exceptional results. Through a collaborative approach and a focus on efficiency, I help businesses achieve their goals. My experience and strong intuition allow me to work quickly and deliver high-quality solutions that exceed expectations.",
    call: "Interested in discussing your project? Don't hesitate to reach out!",
    url: "src/components/images/hassan.png",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          backgroundColor: "#505050",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* My Picture */}
        <Box
          component="img"
          src={cta.url}
          alt="Your Professional Headshot"
          sx={{
            // Adjust the width for different screen sizes
            width: { xs: "60%", md: "40%" },

            height: "auto",
            borderRadius: "50%",
            marginBottom: { xs: "20px", md: "0" },
            marginRight: { md: "40px" },
          }}
        />

        {/* Text and Call to Action Button */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "4rem",
            }}
          >
            {cta.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "20px",
              color: "text.secondary",
              textAlign: "justify",
              lineHeight: "2.5rem",
              fontSize: "1.2rem",
            }}
          >
            {cta.body}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: "30px",
              color: "text.secondary",
              textAlign: "justify",
              lineHeight: "2.5rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {cta.call}
          </Typography>
          {/* Button for contacting me via email */}
          <Button
            variant="contained"
            color="primary"
            size={isSmallScreen ? "medium" : "large"}
            fullWidth={isSmallScreen}
            href={`mailto:hs.sherafatmand@gmail.com?subject=Inquiry from Website`}
            sx={{
              marginTop: "24px",
              padding: "12px 24px",
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTApage;
