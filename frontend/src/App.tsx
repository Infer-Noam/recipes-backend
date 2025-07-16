import Router from "./router/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { PAGES_ROUTES } from "./router/routes.const";
import { Drawer, Box } from "@mui/material";
import { useState } from "react";
import { DrawerList } from "./components/drawerList/drawerList";

const drawerWidth = 255;

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          open={open}
          onClose={() => setOpen(false)}
        >
          <DrawerList toggleDrawer={() => setOpen(open)} />
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Router routes={PAGES_ROUTES} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
