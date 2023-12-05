if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res =>{
            console.log("service worker registered")
            Notification.requestPermission().then(res =>{
                if(Notification.permission == 'granted'){
                    console.log("Granted Permission")
                    return;
                }
                console.log(res)
            })
        }) 
        .catch(err => console.log("service worker not registered", err))
    })
    navigator.serviceWorker.ready.then((Notification) => {
        var options = {
            body: 'This is reminder message',
            icon: '/assets/icons/icon-48x48.png'
        };
        Notification.showNotification('This is Namaz Prayer App', options);
    })
}


setInterval(() =>{
    document.querySelector(".date").innerHTML = moment()
    .format(`hh:mm:ss  `);
    document.querySelector(".time").innerHTML = moment()
    .format(`dddd D, of MMMM YYYY`)
},1000);

function registrationForm(){
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    //var emailRegx = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    var password = document.getElementById("password").value;

if(firstName === '' ){
    Swal.fire({
        icon: 'error',
        title: 'First name should not be empty',
        text: 'Plz enter your first name',
        
})
}else if(lastName === ''){
    Swal.fire({
        icon: 'error',
        title: 'Last name should not be empty',
        text: 'Plz enter your last name',
        
})
}else if(email === ""){
    Swal.fire({
        icon: 'error',
        title: 'Email should not be empty',
        text: 'Plz enter your email',
})
}else if (password === '') {
    Swal.fire({
        icon: 'error',
        title: 'Password should not be empty',
        text: 'Plz enter your password',
})
}else{
    Swal.fire({
        icon: 'success',
        title:  `${firstName }${lastName} Registration Successfuly`,
        showConfirmButton: false,
        timer: 2000,
})
var userData = {
        firstName: firstName,
        lastName: lastName,
        email : email,
        password : password,
};
var arrData = JSON.parse(localStorage.getItem("userDataArray")) || [];
       arrData.push(userData) ;  
       localStorage.setItem("userDataArray" , JSON.stringify(arrData));
     
       setTimeout(()=>{
       window.location.href = "./namaz.html";
    },1000)
}


}





