import { Chef } from "../../types/chef.type";
import { UuidReq } from "../generic/uuidReq.https-types";

export type GetChefbyUuidReq = UuidReq;

export type GetChefbyUuidRes = {
  chef: Chef;
};
