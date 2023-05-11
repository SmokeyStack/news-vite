<script setup>
    const { data: articles } = await useFetch('/api/rss', {
        query: { param1: "https://thespawnchunks.com/feed/podcast/'" }
    });
</script>

<template>
    <div>
        <v-expansion-panels
            v-for="(article, index) in articles"
            :key="article.id">
            <v-expansion-panel>
                <v-expansion-panel-title
                    >{{ index + 1 }}.
                    {{ article.title }}</v-expansion-panel-title
                >
                <v-expansion-panel-text>{{
                    article.content
                }}</v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>
