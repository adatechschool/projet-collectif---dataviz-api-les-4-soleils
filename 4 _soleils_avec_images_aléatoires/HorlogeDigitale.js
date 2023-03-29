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

//bloc-note

function addBlocNote() {
    var textArea = document.createElement("TEXTAREA");
    textArea.name = 'blocNote';
      textArea.maxLength = 5000;
      textArea.cols = 30;
      textArea.rows = 10;
      textArea.className = 'Textarea';
      
    var t = document.createTextNode("");
    textArea.appendChild(t);
    // button remove;
    var btn = document.createElement("BUTTON");
    btn.className = 'remove-note-btn';
  
    var tButton = document.createTextNode("X");
    
    btn.appendChild(tButton);
   
    document.getElementById('bloc-note').appendChild(textArea);
    
    document.getElementById('bloc-note').appendChild(btn);
      btn.addEventListener("click", function () {
      // remove textarea
        textArea.remove();
        // remove button
        this.remove();
   });
    
  }
