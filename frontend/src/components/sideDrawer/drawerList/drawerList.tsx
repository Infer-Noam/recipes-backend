import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { drawerListItems } from "../drawerList/drawerListItem/drawerListItems.const";
import Styles from "./drawerList.style";

type DrawerListProps = {
  navigate: (path: string) => void;
};

export const DrawerList: React.FC<DrawerListProps> = ({ navigate }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Box sx={Styles.container} role="presentation">
      <List>
        {drawerListItems.map(({ name, path, icon: ItemIcon }, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              sx={Styles.listItem}
              onClick={() => {
                setSelectedIndex(index);
                navigate(path);
              }}
              selected={index === selectedIndex}
            >
              <ListItemIcon>
                <ItemIcon></ItemIcon>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
