<template>
  <h1>{{ msg }}</h1>
  Bienvenue sur mon app {{ title }}<br />
  <button v-on:click="title += '$'">Modifier titre</button>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Compostmap",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
