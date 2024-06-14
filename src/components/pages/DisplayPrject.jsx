import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import useFetch from "../useFetch";
import { useTheme } from "@mui/material/styles";

/**********************| Display Project Page|***********************/
const DisplayProject = () => {
  // defining the breaking point for mobile viewport
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { id } = useParams();

  // Fetching the date in an object from useFetch component that I made to evoke the data.
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");
  console.log("Fetched projects:", projects);

  // Find the project by id to dipslay the specifi project what we clicked to read more about it.
  const project = projects ? projects.find((p) => p.id === id) : null;

  return (
    <Container
      maxWidth="md"
      sx={{ padding: isSmallScreen ? "0 24px" : "40px 0" }}
    >
      {/* Error handling whether it is an error or data is pending */}
      {isPending && <Typography variant="h6">Loading...</Typography>}
      {error && (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      )}

      {/* If we have a project, create a title, image, paragraph, and a button */}
      {project ? (
        <Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
            mb={3}
          >
            {project.title}
          </Typography>

          <Box mb={isSmallScreen ? 4 : 6}>
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            paragraph
            sx={{ marginBottom: "20px" }}
            fontSize={isSmallScreen ? "1rem" : "1.25rem"}
            textAlign="justify"
          >
            {project.details}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size={isSmallScreen ? "medium" : "large"}
            fullWidth={isSmallScreen}
            component={Link}
            to={`/projects`}
          >
            View All
          </Button>
        </Box>
      ) : (
        // If we dont have the project just diisplay a message
        <Typography variant="h6" color="textSecondary" textAlign="center">
          Project not found
        </Typography>
      )}
    </Container>
  );
};

export default DisplayProject;
