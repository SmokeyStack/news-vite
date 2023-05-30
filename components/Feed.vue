<script setup>
    const { data: posts } = await useFetch('/api/rss', {
        query: { param1: "https://thespawnchunks.com/feed/podcast/'" }
    });
</script>

<template>
    <ul>
        <li v-for="(article, index) in posts" :key="article.id">
            <div>
                <p>{{ index + 1 }}. {{ article.title }}</p>
            </div>
        </li>
    </ul>
</template>
