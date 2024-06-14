import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  AddCircleOutline,
  SubjectOutlined,
  MenuOpen as MenuOpenIcon,
  AddHomeOutlined,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// Import the theme object from your Them.jsx file

/*************************| Styling |*******************************/
// Styling for the drawer and its components
const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  marginRight: "12px",
}));

const CustomDrawer = styled(({ miniVariant, ...other }) => (
  <Drawer {...other} />
))(({ miniVariant }) => ({
  width: miniVariant ? 64 : drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: miniVariant ? 64 : drawerWidth,
    boxSizing: "border-box",
    background: "#323232",
  },
}));

// Styling the button in the drawer (color, background, etc)
const ActiveListItem = styled(ListItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.action.selected,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.text.dark, // Dark text color when selected
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.text.dark, // Dark text color on hover
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.text.dark, // Dark text color for ListItemIcon on hover
    },
  },
}));

/*************************| Pasge Layout |*******************************/
const Layout = ({ children }) => {
  const theme = useTheme(); // Access the current theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Check if screen is small using MUI's responsive breakpoints, and also hook for navigation and getting the current location
  const navigate = useNavigate();
  const location = useLocation();

  // Check if screen width is below 640px, it shrinks the page atuomatically
  const isMobile = useMediaQuery("(max-width:640px)");

  // State for controlling mini variant of the drawer
  const [miniVariant, setMiniVariant] = useState(false);

  // Automatically set miniVariant based on screen size
  useEffect(() => {
    setMiniVariant(isMobile);
  }, [isMobile]);

  // Menu items with their respective icons and paths
  const menuItems = [
    {
      text: "Home",
      icon: <AddHomeOutlined color="primary" />,
      path: "/",
    },
    {
      text: "My Projects",
      icon: <SubjectOutlined color="primary" />,
      path: "/projects",
    },
    {
      text: "Create Project",
      icon: <AddCircleOutline color="primary" />,
      path: "/create",
    },
  ];

  // Function to toggle mini variant of the drawer
  const toggleMiniVariant = () => {
    setMiniVariant(!miniVariant);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background: theme.palette.background.default,
      }}
    >
      {/* Custom styled drawer */}
      <CustomDrawer variant="permanent" anchor="left" miniVariant={miniVariant}>
        {/* Drawer header with toggle icon */}
        <DrawerHeader>
          <MenuOpenIcon
            color="primary"
            onClick={toggleMiniVariant}
            sx={{
              cursor: "pointer",
              alignItems: isMobile ? "center" : "flex-end",
            }}
          />
        </DrawerHeader>

        {/* List of navigation items */}
        <List>
          {menuItems.map((item) => (
            <ActiveListItem
              button
              key={item.text}
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ActiveListItem>
          ))}
        </List>
      </CustomDrawer>
      {/* Render the main content */}
      {children}
    </Box>
  );
};

export default Layout;
