import { type FC } from "react";
import { Drawer, IconButton, Toolbar, Divider } from "@mui/material";
import { DrawerList } from "./drawerList/drawerList";
import Styles, { DrawerHeader } from "./sideDrawer.style";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type SideDrawerProps = {
  mobileDrawerOpen: boolean;
  handleMobileDrawerClose: () => void;
};

const SideDrawer: FC<SideDrawerProps> = ({
  mobileDrawerOpen,
  handleMobileDrawerClose,
}: SideDrawerProps) => {
  return (
    <>
      <Drawer
        sx={Styles.permanentDrawer}
        variant="permanent"
        slotProps={{
          paper: {
            sx: Styles.permenentDrawerPaper,
            elevation: 3,
          },
        }}
      >
        <Toolbar />
        <DrawerList />
      </Drawer>

      <Drawer
        sx={Styles.temporaryDrawer}
        variant="temporary"
        open={mobileDrawerOpen}
        onClose={() => handleMobileDrawerClose()}
        slotProps={{
          root: {
            keepMounted: true,
          },
          paper: {
            sx: Styles.temporaryDrawerPaper,
            elevation: 3,
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleMobileDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerList />
      </Drawer>
    </>
  );
};

export default SideDrawer;
