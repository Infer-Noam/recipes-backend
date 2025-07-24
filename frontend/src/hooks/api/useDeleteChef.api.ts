import api from "../../api";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { USE_GET_CHEFS_KEY } from "./useGetChefs.api";
import type {
  DeleteChefReq,
} from "../../../../shared/http-types/chef/deleteChef.http-type";

export const useDeleteChef = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (uuid: string) => {
      const data: DeleteChefReq = { uuid };
      return api.delete("/chef", { data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_CHEFS_KEY] });
    },
  });
};
