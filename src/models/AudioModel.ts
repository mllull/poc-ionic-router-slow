// Post Model

import { Model } from "pinia-orm";
import { BelongsTo, Bool, Str, Num, Attr } from "pinia-orm/dist/decorators";
import UserModel from "./UserModel";
import { Uid } from "pinia-orm/dist/uuid/v1";
import PodcastModel from "./PodcastModel";

export default class AudioModel extends Model {
  static entity = "audios";

  @Uid() declare id: string;

  @Num(null)
  declare user_id: number | null;

  @Str("")
  declare title: string;

  @Str("")
  declare description: string;

  @Attr()
  declare podcast_id: number;

  @Str("")
  declare audio_url: string;

  @Str("")
  declare language: string;

  @Str("")
  declare pubDate: string;

  @Num(null)
  declare duration: number;

  @Str("")
  declare image_url: string;

  @Bool(false)
  declare published: boolean;

  @BelongsTo(() => UserModel, "user_id")
  declare author: UserModel | null;

  @BelongsTo(() => PodcastModel, "podcast_id")
  declare podcast: PodcastModel | null;
}
