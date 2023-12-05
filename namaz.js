if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => {
        console.log("service worker registered");
        Notification.requestPermission().then((res) => {
          if (Notification.permission == "granted") {
            console.log("Granted Permission");
            return;
          }
          console.log(res);
        });
      })
      .catch((err) => console.log("service worker not registered", err));
  });
  navigator.serviceWorker.ready.then((notification) => {
    var options = {
      body: "This is body message Body",
      icon: "/assets/icons/icon-48x48.png",
    };
    notification.showNotification("This is Namaz Prayer App", options);
  });
}

setInterval(() => {
  document.querySelector(".date").innerHTML = moment().format(`hh:mm:ss `);
  document.querySelector(".time").innerHTML =
    moment().format(`D dddd, of MMMM YYYY`);
}, 1000);

function redirection() {
  window.location.href = "./index.html";
}

function logOut() {
  // localStorage.clear();
  setTimeout(redirection, 1000);
}

// let searchBtn = document.getElementById("searchBtn");

// searchBtn.addEventListener("click", fajrTime);
// searchBtn.addEventListener("click", sunriseTime);
// searchBtn.addEventListener("click", dhuhrTime);
// searchBtn.addEventListener("click", asrTime);
// searchBtn.addEventListener("click", maghribTime);
// searchBtn.addEventListener("click", ishaTime);

// function fajrTime() {
//   alert("FAJR 5:35 AM");
// }
// function sunriseTime() {
//   alert("SUNRISE 6:54 AM");
// }
// function dhuhrTime() {
//   alert("DHUHR 12:18 PM");
// }
// function asrTime() {
//   alert("ASR 5:42 PM");
// }
// function maghribTime() {
//   alert("MAGHRIB 5:42 PM");
// }
// function ishaTime() {
//   alert("ISHA 7:02 PM");
// }

// let searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", function(event){
//   event.preventDefault();
//   let displayAllTime = document.getElementById("displayAllTime");
//   console.log(displayAllTime)
//   displayAllTime.innerHTML += `fajr Time`;

// })

// Alarm setting////

// function alarm() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   var session = "AM";

//   if (h > 11) {
//       session = "PM";
//   }

//   // Check if it's 10:21:00 AM
//   if (h === 10 && m === 21 && s === 0 && session === "AM") {
//       alert("It is 10:21am, time to take a break from coding");
//   }
// }

// This code show second Element of container
let fajr = document.getElementById("fajr");
let sunrise = document.getElementById("sunrise");
let dhuhr = document.getElementById("dhuhr");
let asr = document.getElementById("asr");
let maghrib = document.getElementById("maghrib");
let isha = document.getElementById("isha");

fajr.innerHTML += `
<h5 class="text-center">Fajr</h5>
<h6 class="text-center">5:39 am</h6>`;
sunrise.innerHTML += `
<h5 class="text-center">Sunrise</h5>
<h6 class="text-center">7:00 am</h6>`;
dhuhr.innerHTML += `
<h5 class="text-center">Dhuhr</h5>
<h6 class="text-center">12:21 pm</h6>`;
asr.innerHTML += `
<h5 class="text-center">Asr</h5>
<h6 class="text-center">4:06 pm</h6>`;
maghrib.innerHTML += `
<h5 class="text-center">Maghrib</h5>
<h6 class="text-center">5:42 pm</h6>`;
isha.innerHTML += `
<h5 class="text-center">Isha</h5>
<h6 class="text-center">7:03 pm</h6>

`;
// setInterval(() =>{
//   let para = document.getElementById("para");
//   para.innerHTML = moment().format(
//     `<p>ll</P>`)
//   } ,1000);

setInterval(()  =>{ 
  let para = document.getElementById("para");
  para.innerHTML =
  moment().format('iYYYY/iM/iD');
},1000)  
