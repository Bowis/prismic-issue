<template>
  <PrismicRichText v-if="blog" :field="blog.body" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { PrismicDocument } from "@prismicio/types";
import { usePrismic, PrismicText } from "@prismicio/vue";
import { PrismicRichText } from "@prismicio/vue";

const { client } = usePrismic();

const blog = ref<PrismicDocument | null>(null);

async function getContent() {
  const res = await client.getByUID(
    "post",
    "peace-on-earth-a-wonderful-wish-but-no-way"
  );
  blog.value = res.data;
  console.log(blog.value);
}

const textContent = [
  {
    spans: [],
    text: "some test content",
    type: "paragraph",
  },
];

onMounted(getContent);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
