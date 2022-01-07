<template>

    <div class="card">

        <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>

        <div class="card-content" :class="{
            'is-quartier': isQuartier(),
            'is-residence': !isQuartier()
        }">
            <div class="media">
                <div class="media-left" >
                    <figure class="image is-48x48">
                        <img :src="image" alt="">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ compost.fields.nom }}</p>
                    <p class="title is-size-5"> {{ compost.fields.categorie }} </p>
                </div>
            </div>

            <div class="horaire">
                <p class="title is-size-4">{{ compost.fields.adresse }}</p>
            </div>


            <a :href="compost.fields.lien" class="mt-5 mb-5 button is-primary">Consulter site web</a>
            <a :href="openOnMap" class="mt-5 mb-5 button is-link">Ouvrir dans Google Maps</a>


        </div>

    </div>

</template>

<script>
export default {
    name :"Card2",
    props:{
        compost: null,
    },
    data() {
        return {
            image: "./assets/img/compost1.png",
        };
    },
    methods:{
        openOnMap(){
            const [longitude, latitude] = this.compost.geometry.coordinates
            return `https://maps.google.com/?q=${latitude},${longitude}`
        },
        isQuartier(){
            return this.compost.fields.categorie.includes('quartier')
        }
    },
}
</script>

<style scoped>

.is-quartier{
    background-color: rgb(77, 206, 77);
}

.is-residence{
    background-color: rgb(68, 68, 214);
}

</style>