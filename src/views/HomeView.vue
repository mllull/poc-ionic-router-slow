<template>
  <ion-page>
    <ion-header mode="ios" :translucent="true">
      <ion-toolbar>
        <ion-title>PoC</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">PoC</ion-title>
        </ion-toolbar>
      </ion-header>

      <h5 class="ms-5 text-bold">Top Podcasts</h5>
      <PodcastSwipeComponent />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PodcastSwipeComponent from "@/components/home/PodcastSwipeComponent.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
</script>

<style></style>
