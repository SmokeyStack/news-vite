<script setup>
const { data: articles } = await useFetch("/api/rss", {
  query: { param1: "https://thespawnchunks.com/feed/podcast/'" },
});
</script>

<template>
  <div v-for="(article, index) in articles" :key="article.id">
    <v-card>
      <v-card-title>
        <p>{{ index + 1 }}. {{ article }}</p>
      </v-card-title>
    </v-card>
  </div>
</template>