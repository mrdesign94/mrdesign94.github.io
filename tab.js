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



// document.addEventListener("DOMContentLoaded", function() {
//   const links = document.querySelectorAll(".item_menu_css a");
//
//   links.forEach(link => {
//     let slug = link.getAttribute("href").split("/").reverse()[0];
//     if (window.location.href.indexOf(slug) > -0) {
//       link.classList.add('active-css');
//     }
//
//     if (window.location.href === link.getAttribute("href")) {
//       link.classList.remove('active-css');
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", function() {
//   const links = document.querySelectorAll(".item_menu_css a");
//
//   links.forEach(link => {
//     let slug = link.getAttribute("href").split("/").filter(Boolean).pop();
//     let currentURL = window.location.href;
//
//     if (currentURL.includes(slug)) {
//       link.classList.add('active-css');
//     } else {
//       link.classList.remove('active-css');
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", function() {
//   const links = document.querySelectorAll(".item_menu_css a");
//
//   links.forEach(link => {
//     link.addEventListener("click", function(e) {
//       e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
//       links.forEach(item => item.classList.remove("active-css"));
//       this.classList.add("active-css");
//       window.sessionStorage.setItem("activeLink", this.getAttribute("href")); // Lưu trạng thái "active"
//     });
//   });
//
//   // Phục hồi trạng thái "active" khi tải lại trang
//   const activeLink = window.sessionStorage.getItem("activeLink");
//   if (activeLink) {
//     links.forEach(link => {
//       if (link.getAttribute("href") === activeLink) {
//         link.classList.add("active-css");
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".item_menu_css a");
  const activeLink = sessionStorage.getItem("activeLink");

  links.forEach(link => {
    if (link.getAttribute("href") === activeLink) {
      link.classList.add("active");
    }

    link.addEventListener("click", function(e) {
      links.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
      sessionStorage.setItem("activeLink", this.getAttribute("href"));
    });
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
