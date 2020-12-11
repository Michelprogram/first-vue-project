<template>
  <h1>Compost {{ id }}</h1>
  Adresse: {{ adresse }}
  <div class="compost-image">
    <img v-bind:src="image" />
  </div>
</template>

<script>
export default {
  name: "Composter",
  data() {
    return {
      id: 42,
      adresse: "28 rue des plantes en pots",
      image: "./assets/img/compost1.png",
    };
  },
};
</script>
