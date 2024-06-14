import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Tab,
  Tabs,
  Box,
  useMediaQuery,
} from "@mui/material";
import ProjectCards from "../pages/ProjectCards";
import useFetch from "../useFetch";
import { useTheme } from "@mui/material/styles";

/*************************| Project List Page|*******************************/
const ProjectList = () => {
  // defining the breaking point for mobile viewport
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Fetching the date in an object from useFetch component that I made to evoke the data.
  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects");

  // State to manage the filter category
  const [filter, setFilter] = useState(0);

  // State to manage the projects list after fetching
  const [filteredProjects, setFilteredProjects] = useState([]);

  //I used the useEffect to filter projects based on the selected tab
  useEffect(() => {
    if (projects) {
      switch (filter) {
        case 0:
          setFilteredProjects(projects);
          break;
        case 1:
          setFilteredProjects(
            projects.filter(
              (project) => project.category.toLowerCase() === "web-design"
            )
          );
          break;
        case 2:
          setFilteredProjects(
            projects.filter(
              (project) => project.category.toLowerCase() === "app-design"
            )
          );
          break;
        case 3:
          setFilteredProjects(
            projects.filter(
              (project) => project.category.toLowerCase() === "graphic-design"
            )
          );
          break;
        default:
          // Optional: Handle cases where the filter value does not match any known category
          setFilteredProjects([]);
      }
    }
  }, [projects, filter]);

  const handleFilter = (event, newValue) => {
    setFilter(newValue);
  };

  //Event handler to delete the desired project
  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/projects/" + id, {
      method: "DELETE",
    });
    setFilteredProjects(
      filteredProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <div className="projects">
      <Container>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ display: "block", marginBottom: "40px" }}
        >
          Project Lists
        </Typography>
        {/* Filter tabs */}
        {/* I used the Tabs component to display the project based on a specific category */}
        <Tabs
          value={filter}
          onChange={handleFilter}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
            ".MuiTab-root": {
              fontSize: isSmallScreen ? "0.9rem" : "1.2rem",
              padding: isSmallScreen ? "8px 16px" : "12px 24px",
              minWidth: isSmallScreen ? 70 : 100, // Adjust the minimum width
            },
            ".Mui-selected": {
              fontWeight: "bold", // Make the selected tab bold
            },
          }}
        >
          <Tab wrapped label="View All" />
          <Tab label="Web" />
          <Tab label="App" />
          <Tab label="Graphic" />
        </Tabs>

        {/* Error handling whether it is an error or data is pending */}
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}

        <Container>
          <Grid container spacing={3} sx={{ marginTop: "24px" }}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <ProjectCards project={project} handleDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default ProjectList;
