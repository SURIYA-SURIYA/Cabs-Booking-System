function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function submit() {
    var a = document.getElementById("name").value;
    var x = document.getElementById("password").value;
    if (a == "" && x == "") {
        alert("succesful login... go to next page");
        window.location.assign("main.html")
    }
    else{
        alert("Invalid Information");
    }
}
function car1(){
  window.location.assign("viewcars.html");
}
function car2(){
  window.location.assign("viewcar2.html");
}
function car3(){
  window.location.assign("viewcar3.html");
}
function car4(){
  window.location.assign("viewcar4.html");
}
function car5(){
  window.location.assign("viewcar5.html");
}
function car6(){
  window.location.assign("viewcar6.html");
}
function car7(){
  window.location.assign("viewcar7.html");
}

function car8(){
  window.location.assign("viewcar8.html");
}

function car9(){
  window.location.assign("viewcar9.html");
}

function car10(){
  window.location.assign("viewcar10.html");
}

function car11(){
  window.location.assign("viewcar11.html");
}

function car12(){
  window.location.assign("viewcar12.html");
}
function back(){
  window.history.back();
}

function back2(){
  window.history.back();
}
function booking(){
  window.location.assign("userdetails.html");
}

function save(){
  alert("sccessfully send")
  window.location.assign("save.html");
}
function home(){
  window.location.assign("main.html");
}

