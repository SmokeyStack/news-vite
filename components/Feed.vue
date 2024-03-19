<script>
    export default {
        data: () => ({
            tab: 'option-1',
            feed: '1',
            feedName: '',
            feedUrl: ''
        }),

        methods: {
            sub: function (event) {
                if (this.feedName == '' || this.feedUrl == '') {
                    event.preventDefault();
                } else {
                    const cookie = useCookie('counter');

                    if (cookie.value == undefined) {
                        cookie.value = [];
                    }

                    cookie.value = test(
                        this.feedName,
                        this.feedUrl,
                        cookie.value
                    );

                    window.location.reload();
                }
            },
            remove: function (event) {
                if (this.feedName == '') {
                    event.preventDefault();
                } else {
                    const cookie = useCookie('counter');

                    for (let a = 0; a < cookie.value.length; a++)
                        if (cookie.value[a].title == this.feedName)
                            cookie.value.splice(a, 1);

                    window.location.reload();
                }
            }
        }
    };
</script>
<script setup>
    const data = useCookie('counter');
    const { data: posts } = await useFetch('/api/rss', {
        query: {
            data: data.value || []
        }
    });
</script>

<template>
    <v-container fluid
        ><v-row>
            <v-col cols="2">
                <v-form>
                    <v-text-field
                        v-model="feedName"
                        label="Feed Name"></v-text-field>
                    <v-text-field
                        v-model="feedUrl"
                        label="Feed Url"></v-text-field>
                    <v-btn @click="sub">Add Feed</v-btn>
                    <v-btn @click="remove">Remove Feed</v-btn>
                </v-form>
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
                                <v-virtual-scroll
                                    :items="posts[x - 1].content"
                                    max-height="90vh">
                                    <template v-slot:default="{ item }">
                                        <v-tabs
                                            v-model="feed"
                                            direction="vertical">
                                            <v-tab :value="item.title">
                                                {{ item.title }}
                                            </v-tab>
                                        </v-tabs>
                                    </template>
                                </v-virtual-scroll>
                            </v-col>
                            <v-col>
                                <v-window v-model="feed">
                                    <template
                                        v-for="y in posts[x - 1].content
                                            .length">
                                        <v-window-item
                                            :value="
                                                posts[x - 1].content[y - 1]
                                                    .title
                                            ">
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
