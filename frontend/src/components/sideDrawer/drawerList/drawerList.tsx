import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { drawerListItems } from "../drawerList/drawerListItem/drawerListItems.const";
import { useNavigate } from "react-router-dom";
import Styles from "./drawerList.style";

export const DrawerList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={Styles.container}
      role="presentation"
    >
      <List>
        {drawerListItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
