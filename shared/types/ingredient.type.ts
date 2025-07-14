export type CreateIngredientReq = {
  name: string;
};

export type CreateIngredientRes = {
  name: string,
  uuid: string,
  deleteDate: Date,
  createDate: Date,
};
