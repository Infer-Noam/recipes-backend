import { type GetAllChefsRes } from "../../../../shared/http-types/chef/getAllChefs.http-type";
import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export const USE_GET_CHEFS_KEY = "useGetChefsKey";

export const useGetChefs = () => {
  return useQuery({
    queryKey: [USE_GET_CHEFS_KEY],
    queryFn: () =>
      api.get<GetAllChefsRes>("/chef").then((response) => response.data.chefs),
  });
};
