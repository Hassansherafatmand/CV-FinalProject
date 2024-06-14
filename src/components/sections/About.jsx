import { Container, Typography, useMediaQuery } from "@mui/material";
import Link from "@mui/material/Link";

// ****************|Styles|**********************
import { createTheme } from "@mui/material/styles";
//Created some custome style
const theme = createTheme({
  components: {
    Container: {
      sx: {
        padding: "4rem",
      },
    },
  },
});

// ************************|About page|****************************
const About = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      sx={{
        flexWrap: isSmallScreen ? "wrap" : "nowrap",
        textAlign: "justify",
        lineHeight: "2.5rem",
        fontSize: isSmallScreen ? "1.1rem" : "1.3rem",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        sx={{ display: "block", marginBottom: "40px" }}
      >
        About me
      </Typography>

      <Typography variant="body" gutterBottom color="textSecondary">
        A passionate designer and developer from Poulsbo, WA, I bridge the gap
        between beautiful design and robust functionality. My expertise spans
        languages like C++ and React.js, allowing me to tackle projects across
        mobile apps, websites, and interactive experiences. Whether you're a
        startup, business, or agency, I'm here to collaborate and bring your
        digital vision to life.
      </Typography>
      <Container></Container>
      <Typography
        variant="body"
        component="span"
        gutterBottom
        color="textSecondary"
        sx={{ marginTop: "24px", display: "block" }}
      >
        If you want me to help you with your Website design, App design (mobile
        or MacOS), React.js development, or Framer website, feel free to
        {
          <Link
            href={`mailto:hs.sherafatmand@gmail.com?subject=Inquiry from Website`}
            underline="hover"
            sx={{ color: "#FF3939" }}
          >
            {" send me an email"}
          </Link>
        }
        .
      </Typography>
    </Container>
  );
};
export default About;
