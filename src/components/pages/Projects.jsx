import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";

/*************************| Projects Page|*******************************/
const Projects = () => {
  //projectInfo contains all the category info for projects
  const projectInfo = {
    webDesign: {
      category: "Web Design",
      body: "Explore my projects in web design where I focus on creating beautiful, responsive, and user-friendly websites.",
    },
    appDesign: {
      category: "App Design",
      body: "Dive into my app design projects, showcasing my ability to develop intuitive and engaging mobile applications.",
    },
    graphicDesign: {
      category: "Graphic Design",
      body: "Check out my graphic design work, where creativity meets functionality to deliver impactful visual solutions.",
    },
  };

  // Fetching the date in an object from useFetch component that I made to evoke the data.
  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects");
  const [localProjects, setLocalProjects] = useState([]);

  useEffect(() => {
    if (projects) {
      setLocalProjects(projects);
    }
  }, [projects]);

  //Even handling for deleting the project
  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/projects/" + id, { method: "DELETE" });
    const newProjects = localProjects.filter((project) => project.id !== id);
    setLocalProjects(newProjects);
  };

  //This function renders all the projects and seprate them by the category
  const renderProjectsByCategory = (category) => {
    return localProjects
      .filter((project) => project.category === category)
      .map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <ProjectCards project={project} handleDelete={handleDelete} />
        </Grid>
      ));
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginBottom: "20px" }}
        fontWeight="bold"
      >
        My Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "40px",
          textAlign: "justify",
          lineHeight: "2.5rem",
          fontSize: "1.2rem",
        }}
      >
        Welcome to my project portfolio. Here you'll find a selection of my
        recent work in Web Design, App Design, and Graphic Design. Each project
        highlights my skills in creating user-centric designs and delivering
        high-quality solutions.
      </Typography>

      {/* defining the breaking point for mobile viewport */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {/* Web Design Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ marginBottom: "10px", fontWeight: "bold" }}
        >
          {projectInfo.webDesign.category}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "16px", fontSize: "1.1rem" }}
        >
          {projectInfo.webDesign.body}
        </Typography>
        <Grid container spacing={3}>
          {renderProjectsByCategory("web-design")}
        </Grid>
      </Box>

      {/* App Design Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ marginBottom: "10px", fontWeight: "bold" }}
        >
          {projectInfo.appDesign.category}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "16px", fontSize: "1.1rem" }}
        >
          {projectInfo.appDesign.body}
        </Typography>
        <Grid container spacing={3}>
          {renderProjectsByCategory("app-design")}
        </Grid>
      </Box>

      {/* Graphic Design Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ marginBottom: "10px", fontWeight: "bold" }}
        >
          {projectInfo.graphicDesign.category}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "16px", fontSize: "1.1rem" }}
        >
          {projectInfo.graphicDesign.body}
        </Typography>
        <Grid container spacing={3}>
          {renderProjectsByCategory("graphic-design")}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
