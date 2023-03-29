async function getAPI() {
  const fetchResult = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.22&longitude=-1.53&hourly=temperature_2m,dewpoint_2m,weathercode&daily=weathercode,sunrise,sunset&timezone=auto"
);
    let data = await fetchResult.json();
    let sunrise = data.daily.sunrise[0];
    let sunset = data.daily.sunset[0];
    let temperature= data.hourly.temperature_2m[0]
    let dewpoint = data.hourly.dewpoint_2m[0]
    let weathercode = data.hourly.weathercode[0]
    let heurelever = new Date(sunrise).getHours()
    let heurecoucher = new Date(sunset).getHours()
    document.getElementById("sunrise").innerHTML += "<br>" + heurelever
    document.getElementById("sunset").innerHTML += "<br>" + heurecoucher
    document.getElementById("temperature").innerHTML += "<br>" + temperature + "°C"
    document.getElementById("dewpoint").innerHTML += "<br>" + dewpoint
    meteo(weathercode)
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

//BACKGROUND
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


// HORLOGE
let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');

let affichageHeure = function(){
    let today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;
    today = new Date();
    annee = today.getFullYear();
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()];
    jourNUmero = today.getDate();
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];

    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    heures = deuxChiffres(today.getHours());

    minutes = deuxChiffres(today.getMinutes());

    secondes = deuxChiffres(today.getSeconds());

    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    setTimeout(affichageHeure, 1000);
}

affichageHeure();

//IMAGE METEO
function meteo (weathercode){
    let pluieforte = [81, 82, 67];
    let averse = [51, 53, 55, 56, 57, 66, 80];
    let orage = [95, 96, 99];
    let neige = [71, 73, 75, 77, 85, 86];
    let cielCouvert = [1, 2];
    let brouillard = [45, 48];

    if (weathercode === 0) {
        document.getElementById("weathercode").innerHTML += "<img class='table-img' src='Images/soleil.png'>";
    }
    if (pluieforte.includes(weathercode)){
        document.getElementById("weathercode").innerHTML += "<img class='table-img' src='Images/pluieForte.png'>";
    }
    if (averse.includes(weathercode)){
        document.getElementById("weathercode").innerHTML += "<img class='table-img' src='Images/pluie.png'>";
    }
    if (orage.includes(weathercode)){
        document.getElementById("weathercode").innerHTML += "<img class='table-img' src='Images/Orage.png'>";
    }
    if (neige.includes(weathercode)){
        document.getElementById("weathercode").innerHTML += "<img class='table-img' src='Images/neige.png'>";
    }
    if (cielCouvert.includes(weathercode)){
        document.getElementById("weathercode").innerHTML += "<img class=\"table-img\" src='Images/Ciel couvert.png'>";
    }
    if (brouillard.includes(weathercode)){
        document.getElementById("weathercode").innerHTML += "<img class=\"table-img\" src='Images/brouillard.png'>";
    }
    if (weathercode === 3){
        document.getElementById("weathercode").innerHTML += "<img class=\"table-img\" src='Images/nuage.png'>";
    }
    else {
        document.getElementById("weathercode").innerHTML += "Probleme d'affichage de la météo"
    }
}


//BLOC NOTE
function blocNote() {
  var textArea = document.createElement("TEXTAREA");
  textArea.name = 'post';
  textArea.maxLength = 5000;
  textArea.cols = 30;
  textArea.rows = 10;
  textArea.className = 'Textarea';

  var t = document.createTextNode("");
  textArea.appendChild(t);
  // button remove;
  var btn = document.createElement("BUTTON");
  var tButton = document.createTextNode("X");
  btn.appendChild(tButton);

  document.body.appendChild(textArea);

  document.body.appendChild(btn);
  btn.addEventListener("click", function () {
      // remove textarea
      textArea.remove();
      // remove button
      this.remove();
  });
}