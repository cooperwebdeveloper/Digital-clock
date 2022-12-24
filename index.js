//declaration des constantes

const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")


// fonction pour mettre la date de l'ordi

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM" // par defaut 
    
    // on cree une condition pour definir si pm ou am

    if (h > 12){
        h = h - 12 //Pour que les heures restent au format 12h et pas 24h
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h //si  l'heure est inf a 10 on rajoute un zero devant
    m = m < 10 ? "0" + m : m // pareil pour les minutes et les secondes 
    s = s < 10 ? "0" + s : s 


    hourEl.innerText = h //la variable h recoit le contenu de hourEl qui lui meme recoit le contenu de hour
    minuteEl.innerText = m
    secondEl.innerText = s
    ampmEl.innerText = ampm
    
    //appeler la fonction chaque seconde pour que cela se mette a jour a chaque seconde :

    setTimeout(()=>{
        updateClock()
    }, 1000) //pour que ca se raffraichisse toutes les 1000ms ou ttes les secondes 

}

updateClock()  //avec cette methode les dates se mettent a jour une fois