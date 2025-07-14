export type IngredientReq = {
  name: string;
};

export type IngredientRes = {
  name: string,
  uuid: string,
  deleteDate: Date,
  createDate: Date,
};
