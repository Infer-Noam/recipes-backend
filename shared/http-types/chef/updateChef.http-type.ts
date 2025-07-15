import { Chef } from "../../types/chef.type";

export type UpdateChefReq = {
  uuid: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type UpdateChefRes = {
  chef: Chef;
};
