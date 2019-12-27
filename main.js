/*Animations */
TweenMax.from('#logo', 2, {
    delay: .1,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('.navigation', 2, {
    delay: .1,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('#search', 2, {
    delay: .1,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('#cart', 2, {
    delay: .1,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('.content', 2, {
    delay: .1,
    opacity: 0,
    x: -1000,
    ease: Power3.easeInOut
  })

  TweenMax.from('.itemnum', 2, {
    delay: .3,
    opacity: 0,
    x: 1000,
    ease: Power3.easeInOut
  })

  TweenMax.from('.item', 2, {
    delay: .5,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut
  })

  TweenMax.from('.footer', 2, {
    delay: .5,
    opacity: 0,
    y: 1000,
    ease: Power1.easeInOut
  })

/*Button Swapping*/

//Variable Declaration
var whiteBtn = document.getElementById("white");
var blackBtn = document.getElementById("black");
var blueBtn = document.getElementById("blue");
var redBtn = document.getElementById("red");
var itemPhoto = document.getElementById("itemPhoto");
var itemBg = document.querySelector(".itemnum");
var itemNum = document.querySelector(".itemnum > h1");

//White button
whiteBtn.addEventListener("click",function(){

  itemPhoto.src = "/img/white.png";
  itemNum.innerHTML = "01";
  itemNum.style.color = "black";
  itemBg.style.backgroundImage = "linear-gradient(to right, rgb(234, 238, 230) , rgb(0, 0, 0))";

  TweenMax.from('.itemnum', 2, {
    delay: 0,
    opacity: 0,
    x: 200,
    ease: Power3.easeInOut
  })
  TweenMax.from('#itemPhoto', 2, {
    delay: 0,
    opacity: 0,
    y: 100,
    ease: Power4.easeInOut
  })
})



//Black button
blackBtn.addEventListener("click",function(){

  itemPhoto.src = "/img/black.png";
  itemNum.innerHTML = "02"
  itemNum.style.color = "white";
  itemBg.style.backgroundImage = "linear-gradient(to right, rgb(45, 45, 45) , rgb(0, 0, 0))";

  TweenMax.from('.itemnum', 2, {
    delay: 0,
    opacity: 0,
    x: 200,
    ease: Power3.easeInOut
  })
  TweenMax.from('#itemPhoto', 2, {
    delay: 0,
    opacity: 0,
    y: 100,
    ease: Power4.easeInOut
  })
})



//Blue button
blueBtn.addEventListener("click",function(){

  itemPhoto.src = "/img/blue.png";
  itemNum.innerHTML = "03";
  itemNum.style.color = "white";
  itemBg.style.backgroundImage = "linear-gradient(to right, rgb(0, 25, 252) , rgb(0, 0, 0))";

  TweenMax.from('.itemnum', 2, {
    delay: 0,
    opacity: 0,
    x: 200,
    ease: Power3.easeInOut
  })
  TweenMax.from('#itemPhoto', 2, {
    delay: 0,
    opacity: 0,
    y: 100,
    ease: Power4.easeInOut
  })
})



//Red button
redBtn.addEventListener("click",function(){

  itemPhoto.src = "/img/red.png";
  itemNum.innerHTML = "04";
  itemNum.style.color = "white";
  itemBg.style.backgroundImage = "linear-gradient(to right, rgb(255, 0, 0) , rgb(0, 0, 0))";

  TweenMax.from('.itemnum', 2, {
    delay: 0,
    opacity: 0,
    x: 200,
    ease: Power3.easeInOut
  })
  TweenMax.from('#itemPhoto', 2, {
    delay: 0,
    opacity: 0,
    y: 100,
    ease: Power4.easeInOut
  })
})

