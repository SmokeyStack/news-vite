<script>
    export default {
        data: () => ({
            tab: 'option-1'
        })
    };
</script>
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
    <!-- <v-card> -->
    <!-- <v-toolbar color="primary">
            <v-toolbar-title>User Profile</v-toolbar-title>
        </v-toolbar> -->
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-tabs v-model="tab" direction="vertical">
                    <v-tab value="option-1">
                        <v-icon start> mdi-account </v-icon>
                        Option 1
                    </v-tab>
                    <v-tab value="option-2">
                        <v-icon start> mdi-lock </v-icon>
                        Option 2
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start> mdi-access-point </v-icon>
                        Option 3
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col cols="3">
                <v-window v-model="tab">
                    <v-window-item value="option-1" width="50vh">
                        <v-expansion-panels v-for="(article, index) in posts">
                            <v-expansion-panel v-if="index < 10">
                                <v-expansion-panel-title
                                    >{{ index + 1 }}.
                                    {{ article.title }}</v-expansion-panel-title
                                >
                                <v-expansion-panel-text>{{
                                    article.content
                                }}</v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-window-item>
                    <v-window-item value="option-2">
                        <v-card flat>
                            <v-card-text>
                                <p>
                                    Morbi nec metus. Suspendisse faucibus, nunc
                                    et pellentesque egestas, lacus ante
                                    convallis tellus, vitae iaculis lacus elit
                                    id tortor. Sed mollis, eros et ultrices
                                    tempus, mauris ipsum aliquam libero, non
                                    adipiscing dolor urna a orci. Curabitur
                                    ligula sapien, tincidunt non, euismod vitae,
                                    posuere imperdiet, leo. Nunc sed turpis.
                                </p>

                                <p>
                                    Suspendisse feugiat. Suspendisse faucibus,
                                    nunc et pellentesque egestas, lacus ante
                                    convallis tellus, vitae iaculis lacus elit
                                    id tortor. Proin viverra, ligula sit amet
                                    ultrices semper, ligula arcu tristique
                                    sapien, a accumsan nisi mauris ac eros. In
                                    hac habitasse platea dictumst. Fusce ac
                                    felis sit amet ligula pharetra condimentum.
                                </p>

                                <p>
                                    Sed consequat, leo eget bibendum sodales,
                                    augue velit cursus nunc, quis gravida magna
                                    mi a libero. Nam commodo suscipit quam. In
                                    consectetuer turpis ut velit. Sed cursus
                                    turpis vitae tortor. Aliquam eu nunc.
                                </p>

                                <p>
                                    Etiam ut purus mattis mauris sodales
                                    aliquam. Ut varius tincidunt libero. Aenean
                                    viverra rhoncus pede. Duis leo. Fusce
                                    fermentum odio nec arcu.
                                </p>

                                <p class="mb-0">
                                    Donec venenatis vulputate lorem. Aenean
                                    viverra rhoncus pede. In dui magna, posuere
                                    eget, vestibulum et, tempor auctor, justo.
                                    Fusce commodo aliquam arcu. Suspendisse enim
                                    turpis, dictum sed, iaculis a, condimentum
                                    nec, nisi. Morbi nec metus. Suspendisse
                                    faucibus, nunc et pellentesque egestas,
                                    lacus ante convallis tellus, vitae iaculis
                                    lacus elit id tortor. Sed mollis, eros et
                                    ultrices tempus, mauris ipsum aliquam
                                    libero, non adipiscing dolor urna a orci.
                                    Curabitur ligula sapien, tincidunt non,
                                    euismod vitae, posuere imperdiet, leo. Nunc
                                    sed turpis. Suspendisse feugiat. Suspendisse
                                    faucibus, nunc et pellentesque egestas,
                                    lacus ante convallis tellus, vitae iaculis
                                    lacus elit id tortor. Proin viverra, ligula
                                    sit amet ultrices semper, ligula arcu
                                    tristique sapien, a accumsan nisi mauris ac
                                    eros. In hac habitasse platea dictumst.
                                    Fusce ac felis sit amet ligula pharetra
                                    condimentum. Sed consequat, leo eget
                                    bibendum sodales, augue velit cursus nunc,
                                    quis gravida magna mi a libero. Nam commodo
                                    suscipit quam. In consectetuer turpis ut
                                    velit. Sed cursus turpis vitae tortor.
                                    Aliquam eu nunc. Etiam ut purus mattis
                                    mauris sodales aliquam. Ut varius tincidunt
                                    libero. Aenean viverra rhoncus pede. Duis
                                    leo. Fusce fermentum odio nec arcu. Donec
                                    venenatis vulputate lorem. Aenean viverra
                                    rhoncus pede. In dui magna, posuere eget,
                                    vestibulum et, tempor auctor, justo. Fusce
                                    commodo aliquam arcu. Suspendisse enim
                                    turpis, dictum sed, iaculis a, condimentum
                                    nec, nisi.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-3">
                        <v-card flat>
                            <v-card-text>
                                <p>
                                    Fusce a quam. Phasellus nec sem in justo
                                    pellentesque facilisis. Nam eget dui. Proin
                                    viverra, ligula sit amet ultrices semper,
                                    ligula arcu tristique sapien, a accumsan
                                    nisi mauris ac eros. In dui magna, posuere
                                    eget, vestibulum et, tempor auctor, justo.
                                </p>

                                <p class="mb-0">
                                    Cras sagittis. Phasellus nec sem in justo
                                    pellentesque facilisis. Proin sapien ipsum,
                                    porta a, auctor quis, euismod ut, mi. Donec
                                    quam felis, ultricies nec, pellentesque eu,
                                    pretium quis, sem. Nam at tortor in tellus
                                    interdum sagittis.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
    <!-- </v-card> -->
</template>
