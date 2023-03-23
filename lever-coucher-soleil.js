async function getAPI() {
    const fetchResult = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=47.22&longitude=-1.53&hourly=temperature_2m,dewpoint_2m,weathercode&daily=weathercode,sunrise,sunset&timezone=auto"
    );
    let data = await fetchResult.json();
    // declaration des variables pour l'affichage des elements de la meteo
    let sunrise = data.daily.sunrise[0];
    let sunset = data.daily.sunset[0];

    let temps= data.hourly.time[0]
    
    let temperature=data.hourly.temperature_2m[0]
    
    
    let dewpoint=data.hourly.dewpoint_2m[0]
    
    
    let weathercode=data.hourly.weathercode[0]
    //afficher les elements de la meteo dans un tableau html
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

            
/*recupertion de la date, de l'heure, des min et des secondes de la journee
let dateActuelle = new Date()
let heureActuelle =dateActuelle.getHours()
let heurMinuteActuelle =heureActuelle.getMinutes()
let heurMinuteSecondeActuelleTest = heurMinuteActuelle.getSeconds()

 fonction me permettant d'afficher les différentes images au cours de la journée

function changeBackground(heurMinuteSecondeActuelle) {
        const levéeSoleil =dateActuelle.getHours(06).getMinutes(00).getSeconds(00);
        const soleilJournée =dateActuelle.getHours(08).getMinutes(00).getSeconds(00);
        const soleilCrepuscl=dateActuelle.getHours(18).getMinutes(00).getSeconds(00);
        const soleilNuit =dateActuelle.getHours(00).getMinutes(00).getSeconds(00);
        const recuperationImgLevee= ducument.getElementById("levee")
        const recuperationImgJournee=document.getElementById("journee")
        const recuperationImgCrepuscul=document.getElementById("crepuscul")
        const recuperationImgNuit=document.getElementById("nuit")


       if (heurMinuteSecondeActuelle >= levéeSoleil && heurMinuteSecondeActuelle<=soleilJournée ){
        document.body=recuperationImgLevee
        
        
       }
        else if (heurMinuteSecondeActuelle >soleilJournée && heurMinuteSecondeActuelle<=soleilCrepuscl){
          document.body=recuperationImgJournee
        }
        else if (heurMinuteSecondeActuelle > soleilCrepuscl && heurMinuteSecondeActuelle <=soleilNuit ){
            document.body=recuperationImgCrepuscul
            
        } 
        else if (heurMinuteSecondeActuelle > soleilNuit && heurMinuteSecondeActuelle<levéeSoleil) {
            document.body=recuperationImgNuit
        }
        else{
            document.body= "l'heure entree n'est pas bonne"
        }
    }*/



