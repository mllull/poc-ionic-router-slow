<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { onMounted } from "vue";
import { fetchPodcast } from "./utils";

onMounted(() => {
  fetchPodcast(
    "https://dinamics.ccma.cat/public/podcast/catradio/xml/9/5/podprograma1859.xml"
  );
  // fetchPodcast("https://feeds.simplecast.com/wHqls8d1");

  // fetchPodcast(
  //   "https://dinamics.ccma.cat/public/podcast/catradio/xml/2/4/podprograma1842.xml"
  // );
});
</script>
