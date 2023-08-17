import { JsonValue } from "type-fest";

export type Productimage = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  singletone: boolean;
  updatedAt: Date;
};
