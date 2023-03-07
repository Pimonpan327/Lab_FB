<template>
  <div>
    <v-carousel
      cycle
      height="800"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/src/image/1.jpg",
        },
        {
          src: "/src/image/2.jpg",
        },
        {
          src: "/src/image/3.jpg",
        },
        {
          src: "/src/image/4.jpg",
        },
      ],
    };
  },
};
</script>
