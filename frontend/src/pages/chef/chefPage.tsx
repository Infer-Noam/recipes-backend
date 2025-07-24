import { Box, Typography } from "@mui/material";
import { useDeleteChef } from "../../hooks/api/useDeleteChef.api";
import { useGetChefs } from "../../hooks/api/useGetChefs.api";
import { useSaveChef } from "../../hooks/api/useSaveChef.api";
import ChefTable from "../../components/chefTable/chefTable";

const ChefPage = () => {
  const { data: chefs } = useGetChefs();
  const { mutate: deleteChef } = useDeleteChef();
  const { mutateAsync: saveChef } = useSaveChef();

  if (chefs) {
    return (
      <ChefTable chefs={chefs} deleteChef={deleteChef} saveChef={saveChef} />
    );
  } else return null;
};

export default ChefPage;
