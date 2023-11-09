<script>
    export default {
        data: () => ({
            tab: 'option-1',
            feed: '1',
            length: 10,
            feedName: '',
            feedUrl: ''
        }),

        methods: {
            sub: function (event) {
                console.log('Yay');
                if (this.feedName == '' || this.feedUrl == '') {
                    console.log('User and Password is required.');
                    event.preventDefault();
                } else {
                    useFetch('/api/saveconfig', {
                        query: {
                            name: this.feedName,
                            url: this.feedUrl
                        }
                    });
                }
            }
        }
    };
</script>
<script setup>
    const { data: posts } = await useFetch('/api/rss');
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2">
                <v-form v-on:submit="sub" action="#" method="post">
                    <v-text-field
                        v-model="feedName"
                        label="Feed Name"></v-text-field>
                    <v-text-field
                        v-model="feedUrl"
                        label="Feed Url"></v-text-field>
                    <v-btn type="submit">Let's go</v-btn>
                </v-form>
                <v-tabs v-model="tab" direction="vertical">
                    <v-tab v-for="x in posts.length" :value="'option-' + x">
                        <v-icon start> mdi-account </v-icon>
                        {{ posts[x - 1].title }}
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col cols="10">
                <v-btn
                    :loading="loading"
                    class="flex-grow-1"
                    height="32"
                    variant="tonal"
                    @click="length += 10"
                    align>
                    Expand list
                </v-btn>
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
