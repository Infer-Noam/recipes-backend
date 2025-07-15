import { Chef } from "../../types/chef.type";

export type GetAllChefReq = {
  uuid: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  deleteDate: Date;
  createDate: Date;
}[];

export type GetAllChefRes = {
  chefs: Chef[];
};
