<script setup>
const { data: articles } = await useFetch("/api/rss", {
  query: { param1: "https://thespawnchunks.com/feed/podcast/'" },
});
</script>

<template>
  <ul>
    <li v-for="(article, index) in articles" :key="article.id">
      <div>
        <p>{{ index + 1 }}. {{ article }}</p>
      </div>
    </li>
  </ul>
</template>