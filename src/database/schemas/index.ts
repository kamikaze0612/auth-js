import * as account from "./account";
import * as user from "./user";

export const schema = {
  ...user,
  ...account,
};

export type Schema = typeof schema;
