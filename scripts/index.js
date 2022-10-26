import Swiper from "../lib/swiper-bundle.esm.browser.min.js";
//slider
new Swiper(".goods__block", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  navigation: {
    prevEl: ".goods__arrow.goods__arrow_prev",
    nextEl: ".goods__arrow.goods__arrow_next",
  },
  preventClicks: true,
  a11y: false,
});

//modal

const productMore = document.querySelectorAll(".product__more");
const modal = document.querySelector(".modal");

productMore.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.add("modal_open");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("modal_open");
  }
});

const formPlaceholder = document.querySelectorAll(".form__placeholder");
const formInput = document.querySelectorAll(".form__input");

formInput.forEach((el, i) => {
  el.addEventListener("focus", () => {
    formPlaceholder[i].classList.add("form__placeholder_active");
  });
  el.addEventListener("blur", () => {
    //"blur" событие потери расфокусировки
    if (el.value == "")
      formPlaceholder[i].classList.remove("form__placeholder_active");
  });
});

//choise country
const countryBtn = document.querySelector(".country__btn");
const countryList = document.querySelector(".country__list");

countryBtn.addEventListener("click", () => {
  countryList.classList.toggle("country__list_open");
  countryBtn.classList.toggle("country__btn_active");
});

document.addEventListener("click", (e) => {
  if (e.target != countryList && e.target != countryBtn) {
    countryList.classList.remove("country__list_open");
    countryBtn.classList.remove("country__btn_active");
  }
});

const countryChoiseBtn = document.querySelectorAll(".country__choise");
const productPrice = document.querySelectorAll(".product__price");
const startNameRate = "USD";
const listOfGoods = [
  {
    "id Good": 0,
    "good name": "iPhone 14 PRO",
    "base price": 1050,
    startNameRate,
  },
  {
    "id Good": 1,
    "good name": "iPhone 14 PRO",
    "base price": 799,
    startNameRate,
  },
  {
    "id Good": 2,
    "good name": "AirPods Pro",
    "base price": 249,
    startNameRate,
  },
  {
    "id Good": 3,
    "good name": "Apple Watch Ultra",
    "base price": 799,
    startNameRate,
  },
  {
    "id Good": 4,
    "good name": "Apple Watch Series 8",
    "base price": 399,
    startNameRate,
  },
];

const countryProperties = [
  {
    country: "Russia",
    coefficientRate: 61.09,
    nameRate: "RUB",
    valueSign: "₽",
  },
  {
    country: "USA",
    coefficientRate: 1,
    nameRate: "USD",
    valueSign: "$",
  },
  {
    country: "Germany",
    coefficientRate: 1.01,
    nameRate: "EUR",
    valueSign: "€",
  },
  {
    country: "Australia",
    coefficientRate: 1.5,
    nameRate: "AUD",
    valueSign: "$",
  },
  {
    country: "Great Britain",
    coefficientRate: 0.88,
    nameRate: "GBP",
    valueSign: "£",
  },
  {
    country: "Kazakhstan",
    coefficientRate: 479.98,
    nameRate: "KZT",
    valueSign: "₸",
  },
];

countryChoiseBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    countryBtn.textContent = btn.textContent;

    countryProperties.forEach((elem) => {
      if (`${elem.country}, ${elem.nameRate}` == countryBtn.textContent) {
        productPrice.forEach((price, index) => {
          let resPrice = Math.round(
            listOfGoods[index]["base price"] * elem.coefficientRate
          );

          let resTextPrice = `${elem.valueSign}${resPrice}`;
          price.textContent = resTextPrice;
        });
      }
    });
  });
});

//счетчик дней

const timerUnit = document.querySelectorAll(".timer__unit");
const timerUnitDescription = document.querySelectorAll(
  ".timer__unit-description"
);
let minutesUnit = Number(timerUnit[2].textContent);
let hoursUnit = Number(timerUnit[1].textContent);
let daysUnit = Number(timerUnit[0].textContent);
let count = 0;

setInterval(() => {
  minutesUnit -= 1;
  changeTimerDescriptionMinutes();
  timerUnit[2].textContent = minutesUnit;
  if (minutesUnit == 0) {
    minutesUnit = 60;
    hoursUnit -= 1;
    timerUnit[1].textContent = hoursUnit;
    changeTimerDescriptionHours();
  }
  if (hoursUnit == 0) {
    hoursUnit = 24;
    daysUnit -= 1;
    timerUnit[0].textContent = daysUnit;
    changeTimerDescriptionDays();
  }
}, 60000);

function changeTimerDescriptionMinutes() {
  let a = (minutesUnit % 100) / 10;

  if (a > 1 && a < 2) {
    timerUnitDescription[2].textContent = "минут";
  } else {
    switch (minutesUnit % 10) {
      case 1:
        timerUnitDescription[2].textContent = "минута";
        break;
      case 2:
      case 3:
      case 4:
        timerUnitDescription[2].textContent = "минуты";
        break;

      default:
        timerUnitDescription[2].textContent = "минут";
        break;
    }
  }
}
function changeTimerDescriptionHours() {
  let a = (hoursUnit % 100) / 10;

  if (a > 1 && a < 2) {
    timerUnitDescription[1].textContent = "часов";
  } else {
    switch (hoursUnit % 10) {
      case 1:
        timerUnitDescription[1].textContent = "час";
        break;
      case 2:
      case 3:
      case 4:
        timerUnitDescription[1].textContent = "часа";
        break;

      default:
        timerUnitDescription[1].textContent = "часов";
        break;
    }
  }
}

function changeTimerDescriptionDays() {
  let a = (daysUnit % 100) / 10;

  if (a > 1 && a < 2) {
    timerUnitDescription[0].textContent = "дней";
  } else {
    switch (daysUnit % 10) {
      case 1:
        timerUnitDescription[0].textContent = "день";
        break;
      case 2:
      case 3:
      case 4:
        timerUnitDescription[0].textContent = "дня";
        break;

      default:
        timerUnitDescription[0].textContent = "дней";
        break;
    }
  }
}
