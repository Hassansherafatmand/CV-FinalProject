import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { DeleteOutline } from "@mui/icons-material";
import { Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

/*************************| Project Cards Page|*******************************/
const ProjectCards = ({ project, handleDelete }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#F04848", color: "#242424" }}>
            {project.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(project.id)}>
            <DeleteOutline
              color="#CBCBCB"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#F04848",
                  fontSize: 30,
                },
              }}
            />
          </IconButton>
        }
        title={project.title}
        subheader={project.currentDate}
      />
      <CardContent>
        <CardMedia
          component="img"
          height="160"
          image={project.imageUrl}
          alt={project.title}
          sx={{ marginBottom: "20px" }}
        />
        <Typography variant="body2" color="textSecondary">
          {project.details}
        </Typography>
        <Button
          // Use Link component
          component={Link}
          // Link to DisplayProject page with project ID
          to={`/displayProject/${project.id}`}
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          size="small"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCards;
