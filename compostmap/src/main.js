import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"

/* const asyncFailIfMust = (mustFail) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            mustFail ? reject() : resolve()
        },3000)
    })
}

const myFunc = async () =>{
    try{
        await asyncFailIfMust(false)
        console.log("Réussie")

        await asyncFailIfMust(true)
    } catch(err){
        console.error("Echec")
    }

}

myFunc() */





createApp(App)
    .use(router)
    .mount('#app')
