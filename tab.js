document.addEventListener("DOMContentLoaded", function() {
  // Lấy tất cả các liên kết trong menu có class là "item_menu_css"
  const links = document.querySelectorAll(".item_menu_css a");
  // Lấy giá trị của menu đang active từ sessionStorage
  const activeLink = sessionStorage.getItem("activeLink");

  // Duyệt qua từng liên kết trong menu
  links.forEach(link => {
    // Nếu liên kết hiện tại trùng với menu đang active, thêm class "active-css" để đánh dấu là menu active
    if (link.getAttribute("href") === activeLink) {
      link.classList.add("active-css");
    }

    // Thêm sự kiện click cho từng liên kết
    link.addEventListener("click", function(e) {
      // Xóa tất cả các class "active-css" khỏi tất cả các liên kết
      links.forEach(item => item.classList.remove("active-css"));
      // Thêm class "active-css" vào liên kết đang được kick
      this.classList.add("active-css");
      // Lưu trạng thái "active" của liên kết vào sessionStorage
      sessionStorage.setItem("activeLink", this.getAttribute("href"));
    });
  });

  // Thêm sự kiện click cho logo
  const logo = document.querySelector(".logo-css");
  logo.addEventListener("click", function(e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    // Xóa tất cả các class "active-css" khỏi tất cả các liên kết
    links.forEach(item => item.classList.remove("active-css"));
    // Tìm liên kết trang chủ
    const homeLink = document.querySelector('.item_menu_css a[href="https://mrdesign94.github.io"]');
    if (homeLink) {
      // Thêm class "active-css" vào liên kết trang chủ
      homeLink.classList.add("active-css");
      // Lưu trạng thái "active" của liên kết vào sessionStorage
      sessionStorage.setItem("activeLink", "https://mrdesign94.github.io");
    }
  });
});


// document.addEventListener("DOMContentLoaded", function() {
//   // Lấy tất cả các liên kết trong menu có class là "item_menu_css"
//   const links = document.querySelectorAll(".item_menu_css a");
//   // Lấy giá trị của menu đang active từ sessionStorage
//   const activeLink = sessionStorage.getItem("activeLink");
//
//   // Duyệt qua từng liên kết trong menu
//   links.forEach(link => {
//     // Nếu liên kết hiện tại trùng với menu đang active, thêm class "active-css" để đánh dấu là menu active
//     if (link.getAttribute("href") === activeLink) {
//       link.classList.add("active-css");
//     }
//
//     // Thêm sự kiện click cho từng liên kết
//     link.addEventListener("click", function(e) {
//       // Xóa tất cả các class "active-css" khỏi tất cả các liên kết
//       links.forEach(item => item.classList.remove("active-css"));
//       // Thêm class "active-css" vào liên kết đang được kick
//       this.classList.add("active-css");
//       // Lưu trạng thái "active" của liên kết vào sessionStorage
//       sessionStorage.setItem("activeLink", this.getAttribute("href"));
//     });
//   });
// });

// let navlist = document.querySelectorAll('.item_menu_css');
//
// for (let i = 0; i < navlist.length; i++) {
// 	item_menu_css[i].addEventListener('click', function() {
// 		for (let x = 0; x < item_menu_css.length; x++) {
// 			if (item_menu_css[x] == this) {
// 				item_menu_css[x].classList.add('active');
// 			} else {
// 				item_menu_css[x].classList.remove('active');
// 			}
// 		}
// 	});
// }


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



// document.addEventListener("DOMContentLoaded", function() {
// 	const links = document.querySelectorAll("li.item_menu_css a");
// 	const logo = document.querySelector(".logo-css");
// 	const activeLink = sessionStorage.getItem("activeLink");
//
// 	links.forEach(link => {
// 		if (link.getAttribute("href") === activeLink) {
// 			link.classList.add("active-css");
// 		}
//
// 		link.addEventListener("click", function(e) {
// 			links.forEach(item => item.classList.remove("active-css"));
// 			this.classList.add("active-css");
// 			sessionStorage.setItem("activeLink", this.getAttribute("href"));
// 		});
// 	});
//
// 	logo.addEventListener("click", function(e) {
// 		e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
// 		links.forEach(item => item.classList.remove("active-css")); // Xóa lớp active từ tất cả liên kết
// 		const homeLink = document.querySelector('li.item_menu_css a[index]'); // Tìm liên kết trang chủ
// 		homeLink.classList.add("active-css"); // Thêm lớp active vào liên kết trang chủ
// 		sessionStorage.setItem("activeLink", "index"); // Lưu trạng thái "active" cho trang chủ
// 	});
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
