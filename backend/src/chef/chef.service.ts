import { Chef } from "../chef/chef.entity";
import { AppDataSource } from "../data-source";
import { mappedChef } from "./chef.mapper";

const chefRepository = AppDataSource.getRepository(Chef);

const createChef = async (
  firstName: string,
  lastName: string,
  phone: string,
  email: string
) => {
  const chef = await chefRepository.save({ firstName, lastName, phone, email });
  return mappedChef(chef);
};

const updateChef = async (
  uuid: string,
  firstName: string,
  lastName: string,
  phone: string,
  email: string
) => {
  const chef = await chefRepository.save({
    uuid,
    firstName,
    lastName,
    phone,
    email,
  });
  return mappedChef(chef);
};

export default { createChef, updateChef };
