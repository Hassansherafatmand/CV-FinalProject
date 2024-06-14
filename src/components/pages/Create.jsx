import { Container, Typography, Button, TextField, Box } from "@mui/material";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("front-end");
  const [imageUrl, setImageUrl] = useState("");

  //Get the Current date to display it in each card
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  //Error handling
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //rest the error values
    setTitleError(false);
    setDetailsError(false);
    setImageError(false);

    // check for errror
    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }
    if (imageUrl == "") {
      setImageError(true);
    }

    //This if statement says when we have an input in our form (title and details)
    if (title && details) {
      // send post request to add data to db.json every time that we submit the form
      fetch("http://localhost:8000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
          currentDate,
          imageUrl,
        }),
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container size="sm">
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          lineHeight: "4rem",
          margin: "32px 0 0 0",
        }}
        color="textSecondary"
        gutterBottom
      >
        Create a New Project
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        gutterBottom
        sx={{
          marginBottom: "20px",
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: "2.5rem",
          fontSize: "1.2rem",
        }}
      >
        Fill out the form below to create a new project. Provide the title,
        description, category, and an optional image URL. After submission, your
        project will appear on the projects page.
      </Typography>

      {/************************* Form ************************/}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {/* Title */}
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          margin="normal"
          error={titleError}
        />

        {/* Details */}
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          error={detailsError}
        ></TextField>

        {/* Image URL */}
        <TextField
          onChange={(e) => setImageUrl(e.target.value)} // Handle image URL input
          label="Image URL"
          variant="outlined"
          color="primary"
          fullWidth
          margin="normal"
          error={imageError}
        />
        <Box
          sx={{
            marginBottom: "20px",
          }}
        >
          <FormControl sx={{ margin: "16px 0", padding: "8px 0" }}>
            <FormLabel
              sx={{ padding: "16px 0", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Work Experiences
            </FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="web-design"
                control={<Radio />}
                label="Web Design"
              />
              <FormControlLabel
                value="app-design"
                control={<Radio />}
                label="App Design"
              />
              <FormControlLabel
                value="graphic-design"
                control={<Radio />}
                label="Graphic Design"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
