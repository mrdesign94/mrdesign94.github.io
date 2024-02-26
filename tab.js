var estado = 0,
    vw = $(window).width();
$("#hamburger").click(function() {
  var delay_time = 0;
  $(this).toggleClass('open');
  console.log(estado);
  if (estado === 0) {
    TweenMax.to($("#bg-menu-mobile"), 1, {
      x:-vw,
      ease: Expo.easeInOut
    });

    $("li").each(function() {
      TweenMax.to($(this), 1.2, {
        x:-vw,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .04;
    });
    estado = 1;
  } else {
    estado = 0;
    TweenMax.to($("#bg-menu-mobile"), 1.2, {
      x:0,
      ease: Expo.easeInOut
    });
    $("li").each(function() {
      TweenMax.to($(this), 1, {
        x:0,
        /*
        x:vw,
        scaleX: 2.3,
        */
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .02;
    });
  }
});
/*
  if (estado === 0) {
    $("#bg-menu-mobile").animate({
      top: 0,
      right: 0
    }, {
      duration: 520,
      easing: "easeInOutStrong"
    });

    $("ul").delay(50).animate({
      top:"50px",
      left:"40px"
    }, { duration:640, easing:"easeInOutStrong" });

    $("li").each(function() {
      TweenMax.to($(this), 0.7, {"left": "40px", opacity: 1, delay: delay_time, ease: Power2.easeInOut});
      delay_time += 25;
    });
    estado = 1;
  } else {
    //
    $("#bg-menu-mobile").delay(300).animate({
      top: 0,
      right: "-100%"
    }, {
      duration: 650,
      easing: "easeInOutStrong"
    });

    $("li").each(function() {
      $(this).delay(delay_time).animate({
        "left": "100%",
        opacity: 0
      }, {
        duration: 720,
        easing: "easeInOutStrong"
      });
      delay_time += 20;
    });
    estado = 0;
  }
  console.log(estado);

});
*/







console.log("Hello, World! tab-js");
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }
  document.getElementById(cityName).classList.add("active", "animated", "animatedFadeInUp", "fadeInUp");
  // evt.currentTarget.className += " active";
}


// Menu mobile
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



//Meunu



// console.log("Hello, World! tab-js");
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
