<template>
  <ion-page>
    <ion-header mode="ios" :translucent="true">
      <ion-toolbar>
        <ion-title>{{ podcast?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" v-if="podcast">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ podcast?.title }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <swiper
        :slides-per-view="1"
        :space-between="5"
        :pagination="true"
        :modules="[Pagination]"
      >
        <swiper-slide>
          <div class="grid grid-cols-1 place-items-center mt-4 mb-4">
            <ion-img
              :src="podcast?.image_url"
              :alt="podcast?.title"
              class="w-40%"
            ></ion-img>
            <span class="font-bold text-6 mt-3">{{ podcast?.title }}</span>
            <span class="text-3">Per: Catalunya Radio</span>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="grid grid-cols-1 place-items-center mt-4 p-10">
            {{ podcast?.description }}
          </div>
        </swiper-slide>
      </swiper>
      <ion-list class="" v-if="podcast">
        <ion-list-header>
          <ion-label>Tots els Episodis ({{ podcast.audios.length }})</ion-label>
          <ion-button>
            <ion-icon slot="icon-only" :icon="filterOutline"></ion-icon>
          </ion-button>
        </ion-list-header>
        <RecycleScroller
          class="scroller"
          :items="podcast.audios"
          :item-size="64"
          key-field="id"
          :buffer="10"
          v-slot="{ item }"
        >
          <ion-item>
            <ion-label>
              <div class="flex">
                <div class="flex-none me-2">
                  <ion-icon
                    :icon="ellipse"
                    color="success"
                    slot="start"
                  ></ion-icon>
                </div>
                <div class="flex-1">
                  <b class="text-ellipsis--2">{{ item.title }}</b>
                  <p class="text-gray-400">
                    {{ formatSecondsToMinutes(item.duration) }} ·
                    {{ formatDate(item.pubDate) }}
                  </p>
                </div>
                <div class="flex-none">
                  <ion-buttons slot="end">
                    <ion-button class="p-0">
                      <ion-icon
                        :icon="ellipsisVerticalOutline"
                        color="primary"
                        slot="icon-only"
                      ></ion-icon>
                    </ion-button>
                  </ion-buttons>
                </div>
              </div>
            </ion-label>
          </ion-item>
        </RecycleScroller>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonImg,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonButtons,
  IonIcon,
  IonListHeader,
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewDidLeave,
} from "@ionic/vue";
import {
  filterOutline,
  ellipse,
  ellipsisVerticalOutline,
} from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { computed, ref, watch } from "vue";
import { formatDate, formatSecondsToMinutes } from "@/utils";
import { useRoute } from "vue-router";
import { Podcast } from "@/models";

const route = useRoute();
const showList = ref(false);

const podcast = computed(() =>
  Podcast.with("audios").find(Number(route.params.podcast_id))
);

onIonViewDidEnter(() => {
  console.log("Entered!");
  showList.value = true;
});
onIonViewDidLeave(() => (showList.value = false));

onIonViewWillEnter(() => {
  console.log("Entering tab!", podcast.value);
});

watch(podcast, (val, prev) => {
  console.log("Podcast change: ", prev, val);
});
</script>

<style scoped lang="scss">
.scroller {
  height: 100%;
}
.swiper-slide {
  padding-bottom: 17px;
}
.sliderWrapper {
  :global(.swiper-pagination-bullet) {
    background: #aaa;
    opacity: 1;
  }

  :global(.swiper-pagination-bullet-active) {
    background-color: white;
  }
}

.text-ellipsis--2 {
  text-overflow: ellipsis;
  overflow: hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.dot {
  height: 25%;
  width: 25%;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.p-0 > button {
  padding: 0;
}
</style>
