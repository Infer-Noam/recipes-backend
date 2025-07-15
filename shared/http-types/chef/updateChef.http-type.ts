import { Chef } from "@shared/types/chef.type";

export type UpdateChefReq = {
  uuid: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type UpdateChefRes = {
  data: Chef;
};
