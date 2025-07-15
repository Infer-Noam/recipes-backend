import { Chef } from "@shared/types/chef.type"

export type CreateChefReq = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type CreateChefRes = {
  data: Chef
};

