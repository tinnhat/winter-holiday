//scroll xuống thì bỏ text
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let text_nutRelated = document.querySelector(".btn-release-text");
    let text_nutBuy = document.querySelector(".btn-buy-text");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 600) {
        text_nutRelated.classList.add("disable");
        text_nutBuy.classList.add("disable");
      } else if (window.pageYOffset <= 300) {
        text_nutRelated.classList.remove("disable");
        text_nutBuy.classList.remove("disable");
      }
    });
  },
  false
);

//back to top
let backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 600) {
    backToTop.classList.remove("disable");
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else if (window.pageYOffset <= 600) {
    backToTop.classList.add("disable");
  }
});

// sidebar
let nutclose = document.querySelector(".menu-find-icon-close");
let menuFind = document.querySelector(".menu-find");
let menu = document.querySelector(".header-menu-nav");
menu.onclick = () => {
  menuFind.classList.add("truotvao");
};
nutclose.onclick = () => {
  menuFind.classList.remove("truotvao");
};
window.addEventListener("scroll", function () {
  if (menuFind.classList.contains("truotvao")) {
    menuFind.classList.remove("truotvao");
  }
});

//đếm số
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  const startTime = performance.now();
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime > duration) {
      callback(finalNumber);
    } else {
      const rate = elapsedTime / duration;
      const currentNumber = Math.round(rate * finalNumber);
      callback(currentNumber);
      requestAnimationFrame(updateNumber);
    }
  }
  requestAnimationFrame(updateNumber);
}
let checkStop = true;
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset >= 3300) {
    if (checkStop == true) {
      timeDown();
      checkStop = false;
    }
  }
});
function timeDown() {
  animateNumber(452, 1000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("tour_number").innerText = formattedNumber;
  });

  animateNumber(120, 1000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("year_number").innerText = formattedNumber;
  });

  animateNumber(283, 1000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("cottage_number").innerText = formattedNumber;
  });
  animateNumber(197, 1000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("restaurant_number").innerText = formattedNumber;
  });
}
// menu mobile
let iconmenu = document.querySelector(".header-mobile-menu");
let menuMobile = document.querySelector(".menu-mobile-list");
// iconmenu.onclick = () => {
//   menuMobile.classList.toggle("disable");
// };
document.onclick = (e) => {
  if (e.target.classList.contains("header-mobile-menu")) {
    menuMobile.classList.toggle("disable");
  } else {
    if (
      e.target.classList.contains("menu-list-items") ||
      e.target.classList.contains("menu-list-item") ||
      e.target.classList.contains("list-item-link") ||
      e.target.classList.contains("list-item-icon")
    ) {
      menuMobile.classList.remove("disable");
    } else {
      menuMobile.classList.add("disable");
    }
  }
};
$(document).ready(function () {
  $("#home").click(function () {
    $(".subnav-home").slideToggle("slow");
  });
  $("#page").click(function () {
    $(".subnav-page").slideToggle("slow");
  });
  $("#des").click(function () {
    $(".subnav-des").slideToggle("slow");
  });
  $("#tour").click(function () {
    $(".subnav-tour").slideToggle("slow");
  });
  $("#blog").click(function () {
    $(".subnav-blog").slideToggle("slow");
  });
  $("#shop").click(function () {
    $(".subnav-shop").slideToggle("slow");
  });
  $("#element").click(function () {
    $(".subnav-ele").slideToggle("slow");
  });
});
// user menu
let userMenu = document.querySelector(".header-mobile-user");
let modal = document.querySelector(".modal-mobile");
let modalContainer = document.querySelector(".modal-container");
function showModal() {
  modal.classList.remove("disable");
}
function hideModal() {
  modal.classList.add("disable");
}
userMenu.addEventListener("click", showModal);

modal.addEventListener("click", hideModal);
modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
// swap form
let login = document.getElementById("login");
let reg = document.getElementById("reg");
let modalLogin = document.querySelector(".modal-box-item");

let modalSocial = document.querySelector(".box-btn-social");

let modalReg = document.querySelector(".register");

reg.addEventListener("click", () => {
  login.classList.add("login-deactive");
  reg.classList.remove("login-deactive");
  modalReg.classList.remove("disable");
  modalLogin.classList.add("disable");
  modalSocial.classList.add("disable");
});
login.addEventListener("click", () => {
  login.classList.remove("login-deactive");
  reg.classList.add("login-deactive");
  modalReg.classList.add("disable");
  modalLogin.classList.remove("disable");
  modalSocial.classList.remove("disable");
});
