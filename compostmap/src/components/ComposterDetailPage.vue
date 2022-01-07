<template>
  <div class="container block container-card">
      <p>Identifiant : {{id}}</p>
      <Card :identifiant="id"/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue"

export default {
    name:"ComposterDetailPage",
    components:{
        Card
    },
    props:{
        id : Number
    }
}
</script>

<style>

.container-card{
    width: 50%;
    margin-left: 25%;
    height: 300px;
}

</style>