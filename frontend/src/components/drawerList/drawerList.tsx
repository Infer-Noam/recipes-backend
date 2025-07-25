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

type DrawerListProps = {
  toggleDrawer: (open: boolean) => void;
};

export const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={Styles.container}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {drawerListItems.map(({ name, path, icon: ItemIcon }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>
                <ItemIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
