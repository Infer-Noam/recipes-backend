import { Chef } from "../../types/chef.type"

export type CreateChefReq = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type CreateChefRes = {
  chef: Chef
};

