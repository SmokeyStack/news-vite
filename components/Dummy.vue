<script setup>
    const { pending, data: posts } = await useLazyFetch('/api/rss', {
        query: { param1: "https://thespawnchunks.com/feed/podcast/'" }
    });
    watch(posts, (newPosts) => {
        // Because posts might start out null, you won't have access
        // to its contents immediately, but you can watch it.
    });
</script>

<template>
    <v-expansion-panels v-for="(article, index) in posts">
        <v-expansion-panel v-if="index < 20 && index > 9">
            <v-expansion-panel-title
                >{{ index + 1 }}. {{ article.title }}</v-expansion-panel-title
            >
            <v-expansion-panel-text>{{
                article.content
            }}</v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
