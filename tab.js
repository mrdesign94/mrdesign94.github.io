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



document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".item_menu_css a");

  links.forEach(link => {
    let slug = link.getAttribute("href").split("https://mrdesign94.github.io").reverse()[0];
    if (window.location.href.indexOf(slug) > -1) {
      link.classList.add('active-css');
    }
    else (window.location.href.indexOf(slug) < -1) {
      link.classList.remove('active-css');
    }

    if (window.location.href === link.getAttribute("href")) {
      link.classList.add('active-css');
    }
  });
});


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
