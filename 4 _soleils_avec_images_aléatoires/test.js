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


//fonction pour changer en mode random avec un poti tableau (à voir pour changer en fichier json ?)
//Photos de JOUR :
function randomImageAfterSunrise(pic){
  //tableau avec toutes les images ;) (on pourra en rajouter pepouze)
  //bien marqué 'url' devant le nom & chemin de l'image
  let images = ["url(img/after_sunrise/hillRodShelley.jpg)",
  "url(img/after_sunrise/daytimeJoakimStigsson.jpg)","url(img/after_sunrise/cloudBenAdman.jpg)",
  "url(img/after_sunrise/forestAipict.com.jpg)","url(img/after_sunrise/mountainLodgeJoakimStigsson.jpg)",
  "url(img/after_sunrise/roadSurendraRajawat.jpg)"
  ]
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
  let images = ["url(img/soir/beachAdamVarga.jpg)","url(img/soir/cityBaptisteChauveau.jpg)",
  "url(img/soir/parisLizHume.jpg)","url(img/soir/forestThomasLafon_Djalloul.jpg)",
  "url(img/soir/gothamEricGagnon.jpg)","url(img/soir/NWMichaelRhima.jpg)"
]
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
  let images = ["url(img/sunrise/cabinEricDurante.jpg)",
  "url(img/sunrise/champDmityWittmann.jpg)","url(img/sunrise/champTamasGyerman.jpg)",
  "url(img/sunrise/morningIwoPilc.jpg)","url(img/sunrise/oceanTalaSelman.jpg)",
  "url(img/sunrise/dayPetriJääskeläinen.jpg)"]
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
  let images = ["url(img/sunset/forestJeffyZachariah.jpg)",
  "url(img/sunset/SurendraRajawat.jpg)","url(img/sunset/seaAlenaAenami.jpg)",
  "url(img/sunset/valleyCarolineSandgren.jpg)","url(img/sunset/sunsetScottRichard.jpg)"]
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