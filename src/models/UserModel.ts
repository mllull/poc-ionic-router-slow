import { Model } from "pinia-orm";
import { Str } from "pinia-orm/dist/decorators";
import { Uid } from "pinia-orm/dist/uuid/v1";

export default class UserModel extends Model {
  static entity = "users";

  @Uid() declare id: string;

  @Str("")
  declare name: string;

  @Str("")
  declare email: string;
}
