import Router from "./router/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { PAGES_ROUTES } from "./router/routes.const";
import { Drawer, Box } from "@mui/material";
import { useState } from "react";
import { DrawerList } from "./components/drawerList/drawerList";
import Styles from "./App.style";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={Styles.appContainer}>
        <Drawer
          sx={Styles.drawer}
          variant="persistent"
          open={open}
          onClose={() => setOpen(false)}
        >
          <DrawerList toggleDrawer={() => setOpen(open)} />
        </Drawer>

        <Box component="main" sx={Styles.mainContainer}>
          <Router routes={PAGES_ROUTES} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
