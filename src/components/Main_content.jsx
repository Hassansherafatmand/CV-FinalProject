import React from "react";
import { Grid, Box, Button } from "@mui/material";
import SectionHero from "./sections/SectionHero";
import ProjectLists from "./sections/ProjectLists";
import About from "./sections/About";
import SlideShow from "./sections/SlidShow";
import IntroProjects from "./sections/IntroProjects";
import CTApage from "./sections/CTApage";

/*************************| Main Content Page|*******************************/
const Main_content = () => {
  return (
    //Used Grid system to make the page responsive
    <Box>
      {/* Section- Hero page */}
      <SectionHero />

      {/* Slidshow page */}
      <SlideShow />
      {/* All the sections here I wanted to be diffrent in viewport like(about, intoduction to project, project list and CTA page)  */}
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* About */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 32px",
          }}
        >
          <About />
        </Grid>
        {/* Intordunc To Projects */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 32px",
          }}
        >
          <IntroProjects />
        </Grid>

        {/* Project Lists */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 32px",
          }}
        >
          <ProjectLists />
        </Grid>

        {/* Call to Action page*/}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 32px",
          }}
        >
          <CTApage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main_content;
