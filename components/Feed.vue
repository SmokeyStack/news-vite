<script>
    export default {
        data: () => ({
            tab: 'option-1',
            feed: '1',
            length: 10
        })
    };
</script>
<script setup>
    const { data: posts } = await useFetch('/api/rss');
</script>

<template>
    <v-btn
        :loading="loading"
        class="flex-grow-1"
        height="48"
        variant="tonal"
        @click="length += 10">
        Take Checkup
    </v-btn>
    <v-container fluid>
        <v-row>
            <v-col cols="2">
                <v-tabs v-model="tab" direction="vertical">
                    <v-tab v-for="x in posts.length" :value="'option-' + x">
                        <v-icon start> mdi-account </v-icon>
                        {{ posts[x - 1].title }}
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col cols="10">
                <v-window v-model="tab"
                    ><v-window-item
                        v-for="x in posts.length"
                        :value="'option-' + x">
                        <v-row>
                            <v-col>
                                <v-tabs v-model="feed" direction="vertical">
                                    <template
                                        v-for="y in posts[x - 1].content
                                            .length">
                                        <v-tab v-if="y - 1 < length" :value="y">
                                            {{
                                                posts[x - 1].content[y - 1]
                                                    .title
                                            }}
                                            -
                                            {{ y }}
                                        </v-tab>
                                    </template>
                                </v-tabs>
                            </v-col>
                            <v-col>
                                <v-window v-model="feed">
                                    <template
                                        v-for="y in posts[x - 1].content
                                            .length">
                                        <v-window-item
                                            v-if="y - 1 < length"
                                            :value="y">
                                            <v-card flat>
                                                <v-card-text>
                                                    {{
                                                        posts[x - 1].content[
                                                            y - 1
                                                        ].content
                                                    }}
                                                    -
                                                    <a
                                                        v-bind:href="
                                                            posts[x - 1]
                                                                .content[y - 1]
                                                                .url
                                                        ">
                                                        {{
                                                            posts[x - 1]
                                                                .content[y - 1]
                                                                .url
                                                        }}</a
                                                    >
                                                </v-card-text>
                                            </v-card>
                                        </v-window-item>
                                    </template>
                                </v-window>
                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
</template>
