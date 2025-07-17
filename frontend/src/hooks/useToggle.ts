import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [open, setOpen] = useState(defaultValue);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return { open, toggle, handleClose, handleOpen };
};

export default useToggle;
