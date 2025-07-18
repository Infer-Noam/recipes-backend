import { type FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Styles from "./appHeader.style";

type AppHeaderProps = {
  handleMobileDrawerOpen: () => void;
};

const AppHeader: FC<AppHeaderProps> = ({
  handleMobileDrawerOpen,
}: AppHeaderProps) => {
  return (
    <AppBar sx={Styles.appHeader} position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleMobileDrawerOpen()}
          edge="start"
          sx={Styles.menuIconButton}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          Recipes!!!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
