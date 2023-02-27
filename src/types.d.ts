type PodcastMetaType = {
  title: string;
  description: string;
  language: string;
  author: string;
  summary: string;
  type: string;
  generator: string;
  category: string[];
  owner: { name: string; email: string };
  image: {
    url: string;
  };
  lastBuildDate: string;
  pubDate: string;
  link: string;
  links: string[];
};

type PodcastEpisodesType = {
  title: string;
  description: string;
  subtitle: string;
  author: string;
  summary: string;
  episodeType: string;
  guid: string;
  image: {
    url: string;
  };
  explicit: boolean;
  duration: number;
  enclosure: {
    url: string;
    length: number;
    type: string;
  };
  lastBuildDate: string;
  pubDate: string;
  link: string;
};
