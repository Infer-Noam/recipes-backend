import { Chef } from "../../types/chef.type";

export type GetChefbyUuidReq = {
  uuid: string;
};

export type GetChefbyUuidRes = {
  data: {
    chef: Chef;
  };
};
