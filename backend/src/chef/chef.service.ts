import { Chef } from "../chef/chef.entity";
import { AppDataSource } from "../data-source";

const repo = AppDataSource.getRepository(Chef);

const createChef = async (
  firstName: string,
  lastName: string,
  phone: string,
  email: string
) => {
  const chef = await repo.save({ firstName, lastName, phone, email });
  return chef;
};

const updateChef = async (
  uuid: string,
  firstName: string,
  lastName: string,
  phone: string,
  email: string
) => {
  await repo.update({ uuid: uuid }, { firstName, lastName, phone, email });
};

export default { createChef, updateChef };
