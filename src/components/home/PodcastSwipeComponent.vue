<template>
  <swiper :slides-per-view="2" :space-between="5">
    <swiper-slide v-for="podcast in podcasts" :key="podcast.id">
      <PodcastCardSwpieComponent
        :img-src="podcast.image_url"
        :title="podcast.title"
        :podcast-id="podcast.id"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import PodcastCardSwpieComponent from "./PodcastCardSwpieComponent.vue";
import { Podcast } from "@/models";
import { computed } from "vue";

const podcasts = computed(() => Podcast.all());
</script>
