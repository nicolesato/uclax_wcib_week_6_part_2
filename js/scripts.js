console.log('Hello from js/scripts.js!');

// Info from raffle entry & other variables //
var raffleFirstName = document.getElementById('rafflefirstname');
var raffleLastName = document.getElementById('rafflelastname');
var raffleFlavor = document.getElementById('raffleflavor');
var randomize = document.querySelector('.randomize');
var yourCoupon = document.querySelector('.yourcoupon');
var yourCouponCode = document.querySelector('.yourcouponcode');
var addName = document.querySelector('.addname');
var generateGif = document.querySelector('.generategif');


// returns random value from array //
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


// random coupon generator //
var seeYouThere = 'We can\'t wait to see you there!'
var couponList = ['50% off any drink!','Free souvenir jar with any purchase!','One free topping!', '10% off your entire purchase!', 'BOGO any drink!', 'Upgrade any drink to a large!', '$1 off any large drink!'];

randomize.addEventListener('click', result);

function result() {

  var couponChosen = randomValueFromArray(couponList);
  var couponCodeChosen = '';

  if (couponChosen == '50% off any drink!') {
    var couponCodeChosen = '50OFFDRINK';
  }
  else if (couponChosen == 'Free souvenir jar with any purchase!') {
    var couponCodeChosen = 'FREESOUVENIR';
  }
  else if (couponChosen == 'Upgrade any drink to a large!') {
    var couponCodeChosen = 'DRINKUPGRADE'
  }
  else if (couponChosen == '10% off your entire purchase!') {
    var couponCodeChosen = '10OFF'
  }
  else if (couponChosen == 'BOGO any drink!') {
    var couponCodeChosen = 'BOGODRINK'
  }
  else if (couponChosen == 'One free topping!') {
    var couponCodeChosen = 'FREETOPPING'
  }
  else {
    var couponCodeChosen = '1OFFDRINK';
  }

  if (raffleFirstName.value !== '') {
    var firstName = raffleFirstName.value;
    seeYouThere = seeYouThere.replace('!',', ' + firstName + "!");
  }

  yourCoupon.textContent = couponChosen;
  yourCoupon.style.visibility = 'visible';
  yourCouponCode.textContent = couponCodeChosen;
  yourCouponCode.style.visibility = 'visible';
  addName.textContent = seeYouThere;
  addName.style.visibility = 'visible';
}

// random boba gif generator //
generateGif.addEventListener('click', gifResult);
var gifList = ['images/bobafett1.gif', 'images/bobafett2.gif', 'images/bobafett3.gif', 'images/bobafett4.gif'];

function gifResult() {
  var randomGifNumber = randomValueFromArray(gifList);
  document.getElementById('randombobagif').src=randomGifNumber;
}
