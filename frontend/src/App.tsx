import Router from "./router/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { PAGES_ROUTES } from "./router/routes.const";
import { Box, Toolbar } from "@mui/material";
import Styles from "./App.style";
import SideDrawer from "./components/sideDrawer/sideDrawer";
import AppHeader from "./components/appHeader/appHeader.";
import useToggle from "./hooks/useToggle";

const App = () => {
  const {
    open: mobileDrawerOpen,
    handleClose: handleMobileDrawerClose,
    handleOpen: handleMobileDrawerOpen,
  } = useToggle(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={Styles.rootLayout}>
        <AppHeader handleMobileDrawerOpen={handleMobileDrawerOpen}></AppHeader>

        <SideDrawer
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerClose={handleMobileDrawerClose}
        />
        <Box component="main" sx={Styles.contentArea}>
          <Toolbar />
          <Router routes={PAGES_ROUTES} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
