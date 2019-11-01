/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

console.log(container, 'lalala');

const container = document.querySelector('.carousel-container');

container.appendChild(carousel());



function carousel () {
  const carousel = document.createElement('div'),
        leftButton = document.createElement('div'),
        mtnImg = document.createElement('img'),
        compImg= document.createElement('img'),
        treesImg = document.createElement('img'),
        turnImg = document.createElement('img'),
        rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  mtnImg.src = "./assets/carousel/mountains.jpeg";
  compImg.src = "./assets/carousel/computer.jpeg";
  treesImg.src = "./assets/carousel/trees.jpeg";
  turnImg.src = "./assets/carousel/turntable.jpeg";

  leftButton.textContent = 'left';
  rightButton.textContent = 'right';

  carousel.appendChild(leftButton);
  carousel.appendChild(mtnImg);
  carousel.appendChild(compImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turnImg);
  carousel.appendChild(rightButton);

  leftButton.addEventListener('click', () => {
    plusSlides(-1);
  });

  rightButton.addEventListener('click', () => {
    plusSlides(1);
  })

  return carousel;
}