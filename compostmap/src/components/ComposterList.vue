<template>

  <div>

<!--     <button @click="addCard()" class="button is-success">Ajouter composter {{ nb }}</button>
    <button @click="removeCard()" v-if="nb > 0" class="button is-danger">Supprimer Composter {{nbDelete}}</button>

    <div class="columns is-multiline mt-5">
      <Card class="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet is-one-mobile" v-for="index in nb" :key="index" :identifiant="index"/>
    </div> -->

    <div class="columns is-multiline mt-5">
      <Card2 class="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet is-one-mobile" 
          v-for="compost in composters" :key="compost.datasetid" :compost="compost"/>
          
    </div>
      
  </div>


</template>

<script>
//import Card from "@/components/Card.vue"
import Card2 from "@/components/Card2.vue"

import axios from "axios"

export default {
  name: "ComposterList",
  data(){
    return {
      nb : 0,
      nbDelete : 0,
      composters: Array
    }
  },
  components : {
    Card2
    //Card
  },
  methods:{
    addCard(){
      this.nb++
    },
    removeCard(){
      this.nb--
      this.nbDelete++
    }
  },
  mounted(){
    axios.get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=512042839_composteurs-quartier-nantes-metropole&rows=10")

    .then( response =>{
      this.composters = response.data.records
    })

    .catch( error =>{
      console.log(error)
    })
  }

};
</script>