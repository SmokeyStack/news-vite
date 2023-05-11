<script setup>
    // const { data: articles } = await useFetch('/api/rss', {
    //     query: { param1: "https://thespawnchunks.com/feed/podcast/'" }
    // });
    const { pending, data: posts } = await useLazyFetch('/api/rss', {
        query: { param1: "https://thespawnchunks.com/feed/podcast/'" }
    });
    watch(posts, (newPosts) => {
        // Because posts might start out null, you won't have access
        // to its contents immediately, but you can watch it.
    });
</script>

<template>
    <div v-if="pending">Loading ...</div>
    <div v-else>
        <v-expansion-panels v-for="(article, index) in posts" :key="article.id">
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
    <!-- <div>
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
    </div> -->
</template>
