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

// //active link menu
// document.addEventListener("DOMContentLoaded", function() {
//   const links = document.querySelectorAll(".item_menu_css a");
//   const activeLink = sessionStorage.getItem("activeLink");
//
//   links.forEach(link => {
//     if (link.getAttribute("href") === activeLink) {
//       link.classList.add("active-css");
//     }
//
//     link.addEventListener("click", function(e) {
//       links.forEach(item => item.classList.remove("active-css"));
//       this.classList.add("active-css");
//       sessionStorage.setItem("activeLink", this.getAttribute("href"));
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", function() {
	const links = document.querySelectorAll(".item_menu_css a");
	const logo = document.querySelector(".logo-css");
	const activeLink = sessionStorage.getItem("activeLink");

	links.forEach(link => {
		if (link.getAttribute("href") === activeLink) {
			link.classList.add("active-css");
		}

		link.addEventListener("click", function(e) {
			links.forEach(item => item.classList.remove("active-css"));
			this.classList.add("active-css");
			sessionStorage.setItem("activeLink", this.getAttribute("href"));
		});
	});

	logo.addEventListener("click", function(e) {
		e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
		links.forEach(item => item.classList.remove("active-css")); // Xóa lớp active từ tất cả liên kết
		const homeLink = document.querySelector('nav.menu a[href="https://mrdesign94.github.io/"]'); // Tìm liên kết trang chủ
		homeLink.classList.add("active-css"); // Thêm lớp active vào liên kết trang chủ
		sessionStorage.setItem("activeLink", "https://mrdesign94.github.io/"); // Lưu trạng thái "active" cho trang chủ
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
