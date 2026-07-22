let clearMyInterval = null;
let previousPrice = null//stores the last price.

function getStockData(){
  const currentPrice = Number((Math.random() * 3).toFixed(2));//Number() converts the string back to number.
 const products = {
    name: 'QtchAI',
    sym: 'QTA',
    price: currentPrice.toFixed(2),//get random numbers btw 0 and 3 in two decimal places.
    time: new Date().toLocaleTimeString()
  }

  //Destructure the object key-values
  const {name, sym, price, time} = products;

  //Apply DOM on them
  document.querySelector('.js-name').textContent = name;
  document.querySelector('.js-sym').textContent = sym;
  document.querySelector('.js-price').textContent = price;
  document.querySelector('.js-time').textContent = time;

  //Apply vertically: up = red arrow when decreasing and down=green when increasing, Horizontally:facing right when neutral:  

  //Arrow image
  const arrow = document.querySelector('.js-price-image');

  //Compare with previous price
  if(previousPrice !== null){
    //STRAT THE COMPARISM

    //PRICE INCREASED,IMAGE CHANGES TO DOWN GREEN ARROW
    if(currentPrice > previousPrice){
      arrow.src = 'images/caret-down-fill.svg';
      arrow.style.filter = 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)';

      //PRICE REDUCED, IMAGES CHANGES TO RED UP ARROW
    }else if (currentPrice < previousPrice) {
      arrow.src = 'images/caret-up-fill.svg';
      arrow.style.filter =
        'invert(19%) sepia(96%) saturate(7461%) hue-rotate(357deg) brightness(94%) contrast(118%)';

      //PRICE EQUAL,IMAGES CHANGES TO GRAY RIGHT ARROW
    }else if(currentPrice === previousPrice){
      arrow.src = 'images/caret-right-fill.svg';
      arrow.style.filter =
        'grayscale(100%) brightness(60%)';
    }
  }
  // Save current price for next comparison
  previousPrice = currentPrice;
}

//START
document.querySelector('.js-start').addEventListener('click',()=>{

  // prevent multiple intervals
  clearInterval(clearMyInterval);

  getStockData();//Run immediately
 clearMyInterval = setInterval(()=>{
  getStockData();
  },1000);
});


//STOP
function clearSetIntervalStop(){
  document.querySelector('.js-stop').addEventListener('click',()=>{
    clearInterval(clearMyInterval);
  });
}
clearSetIntervalStop();


//CLEAR DISPLAY
function clearDisplay(){
  document.querySelector('.js-clear').addEventListener('click',()=>{
    document.querySelector('.js-name').textContent = " ";
    document.querySelector('.js-sym').textContent = " ";
    document.querySelector('.js-price').textContent = " ";
    document.querySelector('.js-time').textContent = " ";


    //Arrow image to null
    const arrow = document.querySelector('.js-price-image');
    arrow.src = '';


    previousPrice = null;
  });
}
clearDisplay();