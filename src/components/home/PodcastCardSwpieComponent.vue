<template>
  <ion-card
    :router-link="{
      name: 'PodcastView',
      params: { podcast_id: props.podcastId },
    }"
  >
    <img :alt="title" :src="imgSrc" />

    <ion-card-content class="text-4 text-center font-bold text-white p-1">
      {{ title }}
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCardContent, IonCard } from "@ionic/vue";
import type { PropType } from "vue";

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  podcastId: {
    type: Number as PropType<string | number>,
    required: true,
  },
});
</script>
