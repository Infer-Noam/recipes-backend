import { Chef as ChefEntity } from "../chef/chef.entity";
import { Chef } from "@shared/types/chef.type";

export function toChef(entity: ChefEntity): Chef {
  const chef: Chef = {
    uuid: entity.uuid,
    firstName: entity.firstName,
    lastName: entity.lastName,
    phone: entity.phone,
    email: entity.email,
    deleteDate: entity.deleteDate,
    createDate: entity.createDate,
  };
  return chef;
}
