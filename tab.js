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
    let slug = link.getAttribute("href").split(" ").reverse()[0];
    if (window.location.href.indexOf(slug) > -1) {
      link.classList.add('active-css');
    }
    if (window.location.href.indexOf(slug) < 1) {
      link.classList.remove('active-css');
    }

    if (window.location.href === link.getAttribute("href")) {
      link.classList.add('active-css');
    }
  });
});



//
// // Get url current page
// var currentUrl = window.location.href;
//
// // Remove slash ("/") from the current page's URL
// if (currentUrl.slice(-1) === "/") {
//   currentUrl = currentUrl.slice(0, -1);
// }
//
// // Select all <a> tags in the vertical menu
// var menuLinks = document.querySelectorAll('.vertical_nav a');
//
// // Iterate through all the links in the menu and add class "active" if the URL of the link matches the URL of the current page
// menuLinks.forEach(function(link) {
//   var linkUrl = link.href;
//
//   // Remove slash ("/") from the current page's URL
//   if (linkUrl.slice(-1) === "/") {
//     linkUrl = linkUrl.slice(0, -1);
//   }
//
//   if (linkUrl === currentUrl) {
//     link.classList.add('active');
//   }
// });


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
