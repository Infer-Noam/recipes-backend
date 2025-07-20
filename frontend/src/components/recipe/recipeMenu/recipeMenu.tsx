import * as React from "react";
import { Menu, ListItemText, ListItemIcon } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Styles from "./recipeMenu.style";

type RecipeMenuProps = {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  onDelete: () => void;
  onEdit: () => void;
  onView: () => void;
};

export const RecipeMenu: React.FC<RecipeMenuProps> = ({
  open,
  onClose,
  anchorEl,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <Menu
      sx={Styles.menu}
      slotProps={{
        list: {
          "aria-labelledby": "demo-customized-button",
        },
      }}
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
    >
      <MenuItem
        onClick={() => {
          onView();
          close();
        }}
        disableRipple
      >
        <ListItemIcon>
          <FullscreenIcon />
        </ListItemIcon>
        <ListItemText>View</ListItemText>
      </MenuItem>

      <MenuItem
        onClick={() => {
          onEdit();
          close();
        }}
        disableRipple
      >
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={() => {
          onDelete();
          close();
        }}
        disableRipple
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </Menu>
  );
};
