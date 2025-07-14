import { Chef } from "../chef/chef.entity";

const createChef = async (
  firstName: string,
  lastName: string,
  phone: string,
  email: string
) => {
  const chef = Chef.create({ firstName, lastName, phone, email });

  await chef.save();
  return chef;
};

export default { createChef };
