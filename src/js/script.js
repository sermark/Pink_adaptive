"use strict";

var myMap;
var myPlacemark;

ymaps.ready(function() {
  myMap = new ymaps.Map('map', {
    center: [59.939000, 30.321375],
    zoom: 16,
    controls: ['zoomControl']
  }, {
      searchControlProvider: 'yandex#search'
      }),
  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
  hintContent: 'Pink',
  //balloonContent: 'img/pin.png'
  }, {
  // Опции.
  // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-marker.svg',
      // Размеры метки.
      iconImageSize: [35, 35],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-35, -35]
      });
  myMap.geoObjects.add(myPlacemark);
  // myMap.behaviors.disable('scrollZoom');
});


var slide_left = document.querySelector('.slider__control--prev'),
    slide_right = document.querySelector('.slider__control--next'),
    slides = document.querySelectorAll('.reviews__list .reviews__item'),
    currentSlide = 0; // Индекс текущего слайда.

function nextSlide() {
  goToSlide(currentSlide+1);
};

function previousSlide() {
  goToSlide(currentSlide-1);
};

function goToSlide(n) {
  slides[currentSlide].className = 'reviews__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'reviews__item reviews__item--active';
};

slide_right.onclick = function() {
  nextSlide();
};

slide_left.onclick = function() {
  previousSlide();
};


var navMain = document.querySelector('.main-nav'),
    navToogle = document.querySelector('.main-nav__toogle'),
    navWrapper = document.querySelector('.main-nav__wrapper');

navMain.classList.remove('main-nav--no-js');
navToogle.addEventListener('click', function (){
  if (navMain.classList.contains('main-nav--closed') && navWrapper.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navWrapper.classList.remove('main-nav__wrapper--closed');
    navWrapper.classList.add('main-nav__wrapper--opened');
  }
  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navWrapper.classList.add('main-nav__wrapper--closed');
    navWrapper.classList.remove('main-nav__wrapper--opened');
  }
});

var dotElems = document.querySelectorAll('.reviews .slider__toggle'),
    dotActive = document.querySelector(".reviews .slider__toggle--active"),
    slideActive = document.querySelector(".reviews .reviews__item--active");

dotElems.forEach(function (item) {
  item.addEventListener("click", function () {
    dotActive.classList.remove("slider__toggle--active");
    slideActive.classList.remove("reviews__item--active");
    item.classList.add("slider__toggle--active");
    dotActive = item;
    var currentPos = parseInt(item.getAttribute('data'));
    for(var i = 0; i < slides.length; i++) {
      var slidesPos = parseInt(slides[i].getAttribute("data"));
      if(currentPos == slidesPos) {
        slides[i].classList.add("reviews__item--active");
        slideActive = slides[i];
      }
    };
  });
});


var tableItem = document.querySelector('.price .price__items'),
    dotTable = document.querySelectorAll('.price .slider__toggle'),
    dotTableActive = document.querySelector(".price .slider__toggle--active");

dotTable.forEach(function (item){
  item.addEventListener("click", function (){
    dotTableActive.classList.remove("slider__toggle--active");
    item.classList.add("slider__toggle--active");
    dotTableActive = item;
    var currentPos = parseInt(item.getAttribute('data'));
    if (window.innerWidth >= "700"){
      tableItem.style.marginLeft = "auto";
    }
    else {
      if (currentPos == 1){
        tableItem.style.marginLeft = "-260px";
      }

      else if (currentPos == 2) {
        tableItem.style.marginLeft = "-540px";
      }

      else {
        tableItem.style.marginLeft = "-820px";
      }
    }

  });
});