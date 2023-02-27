import { Podcast, Audio } from "@/models";
import getPodcastFromFeed from "podparse";

export const fetchPodcast = async (url: string) => {
  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const decoder = new TextDecoder("iso-8859-1");
      const text = decoder.decode(buffer);
      return text;
    })
    .then(async (text) => {
      const podcast_data = await getPodcastFromFeed(text);
      if (podcast_data.meta) {
        const meta = podcast_data.meta;
        const podcast = Podcast.save({
          id: Podcast.all().length + 1,
          title: meta.title,
          description: meta.description,
          language: meta.language,
          image_url: meta.image.url,
        });

        for (let index = 0; index < 4; index++) {
          podcast_data.episodes.forEach((episode) => {
            Audio.save({
              title: episode.title,
              description: episode.description,
              podcast_id: podcast.id,
              pubDate: episode.pubDate,
              audio_url: episode.enclosure.url,
              duration: episode.duration,
              image_url: episode.image?.url,
            });
          });
        }
      }
    });
};
