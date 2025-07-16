import { Chef as ChefEntity } from "../chef/chef.entity";
import { Chef } from "@shared/types/chef.type";

export const mappedChef: (entity: ChefEntity) => Chef = (entity) => entity;
