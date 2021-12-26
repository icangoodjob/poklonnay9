
counts = 0

var selected = [];
var url_list = {"ball__love": "love.html", "ball__home": "house.html", "ball__career": "career.html", "ball__money": "money.html", "ball__energe": "energy.html", "ball__beauty": "beauty.html", "ball__family": "family.html", "ball__sport": "sport.html", "ball__hobby": "hobby.html", "ball__health": "health.html", "ball__tourism": "travel.html"}


window.onclick = function(e) {
  if (counts == 3) {
    document.getElementById("btn__generate").classList.remove('disabled');
    document.getElementById("btn__generate").disabled = false;
  } else {
    document.getElementById("btn__generate").classList.add('disabled');
    document.getElementById("btn__generate").disabled = true;
  }
} 


function choiceLove() {
  var btnLove = document.getElementById("ball__love");
  if (btnLove.classList.contains('choice')) {
    btnLove.classList.remove('choice');

    selected.splice(selected.indexOf("ball__love"), 1)

    counts -= 1;
  } else {
    if (counts < 3) {
      counts += 1;
      document.getElementById("ball__love").classList.toggle("choice");
      selected.push("ball__love");
    }
  }
}

function choiceHome() {
  var btnHome = document.getElementById("ball__home");
  if (btnHome.classList.contains('choice')) {
    btnHome.classList.remove('choice');

    selected.splice(selected.indexOf("ball__home"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__home").classList.toggle("choice");
      selected.push("ball__home");
    }
  }
}

function choiceCareer() {
  var btnCareer = document.getElementById("ball__career");
  if (btnCareer.classList.contains('choice')) {
    btnCareer.classList.remove('choice');

    selected.splice(selected.indexOf("ball__career"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__career").classList.toggle("choice");
      selected.push("ball__career");
    }
  }
}

function choiceMoney() {
  var btnMoney = document.getElementById("ball__money");
  if (btnMoney.classList.contains('choice')) {
    btnMoney.classList.remove('choice');

    selected.splice(selected.indexOf("ball__money"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__money").classList.toggle("choice");
      selected.push("ball__money");
    }
  }
}

function choiceEnerge() {
  var btnEnerge = document.getElementById("ball__energe");
  if (btnEnerge.classList.contains('choice')) {
    btnEnerge.classList.remove('choice');

    selected.splice(selected.indexOf("ball__energe"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__energe").classList.toggle("choice");
      selected.push("ball__energe");
    }
  }
}

function choiceBeauty() {
  var btnBeauty = document.getElementById("ball__beauty");
  if (btnBeauty.classList.contains('choice')) {
    btnBeauty.classList.remove('choice');

    selected.splice(selected.indexOf("ball__beauty"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__beauty").classList.toggle("choice");
      selected.push("ball__beauty");
    }
  }
}
function choiceFamily() {
  var btnFamily = document.getElementById("ball__family");
  if (btnFamily.classList.contains('choice')) {
    btnFamily.classList.remove('choice');

    selected.splice(selected.indexOf("ball__family"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__family").classList.toggle("choice");
      selected.push("ball__family");
    }
  }
}

function choiceSport() {
  var btnSport = document.getElementById("ball__sport");
  if (btnSport.classList.contains('choice')) {
    btnSport.classList.remove('choice');

    selected.splice(selected.indexOf("ball__sport"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__sport").classList.toggle("choice");
      selected.push("ball__sport");
    }
  }
}

function choiceHobby() {
  var btnHobby = document.getElementById("ball__hobby");
  if (btnHobby.classList.contains('choice')) {
    btnHobby.classList.remove('choice');

    selected.splice(selected.indexOf("ball__hobby"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__hobby").classList.toggle("choice");
      selected.push("ball__hobby");
    }
  }
}

function choiceHealth() {
  var btnHealth = document.getElementById("ball__health");
  if (btnHealth.classList.contains('choice')) {
    btnHealth.classList.remove('choice');

    selected.splice(selected.indexOf("ball__health"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__health").classList.toggle("choice");
      selected.push("ball__health");
    }
  }
}

function choiceTourism() {
  var btnTourism = document.getElementById("ball__tourism");
  if (btnTourism.classList.contains('choice')) {
    btnTourism.classList.remove('choice');

    selected.splice(selected.indexOf("ball__tourism"), 1)
    
    counts -= 1
  } else {
    if (counts < 3) {
      counts += 1
      document.getElementById("ball__tourism").classList.toggle("choice");
      selected.push("ball__tourism");
    }
  }
}

function predict() {
  var num = Math.ceil(Math.random()*2);
  window.location.replace(String(url_list[selected[num]]));
}