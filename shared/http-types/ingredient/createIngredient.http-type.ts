export type CreateIngredientReq = {
  name: string;
};

export type CreateIngredientRes = {
  data: {
    name: string;
    uuid: string;
    deleteDate: Date;
    createDate: Date;
  };
};
