import { useRepo } from "pinia-orm";
import UserModel from "./UserModel";
import PodcastModel from "./PodcastModel";
import AudioModel from "./AudioModel";

export const User = useRepo(UserModel);
export const Podcast = useRepo(PodcastModel);
export const Audio = useRepo(AudioModel);
