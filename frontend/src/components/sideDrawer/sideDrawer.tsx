import { type FC } from "react";
import { Drawer, IconButton, Toolbar, Divider } from "@mui/material";
import { DrawerList } from "./drawerList/drawerList";
import Styles, { DrawerHeader } from "./sideDrawer.style";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

type SideDrawerProps = {
  mobileDrawerOpen: boolean;
  handleMobileDrawerClose: () => void;
};

const SideDrawer: FC<SideDrawerProps> = ({
  mobileDrawerOpen,
  handleMobileDrawerClose,
}: SideDrawerProps) => {
  const navigate = useNavigate();

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
        <DrawerList navigate={(p) => navigate(p)} />
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
        <DrawerList
          navigate={(p) => {
            navigate(p);
            handleMobileDrawerClose();
          }}
        />
      </Drawer>
    </>
  );
};

export default SideDrawer;
