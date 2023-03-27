async function getAPI() {
  const fetchResult = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.22&longitude=-1.53&hourly=temperature_2m,dewpoint_2m,weathercode&daily=weathercode,sunrise,sunset&timezone=auto"
);
  let data = await fetchResult.json();
  let sunrise = data.daily.sunrise[0];
  let sunset = data.daily.sunset[0];
  let temps= data.hourly.time[0]
  let temperature=data.hourly.temperature_2m[0]
  let dewpoint=data.hourly.dewpoint_2m[0]
  let weathercode=data.hourly.weathercode[0]
  document.getElementById("titre-tableau").innerHTML="LA METEO DU JOURS"
  document.getElementById("levee").innerHTML="l'heure de la  levee du soleil "
  document.getElementById("sunrise").innerHTML= sunrise
  document.getElementById("couchee").innerHTML="l'heure du couchée du soleil  "
  document.getElementById("sunset").innerHTML=sunset
  document.getElementById("date-jour").innerHTML="la date du jour"
  document.getElementById("temp").innerHTML=temps
  document.getElementById("affiche-temperature").innerHTML="la temperature actuelle"
  document.getElementById("temperature").innerHTML=temperature + "°C"
  document.getElementById("rosee").innerHTML="la rosee"
  document.getElementById("dewpoint").innerHTML=dewpoint
  document.getElementById("code").innerHTML="Le code meteo"
  document.getElementById("weathercode").innerHTML=weathercode
  
  changePic(sunrise, sunset);
  return data;
}

//fonction pour changer en mode random avec un poti tableau (à voir pour changer en fichier json ?)
//Photos de JOUR :
function randomImageAfterSunrise(pic){
  //tableau avec toutes les images ;) (on pourra en rajouter pepouze)
  //bien marqué 'url' devant le nom & chemin de l'image
  let images = ["url(img/after_sunrise/afterSunrise.jpg)","url(img/after_sunrise/city.png)","url(img/after_sunrise/city2.png)","url(img/after_sunrise/sea.png)","url(img/after_sunrise/sea2.png)"]
  let imageslength = images.length;
  let randomNumber = Math.random()
  randomNumber = randomNumber*imageslength
  randomNumber = Math.floor(randomNumber)
  //affiche une image aléatoirement du tableau à chaque refresh
  let choosenImages = images[randomNumber]
  //retourne la fonction pour pouvoir l'utiliser facilement dans d'autres fonctions
  pic = choosenImages
  return pic;
}

//Photos de NUIT :
function randomImageSoir(pic){
  let images = ["url(img/soir/soir.jpg)"]
  let imageslength = images.length
  let randomNumber = Math.random()
  randomNumber = randomNumber*imageslength
  randomNumber = Math.floor(randomNumber)
  let choosenImages = images[randomNumber]
  pic = choosenImages
  return pic;
}

//Photos LEVEE DU SOLEIL :
function randomImageSunrise(pic){
  let images = ["url(img/sunrise/sunrise.jpg)"]
  let imageslength = images.length
  let randomNumber = Math.random()
  randomNumber = randomNumber*imageslength
  randomNumber = Math.floor(randomNumber)
  let choosenImages = images[randomNumber]
  pic = choosenImages
  return pic;
}

//Photos COUCHE DU SOLEIL :
function randomImageSunset(pic){
  let images = ["url(img/sunset/sunset.jpg)"]
  let imageslength = images.length
  let randomNumber = Math.random()
  randomNumber = randomNumber*imageslength
  randomNumber = Math.floor(randomNumber)
  let choosenImages = images[randomNumber]
  pic = choosenImages
  return pic;
}

function changePic(sunrise, sunset) {
  let curentHours = new Date().getHours();
  let sunriseHours = new Date(sunrise).getHours();
  let sunsetHours = new Date(sunset).getHours();


  if (curentHours >= sunriseHours && curentHours <= sunriseHours + 3) {
    // display pic 1           
    document.body.style.backgroundImage = randomImageSunrise();
    document.body.style.backgroundRepeat = "no-repeat";
    
  } else if (curentHours >= sunriseHours + 3 && curentHours < sunsetHours) {
    // display pic 2
    document.body.style.backgroundImage = randomImageAfterSunrise();
    document.body.style.backgroundRepeat = "no-repeat";
  }

  else if (curentHours <= sunsetHours + 1) {
    // display pic 3
    document.body.style.backgroundImage = randomImageSunset();
    document.body.style.backgroundRepeat = "no-repeat";
  }
  else  {
    // display pic 4
    document.body.style.backgroundImage = randomImageSoir();
    document.body.style.backgroundRepeat = "no-repeat";
  }
}  

console.log(getAPI());
console.log(randomImageAfterSunrise())

let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');

let affichageHeure = function(){
    // Déclaration des letiables qui seront utilisées : 
    let today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle : 
    today = new Date();

    // Récupérer l'année : 
    annee = today.getFullYear();

    //Récupérer le mois : 
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()]; //getMonth() donne l'index 1 comme on est en Février, ce qui donne la valeur "Février" depuis notre liste

    // Récupérer le numéro du jour du mois : 
    jourNUmero = today.getDate(); //donne 29

    // Récupérer le jour. Attention la semaine commence un dimanche en Javascript : 
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; // getDay() donne index 6, donc samedi


    //Afficher les heures, minutes et secondes toujours avec deux chiffres : 
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures : 
    heures = deuxChiffres(today.getHours());

    // Récupérer les minutes : 
    minutes = deuxChiffres(today.getMinutes());

    // Récupérer les secondes : 
    secondes = deuxChiffres(today.getSeconds());

    //Affichage dans nos DIV du HTML : 
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
    setTimeout(affichageHeure, 1000);
}

//Lancer la fonction une fois au début : 
affichageHeure();
