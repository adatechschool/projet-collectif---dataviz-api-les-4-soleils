async function getAPI() {
  const fetchResult = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.22&longitude=-1.53&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto"
  );
  let data = await fetchResult.json();
  console.log(fetchResult);
  console.log(data);
  let sunrise = data.daily.sunrise[0];
  let sunset = data.daily.sunset[0];
  console.log(sunset);
  console.log(sunrise);
  changePic(sunrise, sunset);
  return data;
}

function changePic(sunrise, sunset) {
  let curentHours = new Date().getHours();
  let sunriseHours = new Date(sunrise).getHours();
  let sunsetHours = new Date(sunset).getHours();


  if (curentHours >= sunriseHours && curentHours <= sunriseHours + 3) {
    // display pic 1           
    document.body.style.backgroundImage = "url(img/sunrise.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    
  } else if (curentHours >= sunriseHours + 3 && curentHours < sunsetHours) {
    // display pic 2
    document.body.style.backgroundImage = "url(img/afterSunrise.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
  }

  else if (curentHours <= sunsetHours + 1) {
    // display pic 3
    document.body.style.backgroundImage = "url(img/sunset.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
  }
  else  {
    // display pic 4
    document.body.style.backgroundImage = "url(img/soir.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
  }
}  

console.log(getAPI());


          
var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées : 
    var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

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

//bloc-note

function myFunction() {
  var textArea = document.createElement("TEXTAREA");
  textArea.name = 'post';
    textArea.maxLength = 5000;
    textArea.cols = 30;
    textArea.rows = 10;
    textArea.className = 'Textarea';
    
  var t = document.createTextNode("écrire..");
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