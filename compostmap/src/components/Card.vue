<template>


    <div class="card" :class="{
        'composter-opened': getOpen(),
        'composter-closed': !getOpen()
    }">

    <figure class="image is-4by3" :class="{ 
            'img-pointer' : getCursor(),
            'img-noPointer' : !getCursor()
        }">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>


    <div class="card-content">
        <div class="media">
        <div class="media-left" >
            <figure class="image is-48x48">
                <img @mouseover="deleteDay()" :src="image" alt="">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{ componentTitle }}</p>
            <p class="title is-size-5"> {{ focusedDay }} </p>
        </div>
        </div>
    </div>

        <p class="mt-5 mb-5">Horaire d'ouverture :</p>

        <div class="horaire">
            <ul v-for="day in openingSchedules" :key="day.day" @mouseover="setFocus(day)">
                <li>{{ day.day }} : De {{ day.opening_hour }}h à {{ day.closing_hour}}h</li>
            </ul>
        </div>


        <button @click="addDay()" class="mt-5 mb-5 button is-primary">Ajouter horaire d'ouverture</button>

        <br>

        <div class="container-text-bottom" :class="{
            'text-opened': getOpen(),
            'text-closed': !getOpen(),
            'tours' : cityIsTours(),
            'nantes' : !cityIsTours()
        }">
            <a>{{ adresse }} {{ city }}</a>

            <div class="mb-2 mt-2">
                <p>{{ componentOpen }}</p>
            </div>
        </div>


    </div>

</template>

<script>
export default {
    name :"Card",
    props:{
        identifiant : Number,
        isOpen : Boolean,
    },
    data() {
        return {

        adresse: "28 rue des plantes en pots",
        city : this.identifiant % 2 == 0 ? "Nantes" : "Tours",
        image: "./assets/img/compost1.png",

        focusedDay : "",

        openingSchedules :[
            { day: 'Lundi', opening_hour: 9, closing_hour: 18},
            { day: 'Mardi', opening_hour: 9, closing_hour: 17},
            { day: 'Mercredi', opening_hour: 9, closing_hour: 15},
            { day: 'Jeudi', opening_hour: 9, closing_hour: 18},
            { day: 'Vendredi', opening_hour: 9, closing_hour: 15},
            { day: 'Samedi', opening_hour: 9, closing_hour: 12},
            { day: 'Dimanche', opening_hour: 9, closing_hour: 10},

        ]
        };
    },
    methods:{
        randomHour(){
            return Math.floor(Math.random() * 20)
        },
        getOpen(){
            return (this.identifiant % 2 === 0) && (this.openingSchedules.length != 0)
        },
        getCursor(){
            return this.openingSchedules.length > 5
        },
        cityIsTours(){
            return this.city == "Tours"
        },
        addDay(){
            const d = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

            const newDay = {
                day : d[Math.floor(Math.random() * d.length)],
                opening_hour : this.randomHour(),
                closing_hour : this.randomHour()
            }

            this.openingSchedules.push(newDay)
        },
        deleteDay(){
            this.openingSchedules.pop()
        },
        setFocus(day){
            this.focusedDay = `${ day.day }`
        }
    },
    computed: {
        componentTitle() {
            let evenOrOdd = 'impair'
            if (this.identifiant %2 == 0) {
                evenOrOdd = 'pair'
            }
            return 'Composter ' + this.identifiant + ' (' + evenOrOdd + ')'
        },
        componentOpen(){
            return this.getOpen() ? "Ouvert" : "Fermé"
        }

	}
}
</script>

<style scoped>

.horaire{
    margin: 0 2% 0 2%;
}

.composter-opened{
    background-color: #A6D785;
	border: 2px solid #3B5E2B;
}

.composter-closed{
	background-color: #F5F5F5;
	border: 2px solid #C0C0C0;
}

.img-pointer{
    cursor: pointer;
}

.img-noPointer{
    cursor: normal;
}

.text-opened{
    font-weight: bold;
}

.text-closed{

    font-weight: 100;
}

.nantes{
    background-color: #fed766;
}

.tours{
    background-color: #f4b6c2;
}

</style>