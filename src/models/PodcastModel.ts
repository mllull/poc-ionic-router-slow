// Post Model

import { Model } from "pinia-orm";
import {
  BelongsTo,
  Bool,
  Str,
  Num,
  Attr,
  HasMany,
} from "pinia-orm/dist/decorators";
import { Uid } from "pinia-orm/dist/uuid/v1";

import UserModel from "./UserModel";
import AudioModel from "./AudioModel";

export default class PodcastModel extends Model {
  static entity = "podcasts";

  @Uid() declare id: string;

  @Num(null)
  declare user_id: number | null;

  @Str("")
  declare title: string;

  @Str("")
  declare description: string;

  @Str("")
  declare language: string;

  @Str("")
  declare image_url: string;

  @Bool(false)
  declare published: boolean;

  @BelongsTo(() => UserModel, "user_id")
  declare author: UserModel | null;

  @HasMany(() => AudioModel, "podcast_id")
  declare audios: AudioModel[];
}
