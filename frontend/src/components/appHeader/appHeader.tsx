import { type FC, useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Styles from "./appHeader.style";
import { ColorModeContext } from "../../contexts/ColorMode.context";

type AppHeaderProps = {
  handleMobileDrawerOpen: () => void;
};

const AppHeader: FC<AppHeaderProps> = ({
  handleMobileDrawerOpen,
}: AppHeaderProps) => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

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

        <Box component="img" src="/logo.svg" alt="App Logo" sx={Styles.logo} />
        <Typography sx={Styles.typography} variant="h6" noWrap component="div">
          Recipes
        </Typography>

        <Box sx={Styles.spacer} />

        <IconButton color="inherit" onClick={toggleColorMode}>
          {colorMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
